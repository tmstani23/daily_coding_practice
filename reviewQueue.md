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
- array methods (filter/map/reduce) | last: 2026-07-30 | due: 2026-08-09 | stage 2 — held stage 07-30 (syntax lookup only, but map was used as a forEach-style loop with an external accumulator — filter/reduce shape not exercised)
- string manipulation (formatInitialLastName) | last: 2026-07-30 | due: 2026-08-02 | stage 1 — held stage 07-30 (approach lookup: planned map over every word when only the first needed transforming)
- object destructuring/spread (updateEmail) | last: 2026-07-27 | due: 2026-08-06 | stage 2 — advanced 07-27 (syntax-only slip: `=` for `:` inside the literal)
- computed-key write in an object literal (`{ [key]: value }`) | last: 2026-07-28 | due: 2026-07-31 | stage 1 — cleared via stone 2 (setField), literal form written cold
- spread + computed-key override (copy object, replace one key) | last: 2026-07-28 | due: 2026-07-31 | stage 1 — solved clean, no help
- grouping/counting: increment a known key (read-modify-write) | last: 2026-07-29 | due: 2026-08-01 | stage 1 — solved 07-29 with approach-lookup help (dot-vs-bracket slip on the variable-keyed read)
- grouping/counting: increment key that may be absent (`x || 0` idiom) | last: — | due: after increment-known-key stone | stage 1
- grouping/counting (countByStatus — HARD, revisit after stepping-stones) | last: 2026-07-22 | due: after default-idiom stone | stage 1
- array-method SELECTION stone A: sum one field across a filtered list (spec states the goal only, never names a method — forces filter + reduce) | last: — | due: after countByStatus | stage 1
- array-method SELECTION stone B: build `{pending: 3, shipped: 5}` from a list (reduce with an OBJECT accumulator) | last: — | due: after selection stone A | stage 1
- array-method SELECTION stone C: mixed set — 3 tiny specs, name the method and why before coding | last: — | due: after selection stone B | stage 1

## Running order for order-gated items

1. `x || 0` default idiom (stone 4)
2. countByStatus (closes the 07-22 stuck)
3. selection stone A -> B -> C

Reviews still take priority on every 3rd session; these fill the
non-review slots in this order.

## Pending primer-check

Owed at the START of session #13, before its exercise (teachingGuide
"Difficulty 7+"): 2-3 questions on a fresh scenario about choosing an
array method by what it returns. Earned by #12 (rated 7-8). Tim did
not clear the 07-30 questioning — he got filter+map partly right but
answered `forEach` for a reduce-into-object case, reasoning that
reduce returns "a single value" and an object isn't one. If the check
fails again, the selection ladder above is already the response; move
it ahead of countByStatus.
