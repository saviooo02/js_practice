<<<<<<< HEAD
function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

// Example usage
let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
=======
function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

// Example usage
let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
>>>>>>> 9bc8888aa3e1fae4b5197bdc880928fe51793d0c
