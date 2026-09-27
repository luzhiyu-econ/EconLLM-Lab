# 1. Define the task

Start with the variable the economic analysis needs. In this example, the target is a sentence-level indicator for a **concrete fiscal support commitment** in policy documents. A model's general summary of a document is too broad to serve as that variable.

## Fix the observation unit

One row is one sentence from one source document. Give it a stable key such as `(document_id, sentence_index)`. Store the full sentence, the document date, and a pointer to the original document. If a sentence depends on a heading or neighboring sentence, retain that context in separate fields.

Do not silently switch between sentence and document counts. A share of positive sentences uses all eligible sentences as its denominator; a share of positive documents uses eligible documents. The two quantities answer different questions.

## Write the decision rule

For this exercise, assign `yes` only when the sentence states a fiscal instrument **and** a concrete commitment to provide, increase, reduce, or finance something. Use `no` for aspirations and general background. Use `uncertain` when the sentence cannot be judged from the available context.

| Invented sentence | Label | Reason |
| --- | --- | --- |
| “The city will allocate 20 million yuan to the fund this year.” | `yes` | Amount, instrument, and commitment are explicit. |
| “We will strengthen support for innovative firms.” | `no` | No fiscal instrument is stated. |
| “The subsidy will continue as described above.” | `uncertain` | The relevant terms are outside this sentence. |

The rule is an example, not a universal definition. Your own research question determines whether tax relief, guarantees, and existing programs belong in the positive class.

## Prepare a reference sample

1. Sample documents across years, regions, and document types relevant to the study.
2. Record a human label and a short reason for each sampled sentence.
3. Keep examples used to revise the rule separate from the final evaluation sample.
4. Split by document, rather than by sentence, when sentences from one document are closely related.

**Exercise:** Write one sentence defining your row, one sentence defining `yes`, and one sentence defining `uncertain`. Then label ten examples by hand and note where the rule needs clarification.
