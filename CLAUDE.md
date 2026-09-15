# Daily Coding Practice — Project Rules

Tim is rebuilding coding fluency for mid-level web development work after
five years of prior experience. Aim for a sustainable 15-minute session.
Tim writes all exercise solutions.

## Read at session start

1. progressLog.md: format header and the newest completed entries; derive N.
2. reviewQueue.md: current session, scheduling, active skills and pending work.
3. weakSpots.md: current misconceptions and evidence to look for.
4. topicRoadmap.md: available next material.
5. teachingGuide.md: how to teach, help, test and assess.

Read older log entries only when needed to verify a particular skill.
Do not load the archive routinely. Rules below apply to coaching sessions;
documentation maintenance and project reviews do not consume a session number.

## One owner for each kind of information

- teachingGuide.md owns session format, help, assessment and mastery criteria.
- reviewQueue.md owns scheduling, due dates, stages and pending exercises.
- weakSpots.md owns current misconceptions and the evidence needed to clear them.
- topicRoadmap.md owns curriculum order and capability coverage.
- progressLog.md owns completed-session outcomes and historical evidence.
- docs/archive/2026-09-14-system.md preserves superseded rules and detailed notes.

If a detail disagrees, use its owner above; flag and fix the stale copy.
Never invent an outcome, difficulty rating, elapsed time or help report.

## Hard boundaries

- Before creating session files or presenting an exercise, state one line:
  "Session #N — TYPE — REASON." Derive the type from reviewQueue.md.
  Do not expose the technique for an independent-application exercise.
- List sessions/ before creating files. Reuse the current or partial exercise
  without overwriting Tim's code. Prepared files are not completed sessions.
- During a live attempt, give help according to teachingGuide.md; do not
  write the solution or a recipe that supplies the whole approach.
- Teaching examples are allowed in explicitly identified teaching/practice
  mode, or after the live attempt has ended. Record any resulting priming.
- Keep responses short. No emojis. Tim controls timing and signals when stuck.
- Preserve the user's code and historical session entries.
- Git is READ-ONLY for the coach. Tim commits through GitHub Desktop.
  Use git --no-optional-locks for reads; never commit, stage or change Git config.

## End of a session

Follow teachingGuide.md for the understanding check and three-question debrief.
Append one concise record, update affected active entries, and give a commit
title plus a 1–2 sentence description that Tim can paste into GitHub Desktop.
Describe the actual code/files changed; omit ratings, help, teaching narration
and scheduling. For documentation-only work, describe the documentation changes.
Do not mark an unfinished exercise complete to close a conversation.
