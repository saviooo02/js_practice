// wap tp check whether a given no is prime or not

input = 7;
flag = 1;

for (i = 2; i < input; i++) {
  if (input % i == 0) {
    flag = 0;
  }
}

if (flag == 1) {
  console.log("prime");
} else {
  console.log("Not Prime");
}
