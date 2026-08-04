# Topic Roadmap

Work top to bottom. One micro-skill per session unless noted — each
bullet is roughly one exercise's worth. Detail is front-loaded: the
near-term sections are broken down finely because that's where Tim
actually is; later sections are lighter and get refined as we approach
them. Every 3rd session is a review (see CLAUDE.md), which doesn't
consume a roadmap line.

Markers: `✓` done clean · `~` done but shaky / needed lookups ·
`←` next up / current frontier · `▶ YOU ARE HERE` section marker.
Dates in parens are the session that covered it.

Stepping-stones are folded in as substeps under the bullet that spawned
them, not queued off to the side. On the THIRD stone under one bullet,
re-decompose that section instead of adding a fourth (teachingGuide
"Ladder growth"). There is no deadline — a longer, more accurate
roadmap beats a short one that over-credits.

## 1. JS core recall (speed, not learning)

### 1a. Array methods

WRITING each method is ✓. CHOOSING between them is not — see the
selection ladder below. The ✓ marks on 07-17/07-20 were over-credited:
the 07-17 spec named all three methods in order, and 07-20 was solved
by accumulating into an outside variable from inside a `filter`. Both
tested syntax, not selection (see teachingGuide "Credit check").

- map — transform each element, returns a NEW ARRAY ✓ syntax (07-17, 07-20)
- filter — keep by predicate, returns a SHORTER ARRAY ✓ syntax (07-17, 07-20)
- reduce — fold to ONE value of any type ✓ syntax (07-17, 07-20)
- find / findIndex — first match
- some / every — boolean over a collection
- filter → map → reduce chain ✓ (07-17, spec-dictated)

#### Selection ladder — pick the method from the GOAL (07-30)
Specs in this ladder state the goal ONLY and never name a method.
Runs after the 2a stones below; reviews still interleave every 3rd
session.
- sum one field across a filtered list — forces filter + reduce ~ stone A
  (08-04, syntax + approach lookup — filter's return shape, reduce's
  initial-value argument)
- build `{pending: 3, shipped: 5}` from a list — reduce whose
  accumulator is an OBJECT, not a number ← stone B
- mixed set: 3 tiny specs, name the method and why BEFORE coding
  ← stone C
- (weak spot: choosing by "it loops" rather than by what the method
  returns — used `map` as a forEach twice on 07-30. See weakSpots.md)

### 1b. String manipulation
- split / join — string ↔ array ~ (07-18, looked up)
- charAt / at / slice — index & substring ~ (07-18, 07-27 — slice used correctly, but the MDN string list was needed to get there)
- toUpperCase / toLowerCase — case
- template literals — interpolation, multi-line
- word-level transform (e.g. titleCase) ~ (07-18)
- string immutability — every string method returns a NEW string, none
  mutate in place (08-03: this was news to Tim; arrays vs strings)
- (weak spot: cold recall of split/charAt/slice — see weakSpots.md)
- (weak spot: discarding a method's return value entirely — 3x on
  08-03. Top gap; see weakSpots.md)

### 1c. Destructuring & spread
- object destructuring — pull named fields ✓ (07-21)
- array destructuring — positions, swaps
- spread to copy / merge an object ✓ (07-21)
- spread to copy / concat arrays
- rest params & default values

### 1d. Sorting with comparators
- numeric comparator (a - b) ✓ (07-21 bonus)
- string comparator (localeCompare)
- sort by an object field, ascending/descending
- multi-key sort (tie-breakers)
- copy-before-sort (sort mutates — immutability)

## 2. Data shaping (the daily-job skill)  ▶ YOU ARE HERE

### 2a. Building objects from data (current frontier)
- write a computed-key property in an object literal (`{ [key]: value }`) ✓ stone 1 (07-26 via `obj[key] = value`; literal form written cold 07-28 in stone 2)
- spread + computed-key override — copy an object, replace one key ✓ stone 2 (07-28, setField, no help)
- increment a known key — read-modify-write ~ stone 3 (07-29, approach lookup — dot/bracket slip on the read)
- increment a maybe-absent key — the `x || 0` default idiom ~ stone 4 (07-31, approach lookup — didn't incorporate current value until prompted; also computed-key/template-literal confusion, see weakSpots.md)
- count items with a loop (countByStatus) ~ (08-02, approach lookup — type-mismatch existence check, then dot-vs-bracket slip on the WRITE side; primer given for the `(obj[key] || 0) + 1` one-liner, see weakSpots.md)
- group items into arrays by a key — bucketing ← next up (after selection-ladder stone A, see reviewQueue.md running order)
- build a lookup / index — id → object

### 2b. Dedupe & Set
- unique primitives with a Set
- Set ↔ array round-trip
- dedupe objects by a chosen field
- membership tests (has), intersection / difference

### 2c. Map (vs plain object)
- Map basics — set/get/has, when to prefer over object
- counting / grouping with a Map
- iterating a Map, Map ↔ object

### 2d. Nested transforms
- array of objects → single lookup object
- pluck / project a field out of each row
- group, then aggregate each group (count/sum/avg)
- flatten one level (flatMap)

### 2e. Chaining cleanly
- multi-step pipeline with named intermediates
- choosing method-chain vs single reduce
- keeping steps readable (no giant one-liners)

## 3. Async (refine detail when we arrive)

### 3a. Promise fundamentals
- create a Promise, resolve/reject
- then / catch / finally
- chaining thens, returning values through a chain

### 3b. async / await
- await a promise, unwrap a value
- try/catch around await
- sequential awaits vs accidental serialization

### 3c. Concurrency
- Promise.all — parallel, fail-fast
- Promise.allSettled — collect all outcomes
- Promise.race / any

### 3d. fetch patterns
- basic fetch + json
- sequential vs parallel requests
- error handling on non-ok responses

## 4. Closures, scope, functions (lighter — refine later)
- closure basics — a counter
- once / memoize
- this + bind/call/apply
- debounce, then throttle

## 5. TypeScript (lighter — refine later)
- typing function params & return
- typing objects / interfaces
- unions & narrowing
- discriminated unions
- generics basics
- utility types: Pick, Omit, Partial, Record

## 6. Classic algorithms (interview staples, light touch)
- frequency counter pattern
- two pointers
- sliding window
- basic recursion
- binary search

## 7. Mini-project sessions (layer in 1-2x/week from section 3 on)
- small CLI tool or tiny API — decision practice, not drills
- project TBD when we get there
