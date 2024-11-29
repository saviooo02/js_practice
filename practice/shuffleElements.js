<<<<<<< HEAD
// Function to shuffle an array
function shuffleArray(array) {
  // Loop through the array from the end to the beginning
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the elements at index i and index j
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array; // Return the shuffled array
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
console.log("Original array:", myArray);

// Shuffle the array
const shuffledArray = shuffleArray(myArray);
console.log("Shuffled array:", shuffledArray);
=======
// Function to shuffle an array
function shuffleArray(array) {
  // Loop through the array from the end to the beginning
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the elements at index i and index j
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array; // Return the shuffled array
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
console.log("Original array:", myArray);

// Shuffle the array
const shuffledArray = shuffleArray(myArray);
console.log("Shuffled array:", shuffledArray);
>>>>>>> 9bc8888aa3e1fae4b5197bdc880928fe51793d0c
