function sortByAge(people) {
  return people.sort((a,b) => a.age - b.age)
  
}

module.exports = { sortByAge };

//console.log(sortByAge([{ name: 'A', age: 30 }, { name: 'B', age: 20 }])); // [{ name: 'B', age: 20 }, { name: 'A', age: 30 }]
