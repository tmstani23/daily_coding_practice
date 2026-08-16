/**
 * bumpStat(stats, statName)
 *
 * `stats` is an object where every value is a number.
 * `statName` is a string naming one of the keys already on `stats` —
 * that key always exists, so you never need to check for it being
 * missing.
 *
 * Increase the value at `stats[statName]` by 1 and return the object.
 *
 * Example:
 *   bumpStat({ wins: 4, losses: 2 }, 'wins') -> { wins: 5, losses: 2 }
 */
function bumpStat(stats, statName) {
   return {...stats, [statName]: stats[statName] + 1}
}

module.exports = { bumpStat };

console.log(bumpStat({ wins: 4, losses: 2 }, 'wins')); // { wins: 5, losses: 2 }
