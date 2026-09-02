/*
 * fileExtension(filename)
 *
 * Return the file's extension, lowercased, with no dot.
 *
 * Examples:
 *   'report.PDF'          -> 'pdf'
 *   'archive.TAR.gz'      -> 'gz'
 *   'my.notes.Final.TXT'  -> 'txt'
 *   'a.b'                 -> 'b'
 *
 * Details:
 * - The extension is whatever comes after the LAST dot.
 * - Every filename passed in has at least one dot.
 */

function fileExtension(filename) {
//search through the string for last instance of the '.' symbol
let lastIndex = filename.lastIndexOf('.');
//slice from one after the .symbol to the end to a new string
let finalStr = filename.slice(lastIndex + 1).toLowerCase();
//return the new string
return finalStr;
}

module.exports = fileExtension;

console.log(fileExtension('report.PDF')); // 'pdf'
