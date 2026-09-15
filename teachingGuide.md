# Teaching Guide

Owner of teaching, session format, help, assessment and mastery criteria.
Scheduling and current work live in reviewQueue.md.

## Purpose and exercise types

Choose the exercise type before writing the spec or tests.

| Type | What Tim sees | What it can demonstrate |
| --- | --- | --- |
| Technique practice | The technique is named openly; examples or scaffolding may be provided | Correct use and understanding with the stated support |
| Independent application | A goal and behavioral constraints; no suggested technique | Choosing and using an appropriate approach without an answer cue |
| Practical task | One bug, test, or small requirement in existing code | Applying familiar skills in a realistic context; record whether assisted |

Practice after a correction is useful learning. It does not demonstrate
independent recall. "Primed" means a technique or approach was supplied before
the attempt, including by a test, folder name, example or same-session quiz.
Record it honestly and use a fresh, delayed variant to measure independence.

Accept a correct, reasonable alternative implementation on independent tasks.
Credit what the implementation and explanation demonstrate. If a particular
syntax still needs practice, schedule that explicitly; do not penalize a valid
solution for missing a hidden preferred method.

## Size and timing

- One exercise per session. Target about 8 minutes of coding, at most two
  approach steps and roughly 15 lines of solution. These are sizing guides,
  not a mandate to compress readable code into one line.
- Aim for 15 minutes total, including reading and a short check/debrief.
  Tim controls time. At his time limit, stop or record a partial.
- Practical tasks replace a drill; they do not add a second assignment.
  Combine at most two already-practiced skills and introduce no extra tooling.
- If reading, debugging or lookup consumes the window, record the actual
  bottleneck. Slow completion alone does not prove a conceptual gap.
- Do not impose immutable copying, terse expressions or particular syntax
  unless those are part of the declared learning objective or behavior.

## Start and opening template

Use the preflight and reading order in CLAUDE.md, then list sessions/.
Reuse an existing prepared/partial exercise without erasing Tim's work.

For a new exercise, create:
1. exercise.js: short comment spec, function stub, module.exports, example call.
2. exercise.test.js: small, readable tests of the stated behavior.

Spec format: one-sentence goal, two or three input/output examples, then only
necessary constraints. Every tested behavior must be stated, including empty
input or mutation requirements when relevant. Keep coaching instructions in chat.
For independent exercises, use goal-based names such as quantity-label.

Opening message:
1. Link to the exercise file and present its test file once.
2. Provide the actual run commands:
   cd sessions/<goal-name>
   node exercise.js
   node --test exercise.test.js
3. Two short reminders:
   "Plan first: write your approach as step comments before any code, then
   paste the comments to me for a quick sanity check."
   "Stuck on approach? Just say 'decompose it'."

Do not duplicate this opening in commentary and final. Do not include hints
or method names for independent application. Practical tasks use equivalent
file links and run commands; do not create extra stubs when editing existing code.

## Tests and exercise verification

Independent tasks use behavior tests only. Never search source code for the
expected operator/method, or hide the answer in test names, imports or fixtures.
Test non-mutation when required, but do not confuse it with requiring a particular
copying technique. Behavioral correctness cannot prove how an answer was chosen.

Technique practice may state the exact syntax being practiced. Prefer reviewing
the code afterward to brittle regex checks. If a structural constraint is truly
needed, state it openly and explain that this is technique practice.

Before presenting files, check spec/test agreement and parse both JavaScript
files. Running tests against an empty stub is expected to fail; that verifies
the starting state, not a completed solution. Never write the solution to test
it for Tim. Reuse established test conventions and avoid dependencies.

## Help during a live attempt

Stay quiet while Tim works unless asked. Check his plan for the requested
result and missing cases. Ask a question rather than replacing his plan.

Use the smallest useful help:
1. Clarify the goal and ask what he has tried.
2. Ask one pointed question about the observed behavior or an example.
3. Explain a missing fact or link documentation.
4. If Tim requests decomposition, describe a limited next step in plain English.

Do not rigidly restart at rung 1 when his question clearly asks for a fact.
Do not supply the complete approach disguised as questions or plain English.
If a full explanation is needed, explicitly end the independent attempt and
switch to assisted practice. Tim still writes the exercise solution.
Afterward, teaching may include worked code.

Record the substance of help, not just its source or rung:
- A syntax/factual reference does not invalidate independent approach selection.
- A cue naming the needed method, a decisive approach correction or a full
  recipe makes the corresponding decision assisted.
- A neutral clarification of an ambiguous spec is not a learner error.
- If tests already revealed the answer, removing the cue cannot undo that exposure.

## Teach when needed, in any roadmap section

Ask "Can you recall anything usable about this right now?" before unfamiliar
material, or when evidence suggests no usable starting point. Do not assume
a topic is known because of prior employment or its place in the roadmap.

If recall is blank, explain one idea with a short worked example and why it
behaves that way. Ask one comprehension question. If time permits, Tim tries
a related micro-exercise as technique practice; otherwise log a taught session
and queue application. The immediate check measures understanding now, not retention.

On a failed check, reteach the specific idea more simply. Do not automatically
spawn a ladder. If the same idea fails twice, reconsider the example, prerequisite
or size before prescribing more repetition. Queue a fresh delayed application
when there is enough understanding to attempt it.

## After the attempt: one understanding check

After tests pass, ask ONE brief question suited to the skill:
- Why does your approach fit the requested output?
- What would change for this edge case?
- What value does this line produce, and why?
- For practical work: what caused the bug, or what does your new test catch?

Do not turn this into a multi-question quiz. Ask before teaching a correction.
Record explanation as accurate / corrected / not checked.
If time has expired or the attempt is unfinished, record not checked rather
than inventing understanding; the later continuation can supply the check.

A correct result with an incorrect explanation is still a completed exercise.
Teach the misconception and retain that distinction in the record.

## Debrief — three quick questions

Ask all three together, preferably using a multiple-choice UI when available.
Never fill in unanswered values. If the UI lacks multi-select, allow a combined
free-text help answer.

1. Elapsed coding time: under 10 / 10–20 / 20–40 / over 40 minutes.
2. Difficulty with the help used:
   1–2 trivial; 3–4 easy; 5–6 manageable effort; 7–8 hard; 9–10 overwhelming.
   Keep time, completion and help separate from this rating.
3. Help: none / syntax or fact lookup / approach or method cue /
   decomposition / worked answer. Allow more than one.

Keep the understanding check and debrief within the session budget.
An observed misconception can be recorded even when Tim reports no help.
A high difficulty rating alone does not trigger teaching or more quizzes.

## Diagnose before choosing the next action

| Evidence | Record and next action |
| --- | --- |
| Progressing, time ran out | partial; continue the same file |
| Missing fact | Explain that fact; schedule a small later check |
| Several unfamiliar moves bundled | Isolate one move as a stepping-stone |
| Wrong model of how code behaves | Explain the specific misconception; revisit a fresh example |
| Coach/test revealed the approach | Record assisted practice; fresh delayed application, no automatic remedial ladder |
| Correct but slow | Record where time went; adjust scope or practice fluency |
| Independently solved and explained | Advance only the demonstrated skill under the rules below |

Use stuck only when blocked and unable to continue independently.
Finishing with assistance is solved with assisted evidence, not automatically
stuck. Historical labels remain as originally recorded.

A stepping-stone isolates one genuinely unfamiliar move; check prior code/logs
before assuming it is known. Keep reads, writes and combinations distinct when
the evidence warrants it. After a stone, return to the original goal through a
fresh variant. After repeated failure, reconsider the teaching/design rather than
indefinitely growing a ladder. Pending work belongs only in reviewQueue.md.

## Evidence and mastery

Record these separately:
- Outcome: solved / partial / stuck / taught.
- Evidence: independent / assisted / practice.
- Explanation: accurate / corrected / not checked.
- Help, elapsed time and difficulty from Tim.

A fresh independent revisit with correct behavior and an accurate explanation
advances that skill one stage; a first application enters stage 1 as specified
in reviewQueue.md. Syntax/fact lookup is compatible with this if it
did not supply the approach; it does not certify unaided syntax recall.
A technique practice solve demonstrates usage, but does not advance an independent
application stage. Never advance a broad family for a narrow skill it did not test.

Hold stage for partial, assisted, primed or unchecked understanding.
Reset to stage 1 only when a delayed independent attempt provides actual evidence
of forgetting the target skill, not because of coach leakage or an oversized task.
Apply interval and rescheduling rules in reviewQueue.md.

Clear a misconception after two fresh, spaced, independent applications with
accurate explanations that directly exercise it. A next-day comprehension check
or repeating a supplied answer does not qualify. Maintain existing valid evidence;
do not invent new credit while reorganizing docs. Define the required second
context in advance rather than repeatedly moving the goalposts.

## Close and periodic review

Give at most two sentences of feedback: one concrete success and, if needed,
one next improvement. Append one short record using progressLog.md's schema.
Update only affected skills, misconceptions and curriculum coverage.
Record pending work once in reviewQueue.md.

At the trial endpoint specified there, use the last six session records to assess:
independent accurate explanations, help needed, actual time, review backlog and
coach errors. Do not ask Tim for another quiz or fabricate a baseline. Report
what improved, what remains unknown and one adjustment worth trying next.
Keep the sustainable session length ahead of clearing a numeric backlog target.

Finish with a paste-ready commit title and short description per CLAUDE.md.
