# Daily Coding Practice — Project Rules

15-min daily sessions rebuilding coding fluency for mid-level web dev job
prep. Tim (5 yrs prior experience, retraining) does ALL the coding.

## Session start (do this first, every session)

Read these before presenting anything, in order: progressLog.md (for the
session count + history), reviewQueue.md (what's due), weakSpots.md
(priorities), topicRoadmap.md (what's next), teachingGuide.md (how to run
it). Then follow the numbered format below.

Timing is Tim-driven. Claude never tracks wall-clock time; the minute
figures are guides for Tim, who signals "time's up" or "I'm stuck".

## Session format

1. Determine session number: take the `#N` on the newest progressLog.md
   entry and add 1. (Entries are numbered; if the newest line somehow
   lacks a number, count entry lines below the `---` instead and
   renumber.)

   MANDATORY PRE-FLIGHT — before creating ANY files or writing the
   opening message, state in chat, in one line: the session number, the
   result of `N %% 3 == 0`, and the session type it implies. No files
   until that line is written. This is the check that catches a review
   session being missed.

   If divisible by 3, this is a REVIEW session: exactly ONE short drill
   from reviewQueue.md — strictly the oldest overdue item, and never the
   same topic as the previous review session. Weak spots do NOT jump the
   line (see teachingGuide.md "Review sessions"). If no items are due,
   run a normal session instead.
   Precedence: if a stepping-stone is pending (from a prior `stuck`) and
   this is a review session, the review WINS — it runs as scheduled and
   the stepping-stone runs the next non-review session.
   Otherwise present ONE exercise (see topicRoadmap.md for what's next).
   Sizing: ONE transform / one concept, approach ≤2 steps, ≤15 lines of
   solution, target 8 min. Step count matters more than line count — a
   4-step pipeline is too big even if it's short.
2. Default format: exercise with a test file Claude writes up front;
   Tim makes the tests pass. Build the files and the opening message
   from teachingGuide.md "Opening template" — every item there is
   mandatory, every session. That template is the single source of
   truth; do not restate it here.
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
   Which one it was: see teachingGuide.md "Facts vs. the shape".
6. Debrief: after tests pass (or time's up), Claude asks the two
   multiple-choice questions from teachingGuide.md "Debrief" — that
   section owns the options, the anchors, and how answers drive stage
   advancement, weakSpots, and sizing.
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
   description (1-2 sentences) Tim can paste into GitHub Desktop. Write
   it as a normal commit message describing the CODE CHANGE — what the
   exercise implements and which files changed. Description states WHAT
   was accomplished only — no why, no how (no method/technique names,
   no implementation narration). It is not a session summary: no
   difficulty rating, no help-used, no outcome, no "next up". That
   belongs in progressLog.md, not the commit.

## Hard rules

- Follow teachingGuide.md exactly — it defines how to teach
- Logging must take < 1 min; one line per session, no essays
- Keep responses short; Tim is on a limited budget
- No emojis

## Git: READ-ONLY for Claude. Never run git write operations.

Git writes from Claude's sandbox leave orphaned .git lock files Tim has
to clear by hand. Tim commits via GitHub Desktop after each session
(doubles as streak tracking). Reads are fine — always use
`git --no-optional-locks <cmd>`.
