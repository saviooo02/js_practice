let str = "saaav";
let count = 0;
vowels = ["a", "e", "i", "o", "u"];

for (i = 0; i < str.length; i++) {
  if (vowels.includes(str.charAt(i))) {
    count++;
  }
}

console.log(count);
