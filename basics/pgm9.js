// wap to check whether a given number is palindrome or not

check = 121;

input = 121;
num = 0;

while (input > 0) {
  digit = input % 10;
  num = num * 10 + digit;
  input = Math.floor(input / 10);
}

if (check == num) {
  console.log("palindrome");
}
