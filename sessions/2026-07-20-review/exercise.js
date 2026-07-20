function averageOfLongWords(words) {
  let wordSum = 0;
  let numWords = 0;
  let avg = 0;
  // loop through the array
  let filteredWords = words.filter((word) => {
    if (word.length > 3) {
      wordSum += word.length;
      return true;
    }
    return false;
  });
  // add to variable numWords
  numWords += filteredWords.length;
  //if wordSum != 0:
  if (wordSum !== 0) {
    avg = wordSum / numWords;
  }
  return avg;
}

module.exports = { averageOfLongWords };

//console.log(averageOfLongWords(["apple", "banana"]));
