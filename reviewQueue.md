# Review Queue

Owner of scheduling, skill stages/dates and pending work. Teaching and evidence
rules live in teachingGuide.md. Historical details are in progressLog.md.

## Current state — revised 2026-09-14

- Latest completed session: #40 (2026-09-14).
- Current prepared/presented session: none.
  #41, sessions/practical-user-label, completed as an independent practical
  task with an accurate explanation.
- Cadence: backlog mode. Even-numbered sessions are dedicated reviews;
  odd-numbered sessions are normal slots, subject to the priorities below.
- Trial: sessions #40–#45 inclusive. Evaluate after #45 is logged.
- Deferred review: none.
- Partial continuation: none.
- Teaching application owed: none.
- Next practical slot eligible: #47; use the first available normal slot at or
  after this number. After completing a practical task at N, set eligibility N+6.

When presenting an assignment, record its number, folder, type, skill ID and
any priming in Current state. On completion, clear it or replace it with the
actual continuation. Prepared files and doc maintenance never increment N.

## Scheduling — apply in this order

1. Resume the current presented assignment, if not completed.
2. Continue a logged partial in the same files.
3. Run application owed from a teaching-only session at the next session.
   Mark it practice if the technique was supplied.
4. Run a deferred dedicated review, if recorded.
5. Run a dedicated review when required by the active cadence.
6. On a normal slot, run an eligible practical task.
7. Otherwise use eligible pending normal work in order, then the roadmap frontier.
   Skip a pending item whose due date or prerequisite has not been reached.

If priorities 2 or 3 displace a scheduled review, record a deferred review for
the next free session. Clear that flag when the review runs or when no review
is eligible. If a deferred review falls on a scheduled review slot, one drill
satisfies both. Do not stack catch-up drills into a session. Teaching does not
require manipulating session numbers to reserve two slots.

Dedicated reviews select the earliest due active skill, excluding the skill
from the previous dedicated review. Use the log to identify that skill.
Ties follow table order. If no other active skill is due, select due maintenance;
if neither is eligible, run normal work. Do not repeat the same dedicated review
just to fill a slot. Weak spots shape the exercise but do not jump the queue.

Normal work may exercise a due skill and update its date, but does not count as
a dedicated review for the same-topic exclusion. Independent reviews use fresh
variants. Technique reviews remain openly named practice.

## Cadence evaluation

At #45, count due ACTIVE rows and inspect the six-session evidence:
- If at most five are due and sessions remain manageable, switch to regular
  mode: every third session is a dedicated review.
- Otherwise retain backlog mode for six more sessions and move the trial endpoint
  forward by six. Adjust difficulty/queue duplication before adding workload.
- In regular mode, if more than five active skills are due at a six-session
  evaluation, return to backlog mode for a six-session trial.
- These thresholds are an initial operating choice, not a mastery measure.
  Report actual evidence to Tim; never declare a benefit from six sessions alone.

Keep the current-state fields up to date so future sessions need no archaeology.

## Stages, dates and maintenance

Stage 1: revisit after 3 days; stage 2: after 10; stage 3: after 30.
Dates are calendar dates, measured from the actual relevant attempt.
These are earliest review targets, not a promise to fit every item on its due day.

Use teachingGuide.md to decide advance / hold / reset:
- First independent successful application enters stage 1.
- On a qualifying independent revisit, advance one stage.
- After a qualifying stage-3 revisit, move to maintenance, due in 60 days.
- If stage holds after an attempt (assisted, primed, partial or unchecked), set
  due to attempt date +3 days without changing its stage. A practice-only new
  skill enters stage 1 provisionally; do not describe this as demonstrated mastery.
- After an actual regression, reset to stage 1, due +3 days.
- A maintenance success remains maintenance, due +60 days; regression returns
  it to active stage 1. An inconclusive/assisted maintenance attempt returns it
  to active stage 3 with a +3-day check.
- An unrelated teaching mention or a comprehension check does not change dates.
- Preserve separate fields for the last attempt and evidence; do not count a
  short check as a new clean solve.

One row per distinct skill. Merge aliases using the latest relevant evidence,
not the highest stage found. Distinct decisions/output shapes can stay separate.
Dates/stages carried over below are historical state, not newly certified mastery.

## Active skills

| Skill ID | Target | Last attempt | Due | Stage | Evidence / next requirement |
| --- | --- | --- | --- | --- | --- |
| conditional-total | Choose an approach for a conditional numeric total | 2026-08-04 | 2026-08-07 | 1 | #16 needed help. Fresh goal, at most two familiar steps. |
| reduce-block | Conditional mutation plus explicit block-body return and initial value | 2026-08-09 | 2026-08-12 | 1 | #19 needed the structure supplied. #39 is relevant later evidence, but no new retrospective credit. |
| group-buckets | Group records into arrays by a key | 2026-08-13 | 2026-08-16 | 1 | #22 unaided; check accurate explanation on revisit. |
| lookup-by-id | Build an id-to-record lookup | 2026-08-15 | 2026-08-18 | 1 | #23 combination needed help; #24 check passed, not a spaced solve. |
| increment-known | Read and increment an existing variable-keyed value | 2026-08-16 | 2026-08-19 | 1 | #24 omitted the old value; observe both read and write. |
| computed-key-object | Build a variable-keyed object, including copy plus override | 2026-08-12 | 2026-08-22 | 2 | #21 cold literal + copy; merges obsolete standalone literal entry last seen #18. Practice openly if requiring syntax. |
| set-dedupe | Unique primitives and Set-to-array conversion | 2026-08-19 | 2026-08-22 | 1 | #26 practice after teaching; later independent application needed. |
| increment-absent | Count with a possibly absent variable key | 2026-08-20 | 2026-08-24 | 1 | #27 assisted; #28 check did not certify retention. #33 explanation still wrong. |
| destructure-fields | Pull named fields, including a missing-field default | — | 2026-08-27 | 1 | Provisional: #30 did not exercise this. Name syntax openly for technique practice. |
| select-subset | Choose an approach returning a subset of original records | 2026-08-26 | 2026-08-29 | 1 | #32 correct method name, incorrect explanation; need independent choice + array semantics. |
| reduce-passthrough | Preserve accumulator on a non-match | 2026-08-23 | 2026-09-02 | 2 | #20 + #29 clean; merges stale B-prep2 row. Misconception already cleared. |
| tally-records | Build a counts object from records | 2026-08-27 | 2026-09-06 | 2 | #31 and #33; merges selection stone B with general counting. Check explanation; do not infer default-expression mastery. |
| string-result | Locate and transform a string portion | 2026-09-02 | 2026-09-12 | 2 | #36 syntax lookup, correct result; fresh goal with manageable steps. |
| missing-value-choice | Choose fallback versus condition; preserve legitimate zero/empty values | 2026-09-14 | 2026-09-17 | 2 | #37 cold branch/default choices, falsy gap. #40 practice solved with accurate explanation after the operator had been exposed; fresh independent rep required. |
| select-per-item | Choose one output value per input item | 2026-09-06 | 2026-09-16 | 2 | #38 independently solved and explained; retain separate subset decision. |
| copy-object | Copy an object without modifying its input | 2026-08-24 | 2026-09-23 | 3 | #30 demonstrated copy, not destructuring. |
| conditional-names | Return names from matching records | 2026-09-11 | 2026-10-11 | 3 | #39 syntax-only help. Narrowed former "filter/map/reduce" family; not blanket mastery of all three. |

## Maintenance

No skills moved to maintenance by this documentation revision.
Use the same columns as active skills, with stage "maintenance".

## Pending normal work

1. Schedule a fresh independent missing-value-choice variant no earlier than
   2026-09-17. Do not teach or quiz that same decision immediately before it.
2. Next available normal exercise: select-subset, fresh goal and accurate
   explanation afterward. Do not identify the technique in the opening.
3. Continue roadmap frontier: deduplicating objects by one field, after asking
   whether Tim can recall anything usable. Set construction/array conversion
   has already been practiced; do not silently reteach the whole section.

No stepping-stone ladder is pending. No primer-check is pending: the old #15
check was completed in #15; other resolved checks remain in the historical log.
Add new continuations, teaching applications and stones only from actual evidence.
Remove pending items when completed; avoid duplicating them in other docs.

## Migration notes

Merged three redundant rows without inventing solves: computed-key literal into
computed-key-object using #21; B-prep2 into reduce-passthrough using #29; selection
stone B into tally-records using #33. Restored increment-absent's last attempt to
#27's date; #28 was only a check. Broad array-family credit is now scoped to #39's
actual task. Full prior records are in docs/archive/2026-09-14-system.md.
