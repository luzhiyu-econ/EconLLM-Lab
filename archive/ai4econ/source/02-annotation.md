# 2. Build an annotation protocol

The protocol tells a human reviewer and a model how to apply the same rule. Freeze it before the final evaluation run. Give each revision a version ID so that labels can be traced to the rule that produced them.

## Specify the output

For each `(document_id, sentence_index)`, request three fields:

```json
{
  "label": "yes",
  "evidence": "allocate 20 million yuan to the fund this year",
  "reason": "The sentence commits a stated amount to a fiscal fund."
}
```

The label must be one of `yes`, `no`, or `uncertain`. Evidence must be copied from the supplied source text, not reconstructed. An empty evidence field is acceptable for `no` or `uncertain` if no supporting span exists.

## Draft the instruction

> Decide whether the target sentence states a concrete fiscal support commitment. Apply the definitions in the task guide. Return only the three fields above. Quote the shortest supporting span from the supplied text. If the sentence needs missing context, return `uncertain`. Do not infer a fiscal instrument from general policy language.

Send the target sentence, stable ID, and only the context the rule permits. Keep a record of the exact prompt, model version, parameter settings, and input text for each run.

## Validate before analysis

1. Parse the response as JSON and check required fields and allowed labels.
2. Check that any nonempty evidence span occurs in the supplied text.
3. Route malformed responses, missing evidence, and `uncertain` labels to a review queue.
4. Keep raw responses even when a later parser or human reviewer changes the final label.

Never turn a failed call into `no`. A missing result is a processing failure, while `no` is a substantive judgment.

**Exercise:** Run your protocol on the ten hand-labeled examples from Chapter 1. Revise the wording only where the observed disagreement reveals an unclear rule, and record the revision.
