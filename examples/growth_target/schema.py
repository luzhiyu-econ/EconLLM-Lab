FIELDS = (
    "target_quote", "target_expression", "target_value", "target_min",
    "target_max", "target_qualifier", "status",
)
STATUSES = {"found", "missing", "uncertain", "failed"}
QUALIFIERS = {"range", "around", "at_least", "exact"}


def _number(value):
    return isinstance(value, (int, float)) and not isinstance(value, bool)


def normalize(report, candidate):
    if not isinstance(candidate, dict):
        raise ValueError("回复必须是 JSON 对象")
    status = candidate.get("status")
    if status not in STATUSES:
        raise ValueError("status 不在允许值中")
    row = {key: candidate.get(key) for key in FIELDS}
    if status != "found":
        for key in ("target_quote", "target_expression", "target_qualifier"):
            if row[key] is not None and not isinstance(row[key], str):
                raise ValueError(f"{key} 类型错误")
        row.update(target_value=None, target_min=None, target_max=None)
        return row

    quote, expression = row["target_quote"], row["target_expression"]
    if not isinstance(quote, str) or not quote or quote not in report["text"]:
        raise ValueError("目标原句不在输入文本中")
    if "全市生产总值" not in quote:
        raise ValueError("目标原句不是全市生产总值指标")
    if not isinstance(expression, str) or expression not in quote:
        raise ValueError("目标表达不在原句中")
    if row["target_qualifier"] not in QUALIFIERS:
        raise ValueError("限定词类别错误")
    if row["target_qualifier"] == "range":
        if row["target_value"] is not None or not all(_number(row[k]) for k in ("target_min", "target_max")):
            raise ValueError("区间目标须保留上下界，且单值为空")
        if row["target_min"] > row["target_max"]:
            raise ValueError("区间下界大于上界")
    elif not _number(row["target_value"]) or row["target_min"] is not None or row["target_max"] is not None:
        raise ValueError("非区间目标须有单值，且上下界为空")
    return row


def failure(error):
    return {**{key: None for key in FIELDS if key != "status"}, "status": "failed", "error": str(error)}
