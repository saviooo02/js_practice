// wap to print the reverse of a given number

input = 123456;
num = 0;

while (input > 0) {
  digit = input % 10;
  num = num * 10 + digit;
  input = Math.floor(input / 10);
}

console.log(num);
