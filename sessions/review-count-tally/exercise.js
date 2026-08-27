// Given an array of ballot objects, each with a `choice` field, return an
// object mapping each choice that appears to the number of ballots for it.
//
// countVotes([{voter: 'ada', choice: 'blue'}]) -> { blue: 1 }
// countVotes([]) -> {}
//
// Notes:
// - Only choices that actually appear become keys — no pre-filled list.
// - A choice can appear once or many times.

function countVotes(ballots) {
  return ballots.reduce((accum, voteObj) => {
    let currentChoice = voteObj.choice;
    //check if accum obj contains the current voteObj choice value
    
    if(accum[currentChoice] !== undefined) {
      accum = {...accum, [currentChoice]: (accum[currentChoice] || 0) + 1}
    }
    //else add the current choice as a key in accum obj and increment its value 1 
    else {
      accum = {...accum, [currentChoice]: + 1}
    }
    return accum;
  }, {})
}

module.exports = { countVotes };

console.log(
  countVotes([
    { voter: 'ada', choice: 'blue' },
    { voter: 'bo', choice: 'green' },
    { voter: 'cy', choice: 'blue' },
  ]),
); // { blue: 2, green: 1 }
