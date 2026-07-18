function titleCase(str) {
  // Take a string of words separated by single spaces. Return it with
  // each word capitalized: first letter uppercase, rest lowercase.
  // Empty string in -> empty string out.
  let newStr = str.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return newStr;
}

module.exports = { titleCase };


