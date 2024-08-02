let numbers = [10, 25, 67, 45, 70, 36, 50];

// Function to filter numbers divisible by 10
function filterDivisibleByTen(arr) {
  return arr.filter(function (num) {
    return num % 10 === 0;
  });
}

let result = filterDivisibleByTen(numbers);
console.log(result); // Output: [10, 70, 50]
let numbers = [10, 25, 67, 45, 70, 36, 50];

// Function to filter numbers divisible by 10
function filterDivisibleByTen(arr) {
  return arr.filter(function (num) {
    return num % 10 === 0;
  });
}

let result = filterDivisibleByTen(numbers);
console.log(result); // Output: [10, 70, 50]
