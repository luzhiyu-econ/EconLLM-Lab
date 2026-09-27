# 4. Use AI evidence in an economics paper

An evaluated label is a measurement, not an identification strategy. Before using it in a regression, state what economic concept it measures and what population of documents it covers.

## Construct the variable

For a city-year analysis, one possible measure is:

```text
policy_share(city, year)
  = positive eligible sentences / all eligible sentences
```

Define *eligible* before computing the share. Keep the number of source documents, eligible sentences, undecided labels, and processing failures alongside the measure. Do not put undecided or failed rows in the `no` category. If you exclude them from the denominator, report the exclusion rate and check whether it varies across city-years.

An alternative is a document-level indicator: whether any sentence in a document is positive. This changes the observation unit and the meaning of the aggregate. Choose the measure to match the research question, not whichever produces a stronger coefficient.

## Match timing and design

Record publication and effective dates separately. A document published after an outcome cannot be treated as a prior exposure without a reasoned timing rule. Also check whether document availability changes across places or years, because a trend in collected documents can look like a trend in policy attention.

If the variable is used as a treatment, the causal design still needs a credible comparison group, timing, and assumptions about confounding. If it is used as an outcome, label error can obscure changes or create apparent differences when error rates vary by group.

## Report the measurement boundary

In the paper or appendix, provide the task definition, sample frame, protocol version, held-out evaluation results, review policy, and aggregation rule. Show at least one sensitivity analysis that changes a defensible measurement choice, such as how `uncertain` rows are handled.

**Exercise:** Write a paragraph naming your estimand and explaining exactly how the AI-derived variable enters it. Then list two ways measurement error could bias your interpretation.
