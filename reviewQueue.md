# Review Queue

Spaced repetition for ALL solved topics — not just weak spots. When an
exercise is solved, its topic enters the queue. Revisits use a NEW
variant exercise, never the same one.

Stages (expanding intervals): stage 1 = due +3 days, stage 2 = +10,
stage 3 = +30. Clean solve on revisit -> advance a stage (after stage 3,
remove — it's solid). Struggled -> reset to stage 1 and add to
weakSpots.md if it was a concept gap.

Review sessions (every 3rd session) pull 2-3 short interleaved drills:
oldest overdue first, weak-spot items get priority. "Due" means
due date <= today. If nothing is due, run a normal roadmap session.

Format: `- topic | last: YYYY-MM-DD | due: YYYY-MM-DD | stage N`
(due = last-seen date + 3/10/30 days for stage 1/2/3)

---
- array methods (filter/map/reduce) | last: 2026-07-20 | due: 2026-07-30 | stage 2
- string manipulation (titleCase) | last: 2026-07-18 | due: 2026-07-21 | stage 1
