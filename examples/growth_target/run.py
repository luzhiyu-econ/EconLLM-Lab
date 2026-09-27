import argparse
import csv
import json
import os
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

from .client import check_config, request_candidate
from .schema import FIELDS, failure, normalize


ROOT = Path(__file__).resolve().parents[2]
FIXTURES = Path(__file__).resolve().parent / "fixtures"
OUTPUT = ROOT / "outputs" / "growth_target"
RESULT_COLUMNS = ("city", "report_year", "source_url", *FIELDS, "error")


def load(name):
    return json.loads((FIXTURES / name).read_text(encoding="utf-8"))


def write_csv(path, columns, rows):
    with path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=columns)
        writer.writeheader()
        writer.writerows(rows)


def run(mode):
    if mode == "online":
        check_config()
    reports = load("reports.json")
    expected = {item["report_year"]: item for item in load("expected.json")}
    fixtures = {item["report_year"]: item for item in load("responses.json")}
    keys = [(item["city"], item["report_year"]) for item in reports]
    if len(keys) != len(set(keys)) or set(expected) != {year for _, year in keys}:
        raise ValueError("报告主键重复或人工标准缺失")

    results, raw_records, comparisons = [], [], []
    for report in reports:
        year = report["report_year"]
        raw = None
        try:
            if mode == "offline":
                candidate = fixtures[year]
                raw = json.dumps(candidate, ensure_ascii=False)
            else:
                raw = request_candidate(report)
                content = json.loads(raw)["choices"][0]["message"]["content"]
                if not isinstance(content, str):
                    raise ValueError("服务未返回文本内容")
                candidate = json.loads(content)
            row = {**normalize(report, candidate), "error": ""}
        except (KeyError, ValueError, TypeError, IndexError, OSError) as error:
            row = failure(error)
        results.append({"city": report["city"], "report_year": year, "source_url": report["source_url"], **row})
        raw_records.append({
            "city": report["city"], "report_year": year, "source_url": report["source_url"],
            "input_text": report["text"], "mode": mode,
            "model": os.environ.get("LLM_MODEL") if mode == "online" else "simulated",
            "run_at_utc": datetime.now(timezone.utc).isoformat(),
            "raw_response": raw, "error": row["error"],
        })
        differences = [field for field in FIELDS if row[field] != expected[year][field]]
        comparisons.append({
            "city": report["city"], "report_year": year,
            "exact_match": not differences,
            "different_fields": ",".join(differences),
            "expected_status": expected[year]["status"],
            "observed_status": row["status"],
        })

    OUTPUT.mkdir(parents=True, exist_ok=True)
    write_csv(OUTPUT / "results.csv", RESULT_COLUMNS, results)
    write_csv(OUTPUT / "comparison.csv", comparisons[0].keys(), comparisons)
    with (OUTPUT / "raw_responses.jsonl").open("w", encoding="utf-8") as handle:
        for record in raw_records:
            handle.write(json.dumps(record, ensure_ascii=False) + "\n")
    summary = {
        "mode": mode,
        "total_reports": len(reports),
        "status_counts": dict(Counter(item["status"] for item in results)),
        "compared_reports": len(comparisons),
        "exact_matches": sum(item["exact_match"] for item in comparisons),
        "exact_match_rate": sum(item["exact_match"] for item in comparisons) / len(comparisons),
        "note": "离线候选为模拟回复，准确率不代表模型表现" if mode == "offline" else "在线结果仅与五份教学标准比较",
    }
    (OUTPUT / "summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{mode}: {summary['exact_matches']}/{summary['compared_reports']} 行与人工标准完全一致")
    print(f"输出目录：{OUTPUT}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="提取上海市年度经济增长目标")
    modes = parser.add_mutually_exclusive_group(required=True)
    modes.add_argument("--offline", action="store_true", help="使用模拟候选回复")
    modes.add_argument("--online", action="store_true", help="调用已配置的兼容 API")
    args = parser.parse_args()
    run("offline" if args.offline else "online")
