/*
  Write activeUserNames(users).

  Return a new array containing the name of every user whose active value is
  true, in the same order as the input. Do not change the input array or any
  user object.

  If no users are active, return an empty array. An empty input also returns
  an empty array.

  Examples:
  activeUserNames([
    { name: 'Ari', active: true },
    { name: 'Bo', active: false },
    { name: 'Cy', active: true },
  ]); // ['Ari', 'Cy']

  activeUserNames([{ name: 'Dee', active: false }]); // []
*/
function activeUserNames(users) {
//create a new final array

//filter through the users array
return users.reduce((accum, user) => {
  if(user.active) {
    accum.push(user.name)
  }
  return accum;
}, [])
  //check if active
  //push the user name into the new array
//return the final new array
//onsole.log(finalArr);

}

module.exports = { activeUserNames };

console.log(activeUserNames([
  { name: 'Ari', active: true },
  { name: 'Bo', active: false },
])); // ['Ari']
