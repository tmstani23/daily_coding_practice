/*
Write sumPositives(nums) that returns the sum of only the positive
numbers (strictly > 0) in the array, using reduce with a NUMBER
accumulator starting at 0.

Cases:
- empty array -> 0
- all numbers positive -> sum of all of them
- mixed positive/negative/zero -> sum of the positive ones only
- all negative or zero -> 0 (accumulator never changes)
*/

function sumPositives(nums) {
    return nums.reduce((accum, currentNum) => {
        if (currentNum > 0) {
            return accum + currentNum;
        }
        return accum
    }, 0)
}

module.exports = sumPositives;

console.log(sumPositives([3, -1, 5, 0, 2])); // 10
