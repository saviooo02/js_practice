const numbers = [2, 3, 4, 5, 6, 7, 8];

const even = numbers.filter((num) => {
  return num % 2 === 0;
});

//console.log(even);

let people = [
  { Name: "Savio", age: 22 },
  { Name: "Gausu", age: 30 },
];

const oldies = people.filter((dude) => {
  return dude.age > 25;
});

console.log(oldies);
