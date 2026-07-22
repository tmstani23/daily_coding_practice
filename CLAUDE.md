# Daily Coding Practice — Project Rules

15-min daily sessions rebuilding coding fluency for mid-level web dev job
prep. Tim (5 yrs prior experience, retraining) does ALL the coding.

## Session start (do this first, every session)

Read these before presenting anything, in order: progressLog.md (for the
session count + history), reviewQueue.md (what's due), weakSpots.md
(priorities), topicRoadmap.md (what's next), teachingGuide.md (how to run
it). Then follow the numbered format below.

Timing is Tim-driven: Claude does NOT track wall-clock time during the
session. The minute figures (8-min target, 12-min window, 5-min stuck
rule) are guides for Tim, who watches his own clock and signals "time's
up" or "I'm stuck". Claude acts on those signals, not an internal timer.

## Session format

1. Determine session number: count entry lines in progressLog.md
   (lines below the `---`) and add 1. If divisible by 3, this is a REVIEW session: 2-3 short
   interleaved drills from reviewQueue.md (due items; weak spots first —
   see weakSpots.md). If no items are due, run a normal session instead.
   Precedence: if a stepping-stone is pending (from a prior `stuck`) and
   this is a review session, the review WINS — it runs as scheduled and
   the stepping-stone runs the next non-review session. (Reviews fire
   only on multiples of 3, so preempting one would delay spaced
   repetition by 3 sessions; a bumped stepping-stone only ever waits
   one. If a stuck-heavy stretch ever floods the due queue faster than
   reviews drain it, the lever is review throughput — an extra drill or
   a more frequent review — not this tie-break.)
   Otherwise present ONE exercise (see topicRoadmap.md for what's next).
   Sizing: ONE transform / one concept, approach ≤2 steps, ≤15 lines of
   solution, target 8 min. Step count matters more than line count — a
   4-step pipeline is too big even if it's short.
2. Default format: exercise with a test file Claude writes up front;
   Tim makes the tests pass. The opening message MUST include, every
   session (see teachingGuide.md "Opening template"):
   - the exercise statement + the test file
   - the run commands (cd into the folder; run the file for his own
     console.log testing; run the tests)
   - an example console.log call with a concrete argument, to paste at
     the bottom of exercise.js for his own testing
   - the two reminders: (a) plan-in-comments first, (b) say "decompose
     it" if stuck on approach
3. Tim types all code. Claude NEVER writes solution code, even fragments
4. Help = documentation links (MDN, etc.) or a nudge — see
   teachingGuide.md for the hint ladder
5. The 12-min coding window excludes reading the exercise, logging, and
   the commit message — those don't eat the clock. Two unfinished
   outcomes, handled differently:
   - `partial` = on track, just slow. Topic HOLDS its stage (no reset),
     the SAME exercise becomes the first item next session — Tim keeps
     his existing session folder and continues in it; don't create a new
     one or rewrite the exercise.
   - `stuck` = too hard: couldn't finish even at time's up, or needed
     the full answer. The exercise was sized a rung too high. Do NOT
     repeat it next session. Instead Claude writes a simpler
     stepping-stone (see teachingGuide.md "When an exercise is too
     hard") that isolates the one sub-skill that tripped Tim; that runs
     the next NON-review session (reviews take priority — see rule 1),
     and the hard version is parked to resurface later.
   Looking up a method mid-drill is fine and never counts against Tim.
6. Debrief: after tests pass (or time's up), Claude asks two
   multiple-choice questions — anchored difficulty 1-10 and help used
   (none / syntax lookup / approach lookup / decompose / needed answer).
   See teachingGuide.md "Debrief" for anchors and how answers drive
   stage advancement, weakSpots, and sizing.
7. Last 2 min: Claude appends one line to progressLog.md
   (`... | solved/partial/stuck | N/10, help-used | takeaway`), updates
   reviewQueue.md (new topic enters queue / revisited topic advances or
   resets stage per debrief rules; a partial holds stage), and updates
   weakSpots.md only if the debrief flagged an approach-level gap. On a
   `stuck` outcome Claude also: writes the stepping-stone exercise for
   next session, adds a follow-up tier under the topic in
   topicRoadmap.md, and notes the hard version in reviewQueue.md so it
   resurfaces after the stepping-stone lands.
8. End of session: Claude gives a concise commit title (one line) and
   description (1-2 sentences) Tim can paste into GitHub Desktop

## Hard rules

- Follow teachingGuide.md exactly — it defines how to teach
- Logging must take < 1 min; one line per session, no essays
- Keep responses short; Tim is on a limited budget
- No emojis

## Git: READ-ONLY for Claude. Never run git write operations.

Claude's sandbox can create files but not delete them — git writes
(add/commit/etc.) leave orphaned .git lock files Tim must remove by
hand. Tim commits via GitHub Desktop after each session (doubles as
streak tracking). Read-only git is fine but always use
`git --no-optional-locks <cmd>`.
