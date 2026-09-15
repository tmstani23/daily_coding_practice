# Topic Roadmap

Owner of curriculum coverage. Scheduling, due dates and pending exercises are
in reviewQueue.md; learning evidence is in progressLog.md.
The goal is usable coding ability: read, explain, implement, test and debug.

## Reading the markers

- [ ] Not demonstrated yet.
- [P] Practiced with a named technique, teaching or support.
- [I] Independently applied with an accurate explanation at least once.
- [E] Prior successful usage is recorded, but explanation/independence was not
  assessed consistently under the current rules. Preserve that evidence.
These markers describe coverage, not permanent mastery. Review stages live only
in reviewQueue.md. Do not mark an entire section complete from one exercise.

Work through the frontier while reviewing older skills. An unresolved gap is
not a blanket barrier to unrelated new material. Ask what Tim can recall before
introducing unfamiliar material in ANY section; teaching is available throughout.

## Current frontier

Data shaping: unique primitives/Set conversion have been practiced (#25–#26).
Next new material is deduplicating objects by a chosen field, one small move
at a time. The queue owns any review, continuation or practice scheduled first.

## 1. JavaScript core

### Collections: choose by the input and wanted output
- [E] Use map/filter/reduce syntax (#1–#3); selection was prompted then.
- [I] One value per input item: choose and explain map (#38).
- [P] A subset of original records: filter usage present, independent
  explanation still unverified (#32; queue select-subset).
- [P] Conditional numeric total: approach and initial value needed help (#16).
- [E] Conditional array result: active user names via reduce (#39).
- [ ] First match / index: find, findIndex.
- [ ] Boolean over a collection: some, every.
- [ ] Choose iteration versus direct access for one selected element.
- [P] Block-body return and reduce initial value (#17/#19).
- [E] Reduce non-match passthrough (#20/#29); keep distinct from mutation-return.

### Strings
- [P] Split/join and selecting a character or slice (#2/#6/#9).
- [E] Locate a character, slice and lowercase (#36; reference used).
- [E] Upper/lowercase, template literals and capture returned values
  (#15/#30/#36/#37); cold recall and combined use are assessed separately.
- [ ] Explain that strings are immutable and that method return TYPES vary
  (some return strings, others numbers, booleans or arrays).
- [ ] Apply a short string transformation in an existing function.

### Objects, destructuring and spread
- [E] Copy an object without changing its input (#4/#30).
- [ ] Destructure named fields with a default; earlier credit was too broad:
  #30's spread/dot-access solution did not demonstrate destructuring.
- [ ] Array destructuring, positions and swaps.
- [ ] Spread to copy/concatenate arrays.
- [ ] Rest parameters and parameter defaults.
- [E] Computed-key literal and copy-plus-override (#10/#21).
  Reading a variable property and constructing one remain different actions.

### Sorting
- [E] Numeric comparator (#4 bonus).
- [ ] String comparator.
- [ ] Sort records by one field.
- [ ] Copy-before-sort when the input must remain unchanged.
- [ ] Tie-breakers after single-field sorting is comfortable.

## 2. Data shaping

- [P] Increment an existing variable-keyed number: include the read (#11/#24).
- [P] Handle a missing counter without losing the existing count (#13/#27).
- [E] Counts object from records (#31/#33); explanation revealed a separate
  fallback gap, so successful tallying does not close that misconception.
- [E] Group records into array buckets (#22).
- [P] Build an id lookup using copy plus computed property (#23).
- [P] Choose fallback versus conditional behavior; preserve valid zero/empty
  values (#37). Practice and independent assessment must be separated.
- [P] Unique primitives using Set and convert back to an array (#25/#26).
- [ ] Deduplicate records by one chosen field.
- [ ] Set membership; then intersection/difference as separate small tasks.
- [ ] Map: set/get/has, choosing it versus an object.
- [ ] Count/group with Map after its basic operations.
- [ ] Iterate Map and convert between Map/object.
- [I] Project a field/value from records (#38); do not duplicate as a new skill.
- [ ] Flatten one level.
- [ ] Group then aggregate, after both components are familiar.
- [ ] Readable pipelines and choosing a chain versus a single accumulation.

Introduce combinations only after checking their component evidence. If a task
bundles unfamiliar moves, split it; return to the combined goal later.

## 3. Async — refine near arrival

- [ ] Read a Promise's resolution/rejection; then/catch/finally.
- [ ] Return through a Promise chain.
- [ ] async/await and error handling.
- [ ] Basic fetch + JSON and non-success responses.
- [ ] Sequential versus independent requests.
- [ ] Promise.all, then allSettled; race/any only when useful.
- [ ] Construct a Promise for a concrete need.
Keep each bullet small enough for a session; these are coverage headings, not
permission to bundle the section into one exercise.

## 4. Closures, scope and functions

- [ ] Scope and declared variables; recognize accidental globals.
- [ ] Closures through a simple counter.
- [ ] once, then memoization.
- [ ] this and bind/call/apply.
- [ ] Debounce, then throttle.

## 5. TypeScript

- [ ] Function parameters/returns; object types/interfaces.
- [ ] Unions and narrowing; then discriminated unions.
- [ ] Basic generics.
- [ ] Pick/Omit/Partial/Record as separate practical needs.

## 6. Algorithms

- [ ] Frequency counter, linked to existing counting evidence.
- [ ] Two pointers.
- [ ] Sliding window.
- [ ] Basic recursion.
- [ ] Binary search.
Use these for reasoning practice when prerequisites are ready, without blocking
ordinary development practice until every algorithm is mastered.

## 7. Practical tasks — available now

Cadence and next eligibility are owned by reviewQueue.md. One practical task
replaces a normal drill and uses the same time budget.

Start with an existing small exercise or a minimal inventory/task-list module.
Choose ONE:
- Diagnose and fix one bug from a failing test.
- Write one meaningful test for a stated edge case; explain what it catches.
- Add one small requirement using at most two familiar skills.
- Read a short existing function, predict its behavior, then make one change.

Tim writes the implementation and any test that is the learning objective.
The coach may supply a minimal fixture/scaffold, but must avoid embedding the
solution. Do not require package setup, UI work, network access or async before
those are taught. Reuse code safely; preserve completed exercise solutions if
using them as a reference for a fresh task.

Over time, these tasks should demonstrate code reading, debugging, test design,
clear names, returning results and combining familiar operations. Grow into
small CLI/API work when the needed prerequisites have actually been practiced.
