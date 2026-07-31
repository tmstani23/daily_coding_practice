# Weak Spots

Concept gaps that showed up during sessions. Review sessions (every 3rd)
prioritize these over regular reviewQueue.md items. Clear an item only
after TWO spaced clean solves (mark the first with a date; clear on the
second).

Format: `- [ ] concept — what happened (YYYY-MM-DD)`
After first clean solve, append ` | clean 1/2 (YYYY-MM-DD)` to the line.
On the second spaced clean solve, delete the line.

---
- [ ] string methods recall (split/charAt/slice) — had to look up rather than recall cold on titleCase exercise (2026-07-18) | clean 1/2 (2026-07-24)
- [ ] create-if-absent then increment — the `x || 0` default idiom for a key that may not exist yet (2026-07-22, narrowed 2026-07-25). Now tested in isolation (stone 4, 07-31): needed approach-lookup help to reach `(counts[key] || 0) + 1`. Tim confirmed (07-31) the actual blocker was two things: (a) not knowing `||` itself — how it evaluates/short-circuits on a falsy left side, and (b) not knowing the expression needed explicit grouping parens around `counts[key] || 0` before `+ 1` — without them precedence doesn't do what you'd want. Narrower than "the idiom" broadly; these are the two sub-facts to check next time.
- [ ] dot vs. bracket notation for a variable-keyed READ, RECURRING — same slip as 07-29 (`counts.key` instead of `counts[key]`) resurfaced 07-31 inside a more complex expression; not yet solid under added load
- [ ] computed property names (`{ [key]: value }`) confused with template literal syntax (`` `${key}` ``) — both use a similar "value inside a delimiter" shape but are unrelated features; one builds an object key, the other interpolates into a string (2026-07-31)
- [ ] array method RETURN VALUES — reached for forEach when a returned array was needed (forEach returns undefined, map returns the array); also passed the wrong separator to join. Picking the method by what it RETURNS, not just what it iterates (2026-07-24)
- [ ] choosing the iteration method by what it RETURNS, not "it loops" — used `map` twice on 07-30 where its return value was discarded: once as a forEach-style loop mutating an external accumulator (filter+reduce was the shape), once planned over every word when only the FIRST element needed transforming (map applies the same transform to all). Sibling of the return-values gap below; the new part is picking between map / filter / reduce / forEach / direct index access by shape of the job (2026-07-30)
- [ ] method selection by RECEIVER TYPE (array vs string) — reached for `join` to append '...' to a string; join is an array method, combining two strings is a different operation. Sibling of the return-values gap above: both are "pick the method by what it operates on / gives back", not by what it vaguely does (2026-07-27)
- [ ] computed property names for WRITING a key — conflated spread with key-assignment; tried `{...counts, ...counts[key] + 1}` instead of `{...counts, [key]: counts[key] + 1}`. Reading via `obj[key]` was fine (confirmed cold), but setting a key from a variable inside an object literal is a separate, undrilled move (2026-07-25) | still open after 07-26: the stone was solved with `obj[key] = value` after creating an empty object, so the literal form remains unexercised — no clean mark | clean 1/2 (2026-07-28, setField: `{...record, [field]: value}` cold, no help)
- [ ] dot vs. bracket notation for a variable-keyed READ inside a combined expression — wrote `counts.key` (accesses a property literally named "key") instead of `counts[key]`, causing NaN; first time reading and writing the same variable key together in one expression, under the added load of the arithmetic (2026-07-29)
