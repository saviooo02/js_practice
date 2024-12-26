//wap to find all even numbers in an array

let a = [1, 2, 3, 4, 5, 6];
let result = [];
for (let x of a) {
  if (x % 2 === 0) {
    result.push(x);
  }
}
console.log(result);
