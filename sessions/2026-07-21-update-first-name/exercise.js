function updateFirstName(person, newFirst) {
  // copy the object 
  const newObject = {...person}
  // set the new first name property
  newObject.first = newFirst;
  // return the new updated object
  return newObject;
}

module.exports = { updateFirstName };

console.log(updateFirstName({ first: 'Tim', last: 'Staniforth' }, 'Timothy')); // { first: 'Timothy', last: 'Staniforth' }