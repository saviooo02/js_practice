<<<<<<< HEAD
function reverseArrayInPlace(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    // Swap the elements at the leftIndex and rightIndex
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    // Move indices towards the center
    leftIndex++;
    rightIndex--;
  }
  return arr; // Return the reversed array for convenience
}

// Example usage
let numbers = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(numbers);
console.log(numbers); // Output: [6, 5, 4, 3, 2, 1]
=======
function reverseArrayInPlace(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    // Swap the elements at the leftIndex and rightIndex
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    // Move indices towards the center
    leftIndex++;
    rightIndex--;
  }
  return arr; // Return the reversed array for convenience
}

// Example usage
let numbers = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(numbers);
console.log(numbers); // Output: [6, 5, 4, 3, 2, 1]
>>>>>>> 9bc8888aa3e1fae4b5197bdc880928fe51793d0c
