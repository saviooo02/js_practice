// wap to find the given 3 digit number is armstrong or not

// 153 = 1^3 + 5^3 + 3^3

input = 371;
digit = 0;
temp = input;
arm = 0;

while (input > 0) {
  digit = input % 10;
  arm = arm + digit ** 3;
  input = Math.floor(input / 10);
}

if (temp == arm) {
  console.log("Armstrong");
} else {
  console.log("Not Armstrong");
}
