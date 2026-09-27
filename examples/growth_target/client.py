import json
import os
from urllib.request import Request, urlopen


SYSTEM_PROMPT = """从上海市政府工作报告节选中提取报告当年全市生产总值增长预期目标。
只返回 JSON 对象，字段为 target_quote、target_expression、target_value、
target_min、target_max、target_qualifier、status。
限定词类别可用 range、around、at_least、exact；未找到用 missing，
无法判断用 uncertain。区间目标填写上下界，单值留 null；非区间反之。
不要提取上一年实际增速，也不要把没有目标填成 0。"""


def check_config():
    names = ("LLM_BASE_URL", "LLM_MODEL", "LLM_API_KEY")
    missing = [name for name in names if not os.environ.get(name)]
    if missing:
        raise ValueError("缺少环境变量：" + ", ".join(missing))


def request_candidate(report):
    base = os.environ["LLM_BASE_URL"].rstrip("/")
    payload = {
        "model": os.environ["LLM_MODEL"],
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": f"报告年份：{report['report_year']}\n节选：{report['text']}"},
        ],
    }
    request = Request(
        base + "/chat/completions",
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={"Authorization": "Bearer " + os.environ["LLM_API_KEY"], "Content-Type": "application/json"},
        method="POST",
    )
    with urlopen(request, timeout=60) as response:
        raw = response.read().decode("utf-8")
    return raw
