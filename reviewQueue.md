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

Stepping-stone ladder items are the exception: they're ORDER-gated, not
date-gated. Their due field reads `after stone N` (or `after stone N` /
`after stepping-stones` for the parked hard version). They're not pulled
by the date-based review logic; each runs as the next normal exercise
once the prior stone in its ladder is cleared, then converts to a normal
date-based queue entry (stage 1, due = solved-date + 3) on a clean solve.

---
- array methods (filter/map/reduce) | last: 2026-07-20 | due: 2026-07-30 | stage 2
- string manipulation (truncate) | last: 2026-07-27 | due: 2026-07-30 | stage 1 — held stage 07-27 (approach lookup: reached for an array method to join two strings)
- object destructuring/spread (updateEmail) | last: 2026-07-27 | due: 2026-08-06 | stage 2 — advanced 07-27 (syntax-only slip: `=` for `:` inside the literal)
- computed-key write in an object literal (`{ [key]: value }`) | last: 2026-07-28 | due: 2026-07-31 | stage 1 — cleared via stone 2 (setField), literal form written cold
- spread + computed-key override (copy object, replace one key) | last: 2026-07-28 | due: 2026-07-31 | stage 1 — solved clean, no help
- grouping/counting: increment a known key (read-modify-write, was "add-count") | last: 2026-07-25 | due: next non-review session | stage 1 — stuck 07-25 (needed the answer); resurface with a NEW variant, not sessions/2026-07-23-add-count
- grouping/counting: increment key that may be absent (`x || 0` idiom) | last: — | due: after increment-known-key stone | stage 1
- grouping/counting (countByStatus — HARD, revisit after stepping-stones) | last: 2026-07-22 | due: after default-idiom stone | stage 1
