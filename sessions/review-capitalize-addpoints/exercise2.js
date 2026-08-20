/*
 * addPoints(leaderboard, player, points)
 *
 * `leaderboard` is an object mapping player name (string) to their
 * current score (number). Return a NEW object identical to
 * `leaderboard` except `player`'s score has `points` added to it.
 * Do not mutate the original object.
 *
 * If `player` is not already a key in `leaderboard`, treat their
 * starting score as 0 before adding `points`.
 *
 * Edge cases covered by the tests:
 *  - player already exists (add to current score)
 *  - player is new (defaults to 0 first)
 *  - original object is unchanged after the call
 *  - starting leaderboard is empty
 */
function addPoints(leaderboard, player, points) {
    let finalObj = {...leaderboard, [player]: (leaderboard[player] || 0) + points }
        
    return finalObj;
   
}

module.exports = addPoints;

console.log(addPoints({ ana: 10 }, 'ana', 5)); // { ana: 15 }
