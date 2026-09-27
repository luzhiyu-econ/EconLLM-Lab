# 3. Evaluate the output

Evaluation asks how often the protocol agrees with an independently reviewed reference sample. Use documents that were not used to write examples or revise the prompt.

## Account for every row

Suppose the held-out sample has 100 sentences. The system returns `yes` or `no` for 90, `uncertain` for 7, and fails to produce a valid response for 3. Report **coverage as 90/100**. Keep the ten other rows visible and review them separately; they are not negative predictions.

For the 90 decidable rows, compare the model's label with the reference label:

| Reference label | Predicted `yes` | Predicted `no` |
| --- | ---: | ---: |
| `yes` | 20 | 10 |
| `no` | 5 | 55 |

Here, precision for `yes` is `20 / (20 + 5) = 0.80`: among predicted positives, how many were correct? Recall is `20 / (20 + 10) ≈ 0.67`: among actual positives, how many were found? The example has 90 decidable rows; its scores say nothing about the ten omitted rows.

## Look beyond one score

Review false positives and false negatives with their source text. Group errors by year, region, document type, sentence length, or other characteristics that matter for the study. If positive sentences are rare, overall accuracy can hide poor recall.

Repeated sentences from the same document can make a random sentence split look easier than deployment. Keep entire documents together when making development and test sets. If the analysis spans time, also test on a later period when possible.

Report the sample design, class counts, coverage, confusion matrix, and error examples. If a reviewer changes a label, preserve both the original output and the reviewed decision.

**Exercise:** Compute coverage, precision, and recall for your held-out sample. Read at least five disagreements and state whether they reveal a rule problem, missing context, or a model error.
