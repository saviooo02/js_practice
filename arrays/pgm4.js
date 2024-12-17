//nested arrays

arr = [
  [2, 5],
  [3, 4],
  [5, 6],
];

for (let a of arr) {
  console.log(a);
}

for (let a of arr) {
  for (let b of a) {
    console.log(b);
  }
}
