# Current Learning Gaps

Owner of misconceptions and the evidence needed to clear them.
reviewQueue.md owns scheduling; gaps do not take priority over due reviews.

Keep each entry short: specific misconception, evidence, next discriminating
check and clean evidence so far. Link a queue skill instead of copying dates.
Record observed conceptual errors even when no help was requested. Do not
interpret a difficult but correctly explained solve as a new misconception.

Clear after two spaced independent applications with accurate explanations,
under teachingGuide.md. Keep distinct read/write or choice/usage failures visible
inside an entry. Missing evidence is "unverified", not automatically a failure.
Historical detail is in progressLog.md and docs/archive/2026-09-14-system.md.

## Active gaps

| Gap | Evidence | Next evidence needed | Clean evidence |
| --- | --- | --- | --- |
| String-method recall | #2/#6; #36 needed a string-method reference to locate a character | Fresh string-result task: identify the relevant operation without a method cue. Lookup may still count as independent problem-solving, but not cold syntax recall. | 1/2 from 2026-07-24; #36 did not advance recall |
| Missing-key fallback and grouping | #27 grouping errors; #33 could not explain the fallback result despite correct code | increment-absent: write it independently and explain one missing-key and one existing-key result across spaced reps | 0/2; passed primer-checks did not count |
| Falsy versus missing values | #37 did not know zero is falsy | missing-value-choice: preserve a legitimate zero or empty value; explain one concrete result, never recite a list | 0/2; #40 practice explanation was accurate, but the original test had already primed the operator |
| Choosing a condition versus a fallback | #19/#28 used a fallback expression for a boolean branch | Fresh independent goal requiring the distinction; no same-session decision drill first | 0/2; #37 coded application was primed |
| Variable-key access and reading the old value | #11/#14 dot/bracket slips on reads/writes; #24/#31 omitted the existing count | increment-known: correctly read AND write a variable key; explain where the old value enters. Observe absent-key variant separately. | 0/2 for the combined move |
| Computed property versus string interpolation | #13 confused the two constructs; #21 later showed the property literal correctly | On spaced computed-key-object practice/application, explain whether the expression supplies a key or text; do not assume one syntax slip persists forever | Relevant #21 evidence; no new clean count assigned in this revision |
| Capturing returned values | #15 discarded string results; #31 missed the outer function return | Fresh practical task combining two familiar operations: capture the result at both relevant boundaries and explain the returned value | 1/2 from #36; #38 positive evidence, prior counter preserved. A successful two-operation practical task meets the predefined second context. |
| Selecting by receiver and output shape | #9 string/array confusion; #32 wrong map/filter meanings; #35 wrong goal-to-method choice; #37 reached for an array method on one object | select-subset: choose from a goal and explain array-of-original-records output. Separately observe receiver type on a non-array task. | Map/filter semantics: 1/2 from #38's map application; receiver-type gap has no clean counter |
| Reduce block-body lifecycle | #17/#19 initial value placement and separate return were unfamiliar | reduce-block: correct return/initial value and explanation without supplying the structure first; inspect #39 code before deciding how much reteaching is needed | No new credit assigned; #39 is later positive usage evidence |
| Combining copy and a variable property in one literal | #23 individual moves were known but their combination required help | lookup-by-id: combine independently and explain how prior entries are preserved. If syntax is named, count technique practice only. | #24 check passed; no independent spaced solve recorded |

## Cleared / maintenance evidence

- Reduce non-match passthrough: two clean solves, #20 and #29.
  Review skill remains active for spacing; do not resurrect a gap from the
  obsolete B-prep2 queue row.
- Computed-key object-literal write itself: #10 and #21 demonstrated it cold.
  The narrower interpolation confusion and combined lookup construction above
  still require their own evidence; they do not erase the demonstrated write.

When a gap clears, remove it from Active gaps and retain a short evidence line
here. Full narratives belong in the historical log, not in every active file.
