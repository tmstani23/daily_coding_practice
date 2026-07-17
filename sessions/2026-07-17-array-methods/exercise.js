function sumOfSquaresOfEvens(numbers) {
  // Take an array of numbers. Keep only the even ones, square each,
  // then sum the squares. Return that sum (0 if nothing qualifies).
  let evenNumbers = numbers.filter(num => num % 2 === 0);
  let squares = evenNumbers.map(num => num * num);
  return squares.reduce((sum, square) => sum + square, 0);
}

module.exports = { sumOfSquaresOfEvens };
