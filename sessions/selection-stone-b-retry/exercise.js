// Given an array of book objects each with a `genre` field, return an object
// counting how many books there are per genre.
//
// [{genre:'scifi'},{genre:'horror'},{genre:'scifi'}] -> { scifi: 2, horror: 1 }
// [{genre:'poetry'}]                                 -> { poetry: 1 }
// []                                                 -> {}
//
// Genre keys come from the input, never hardcoded. Key order does not matter.
// Build the result with a single array-method call on `books` — no for/while
// loop, and no accumulator variable declared outside that call.
function countByGenre(books) {
  return books.reduce((accum, bookObj) => {
    let bookGenre = bookObj.genre;
      return accum = {...accum, [bookGenre]: accum[bookGenre] + 1 || 1  }
  }, {})
}

module.exports = { countByGenre };

console.log(
  countByGenre([
    { genre: "scifi" },
    { genre: "horror" },
    { genre: "scifi" },
  ]),
); // { scifi: 2, horror: 1 }
