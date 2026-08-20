# Review Queue

Spaced repetition for ALL solved topics — not just weak spots. When an
exercise is solved, its topic enters the queue. Revisits use a NEW
variant exercise, never the same one.

Stages (expanding intervals): stage 1 = due +3 days, stage 2 = +10,
stage 3 = +30. Clean solve on revisit -> advance a stage (after stage 3,
remove — it's solid). Struggled -> reset to stage 1 and add to
weakSpots.md if it was a concept gap.

Review sessions (every 3rd session) pull exactly ONE short drill:
strictly the oldest overdue item, and not the same topic as the
previous review. Weak spots do NOT jump the line (changed 2026-08-03 —
see teachingGuide "Review sessions"). "Due" means due date <= today.
If nothing is due, run a normal roadmap session.

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
- string manipulation (capitalizeFirstWord) | last: 2026-08-03 | due: 2026-08-06 | stage 1 — HELD stage 08-03 (approach lookup: three separate discards of a method's return value; also learned strings are immutable). The 07-30 "map over every word when only the first needed it" gap DID recur — reached for map again before self-correcting to direct index access
- object destructuring/spread (updateEmail) | last: 2026-07-27 | due: 2026-08-06 | stage 2 — advanced 07-27 (syntax-only slip: `=` for `:` inside the literal)
- computed-key write in an object literal (`{ [key]: value }`) | last: 2026-08-07 | due: 2026-08-10 | stage 1 — HELD (not advanced): review 08-07 (createLabel) slipped back to `obj[field] = value` on an empty object; test accepted it since deepStrictEqual doesn't care how the object was built, so the literal form is still not the default reach on a fresh variant
- spread + computed-key override (copy object, replace one key) | last: 2026-08-12 | due: 2026-08-22 | stage 2 — advanced 08-12 (replaceField), clean revisit no help, test structurally enforced the literal form
- grouping/counting: increment a known key (read-modify-write) | last: 2026-08-16 | due: 2026-08-19 | stage 1 — HELD (not advanced): revisit 08-16 (review: bumpStat) needed approach-lookup help again — bracket notation was correct this time, but the write-side expression omitted the existing value entirely (`+ 1` instead of `stats[statName] + 1`); originally solved 07-29 with approach-lookup help (dot-vs-bracket slip on the read)
- grouping/counting: increment key that may be absent (`x || 0` idiom) | last: 2026-08-20 | due: 2026-08-23 | stage 1 — HELD (not advanced): revisit 08-20 (addPoints) needed approach-lookup help again — operator precedence confusion (`|| 0` grouped with the whole sum first, then `+ points` scoped inside only one `||` branch) before self-arriving at `(leaderboard[player] || 0) + points`; originally solved 07-31 with approach-lookup help (didn't incorporate the current value until prompted; also re-slipped dot-vs-bracket on the read, and confused computed-key syntax with template literals)
- grouping/counting: countByStatus (general, any status) | last: 2026-08-02 | due: 2026-08-05 | stage 1 — solved 08-02 with approach lookup (type-mismatch existence check, then dot-vs-bracket slip on the write side)
- array-method SELECTION stone A: sum one field across a filtered list (filter + reduce) | last: 2026-08-04 | due: 2026-08-07 | stage 1 — solved 08-04 with syntax + approach lookup (filter's return shape, reduce's initial-value argument)
- array-method SELECTION stone B-prep: reduce callback as a BLOCK BODY — mutate the accumulator then explicit `return`, plus where the initial-value argument goes | last: 2026-08-09 | due: 2026-08-12 | stage 1 — solved 08-09 (doublePositives) with approach-lookup help; defaulted to `||`-as-control-flow (over-applying the recently-drilled default-idiom pattern), and the mutate-then-unconditionally-return structure was told to him directly rather than self-arrived (Tim confirmed he'd have assumed implicit accumulation or reached for concat) — see weakSpots, primer-check due #20
- array-method SELECTION stone B-prep2: reduce ELSE-branch passthrough — non-match branch must return the accumulator unchanged, not reset it | last: 2026-08-11 | due: 2026-08-14 | stage 1 — spawned when #20 primer-check failed (said the else branch returns 0); solved clean same session (sumPositives), no help — clean 1/2, see weakSpots.md
- array-method SELECTION stone B (retry): build `{pending: 3, shipped: 5}` from a list (reduce with an OBJECT accumulator) | last: 2026-08-05 (stuck) | due: after weak spot clears | stage 1 — needed the answer on the block-body callback shape 08-05; B-prep cleared 08-09, B-prep2 cleared 08-11 (1st of 2) — runs as the next normal (non-review) exercise once the else-passthrough weak spot has its second clean solve
- array-method SELECTION stone C: mixed set — 3 tiny specs, name the method and why before coding | last: — | due: after selection stone B | stage 1
- group items into arrays by a key (groupByKey) | last: 2026-08-13 | due: 2026-08-16 | stage 1 — solved 08-13, no help, 7/10 (hard but unaided) — array-bucket create-or-append idiom; primer-check due #23, PASSED clean at start of #23
- build a lookup/index (id -> object, indexById) | last: 2026-08-15 | due: 2026-08-18 | stage 1 — solved 08-15 with syntax + approach lookup (combining spread-accumulate with a computed key in one object literal; see weakSpots.md); primer-check PASSED clean at start of #24
- unique primitives with a Set (dedupeArray) | last: 2026-08-19 | due: 2026-08-22 | stage 1 — solved 08-19, no help, 3/10 — first exercise after Set was taught (#25); primer-check on Set->array passed clean at session start

### Resolved primer-check (session #24)

Run at the start of #24. Asked for the combined spread-accumulate +
computed-key literal on a fresh lookup-building scenario (different
variable names than indexById). Passed clean, no help — wrote
`{...accum, [id]: {...item}}` cold. Confirms the 08-15 gap closed on
first retry.

### Resolved: addPoints run (session #27)

`addPoints` (written ahead as drill B of #15, `sessions/review-capitalize-addpoints/exercise2.js`)
ran as the review drill for #27, pulling the oldest-overdue `x || 0` idiom
item. Solved with approach-lookup help (9/10) — see progressLog #27 and the
updated queue entry above. Not a clean solve, so weakSpots.md line for this
idiom stays open, not marked clean 1/2.

### Resolved primer-check (session #17)

Run at the start of #17. Q1 (filter's return shape) passed clean — no
help. Q2 (why reduce throws on empty array without an initial value,
and what `0`/`[]`/`{}` do as that argument) was HAZY — got "sets what
the accumulator starts at" but not the "no first element to seed from,
no safe default to guess" reasoning, and not that `[]`/`{}` work by the
same mechanism for other result shapes. Foreshadowed the session's
actual stuck point (block-body callback shape + initial-value argument
placement) — see stone B-prep above and weakSpots.md.

### Resolved primer-check (session #16)

The #15-earned check (return-value capture: `someStr.toUpperCase();`
standing alone, and picking direct-index over map for a single-element
transform) was run at the start of #16 and PASSED — correct on both:
identified the call result evaporates unassigned, and reached for
split + bracket-index on the last-word scenario without prompting.

## Running order for order-gated items

1. selection stone A (closed 08-04) -> B-prep (closed 08-09) -> B-prep2 (closed 08-11, clean 1/2 on else-passthrough weak spot) -> B (retry, next non-review slot once else-passthrough weak spot fully clears) -> C

Reviews still take priority on every 3rd session; these fill the
non-review slots in this order.

### Resolved primer-check (session #20) — FAILED, spawned a stone

Run at the start of #20. Asked for the callback shape of a conditional
number-accumulator reduce; on the follow-up ("what does the non-match
branch return?") Tim said `0` instead of the accumulator unchanged —
same conflation as #19's weak spot, now confirmed on a fresh scenario
too. Per teachingGuide "when the check fails", spawned
`stone-reduce-else-passthrough` (sumPositives) same session instead of
proceeding to stone B retry. Solved clean, no help — first of two
clean solves needed to clear the weak spot (see weakSpots.md). Stone B
retry is next up once the weak spot fully clears.

## Pending primer-check

Owed at the START of session #15, before its exercise (teachingGuide
"Difficulty 7+"): 2-3 questions on a fresh mini-scenario targeting the
dot-vs-bracket write slip and the redundant existence-check habit from
#14:
1. given an object and a variable holding a key name, write (not read)
   an increment onto that key — check whether bracket notation is used
   automatically for both the read and the write half
2. why `obj[key] = (obj[key] || 0) + 1` doesn't need an `if`/`else` to
   check whether the key already exists
If the check fails, decompose into a stone isolating bracket notation
under compound-assignment (`+=`) specifically, since that's the new
variant where the slip showed up (prior stones only drilled `=`).

### Resolved primer-check (session #14)

The #13-earned check (`||` short-circuit + why `(counts[key] || 0) + 1`
needs grouping parens) was run at the start of #14 and PASSED — correct
on `||` evaluation, and on the follow-up with an existing value
(`counts[key] === 2`) correctly identified 2 vs. 3, showing the
precedence issue (not just the falsy-fallback case) was understood.

### Resolved primer-check (session #13)

The #12-earned check (choosing reduce with an object accumulator) was
run at the start of #13 and PASSED — 2/2 correct on the targeted
decision (reduce, `{}` accumulator). A third question on the absent-key
default idiom was answered wrong, but that's the gap stone 4 already
existed to drill, not a new ladder trigger.
