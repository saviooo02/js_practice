numbers = [1, 2, 3, 4, 5, 6];

const doubles = numbers.map((num) => {
  return num * 2;
});

console.log(doubles);

let words = ["Hello", "Hi", "Bye"];

const newWords = words.map((word) => {
  return word.toUpperCase();
});

console.log(newWords);
