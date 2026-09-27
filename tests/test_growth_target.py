import unittest

from examples.growth_target.run import load, run
from examples.growth_target.schema import normalize


class GrowthTargetTests(unittest.TestCase):
    def setUp(self):
        self.reports = {item["report_year"]: item for item in load("reports.json")}
        self.expected = {item["report_year"]: item for item in load("expected.json")}

    def test_range_keeps_both_bounds(self):
        row = normalize(self.reports[2019], self.expected[2019])
        self.assertEqual((row["target_min"], row["target_max"]), (6.0, 6.5))
        self.assertIsNone(row["target_value"])

    def test_quote_must_appear_in_source(self):
        wrong = {**self.expected[2022], "target_quote": "全市生产总值增长8%"}
        with self.assertRaisesRegex(ValueError, "不在输入文本"):
            normalize(self.reports[2022], wrong)

    def test_fixture_error_survives_structural_validation(self):
        candidate = next(row for row in load("responses.json") if row["report_year"] == 2021)
        observed = normalize(self.reports[2021], candidate)
        self.assertNotEqual(observed["target_value"], self.expected[2021]["target_value"])

    def test_offline_run_reports_four_of_five(self):
        run("offline")
        import json
        from examples.growth_target.run import OUTPUT
        summary = json.loads((OUTPUT / "summary.json").read_text(encoding="utf-8"))
        self.assertEqual((summary["exact_matches"], summary["compared_reports"]), (4, 5))


if __name__ == "__main__":
    unittest.main()
