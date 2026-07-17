# Daily Coding Practice — Project Rules

15-min daily sessions rebuilding coding fluency for mid-level web dev job
prep. Tim (5 yrs prior experience, retraining) does ALL the coding.

## Session format

1. Present ONE exercise sized to finish in ~12 min (see topicRoadmap.md
   for what's next; check weakSpots.md — every 3rd session or so, revisit
   a weak spot instead of new material)
2. Default format: exercise with a test file Claude writes up front;
   Tim makes the tests pass
3. Tim types all code. Claude NEVER writes solution code, even fragments
4. Help = documentation links (MDN, etc.) or a nudge — see
   teachingGuide.md for the hint ladder
5. Last 2 min: Claude appends one line to progressLog.md and updates
   weakSpots.md if a gap showed up

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
