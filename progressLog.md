# Progress Log

One line per session, oldest first — newest at the bottom.
Format: `#N | YYYY-MM-DD | topic | solved/partial/stuck | N/10, help-used | one-phrase takeaway`

Entries are NUMBERED. Next session number = last `#N` + 1. Every session
whose number is divisible by 3 is a review session.

---
#1 | 2026-07-17 | array methods (filter/map/reduce) | solved | clean chain, first session
#2 | 2026-07-18 | string manipulation (titleCase) | solved | needed to look up split/charAt, not recalled cold
#3 | 2026-07-20 | review: array methods | solved | clean revisit, filter/map/reduce chain came fast
#4 | 2026-07-21 | object destructuring/spread (updateFirstName) | solved | 3/10, none | spread-copy-then-mutate pattern came naturally
#5 | 2026-07-22 | grouping/counting (countByStatus) | stuck | 9/10, needed answer | accumulate-into-object-by-dynamic-key not yet a known move; sized too high
#6 | 2026-07-24 | review: string manipulation (getInitials) [drill 2 destructuring/spread not reached] | partial | 7/10, approach lookup | forEach returns undefined — reached for it where map was needed; join's separator arg also missed
#7 | 2026-07-25 | grouping/counting stone (increment known key / add-count) | stuck | 9/10, needed the answer | conflated spread with computed-key write; splitting into finer stones
#8 | 2026-07-26 | stone: computed-key write (makeEntry) | solved | 5/10, none | solved by bracket-assigning onto an empty object — the `{ [key]: value }` literal form the stone targeted is still undrilled; test accepted the easier path
#9 | 2026-07-27 | review: object destructuring/spread (updateEmail), string manipulation (truncate) | solved | 5/10, syntax lookup (A) + approach lookup (B) | spread-override approach was instant but wrote `email = newEmail` in the literal; on truncate reached for join (an array method) to append '...' to a string
#10 | 2026-07-28 | stone: spread + computed-key override (setField) | solved | 5/10, none | `{...record, [field]: value}` written cold in one expression — the literal form that was missing on 07-25 is now there
#11 | 2026-07-29 | stone: increment known key (read-modify-write) | solved | 7/10, approach lookup | forgot to read the old value before writing, then wrote `counts.key` (dot) instead of `counts[key]` (bracket) for the variable-keyed read
#12 | 2026-07-30 | review: array methods (totalDeliveredPrice), string manipulation (formatInitialLastName) | solved | 7/10 (drill B hardest), syntax lookup (A) + approach lookup (B) | used map as a forEach-style loop with an external accumulator on A; on B planned map over all words when only the first needed transforming — method chosen by "it iterates" rather than by what it returns/applies to | primer-check due at start of #13
#13 | 2026-07-31 | stone: default idiom (x||0, incrementCount) | solved | 7/10, approach lookup | real blocker (Tim's own read, post-debrief): didn't know the `||` operator's short-circuit behavior, and didn't know `(counts[key] || 0)` needed explicit grouping parens before `+ 1`; also confused computed-key object-literal syntax with template literals, and re-slipped dot-vs-bracket on the variable-keyed read | primer-check due at start of #14
#14 | 2026-08-02 | countByStatus (general, any status) | solved | 8/10, approach lookup | primer-check (||/precedence) passed at session start; on the exercise, wrote `finalObj[key] === key` (type mismatch) before landing on `!== undefined`, then re-slipped dot-vs-bracket on the WRITE side (`finalObj.key += 1`) — recurring gap now confirmed on writes too, not just reads; primer given for the `(obj[key] || 0) + 1` one-line idiom that avoids the branch entirely | primer-check due at start of #15
