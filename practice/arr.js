let numbers = []; // Create an empty array

// Function to add even numbers to the array
function addEvenNumber(num) {
  if (num % 2 === 0) {
    numbers.push(num);
  }
}

// Adding numbers to the array
addEvenNumber(1); // Not added, because 1 is not even
addEvenNumber(2); // Added, because 2 is even
addEvenNumber(3); // Not added, because 3 is not even
addEvenNumber(4); // Added, because 4 is even

// Output the array
console.log(numbers); // Output: [2, 4]
