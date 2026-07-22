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

## 1. JS core recall (speed, not learning)

### 1a. Array methods
- map — transform each element ✓ (07-17, 07-20)
- filter — keep by predicate ✓ (07-17, 07-20)
- reduce — fold to a single value ✓ (07-17, 07-20)
- find / findIndex — first match
- some / every — boolean over a collection
- filter → map → reduce chain ✓ (07-17)

### 1b. String manipulation
- split / join — string ↔ array ~ (07-18, looked up)
- charAt / at / slice — index & substring ~ (07-18, looked up)
- toUpperCase / toLowerCase — case
- template literals — interpolation, multi-line
- word-level transform (e.g. titleCase) ~ (07-18)
- (weak spot: cold recall of split/charAt/slice — see weakSpots.md)

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
- increment a known key — read-modify-write ← stone 1 (next non-review session)
- increment a maybe-absent key — the `x || 0` default idiom ← stone 2
- count items with a loop (countByStatus) ← revisit (parked, stuck 07-22)
- group items into arrays by a key — bucketing
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
