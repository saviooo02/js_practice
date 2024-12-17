//wap to find all even nos from nested arrays

arr = [
  [2, 5],
  [3, 4],
  [5, 6],
];

for (let a of arr) {
  for (let b of a) {
    if (b % 2 == 0) {
      console.log(b);
    }
  }
}
