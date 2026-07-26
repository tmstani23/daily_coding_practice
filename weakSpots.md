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
- [ ] create-if-absent then increment — the `x || 0` default idiom for a key that may not exist yet; untested in isolation so far (2026-07-22, narrowed 2026-07-25 after the computed-key write was identified as the separate, prior gap)
- [ ] array method RETURN VALUES — reached for forEach when a returned array was needed (forEach returns undefined, map returns the array); also passed the wrong separator to join. Picking the method by what it RETURNS, not just what it iterates (2026-07-24)
- [ ] computed property names for WRITING a key — conflated spread with key-assignment; tried `{...counts, ...counts[key] + 1}` instead of `{...counts, [key]: counts[key] + 1}`. Reading via `obj[key]` was fine (confirmed cold), but setting a key from a variable inside an object literal is a separate, undrilled move (2026-07-25) | still open after 07-26: the stone was solved with `obj[key] = value` after creating an empty object, so the literal form remains unexercised — no clean mark
