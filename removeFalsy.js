<<<<<<< HEAD
function removeFalsyValues(arr) {
  return arr.filter(function (value) {
    return value; // This will keep only truthy values
  });
}

// Example usage
let arrayWithFalsyValues = [0, 1, false, 2, "", 3, null, undefined, 4, NaN, 5];
let cleanedArray = removeFalsyValues(arrayWithFalsyValues);
console.log(cleanedArray); // Output: [1, 2, 3, 4, 5]
=======
function removeFalsyValues(arr) {
  return arr.filter(function (value) {
    return value; // This will keep only truthy values
  });
}

// Example usage
let arrayWithFalsyValues = [0, 1, false, 2, "", 3, null, undefined, 4, NaN, 5];
let cleanedArray = removeFalsyValues(arrayWithFalsyValues);
console.log(cleanedArray); // Output: [1, 2, 3, 4, 5]
>>>>>>> 9bc8888aa3e1fae4b5197bdc880928fe51793d0c
