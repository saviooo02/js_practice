const n = 4;
var flag = 0;

for (i = 2; i < n; i++) {
  if (n % i == 0) {
    flag = 1;
  }
}

if (flag == 0) {
  console.log("prime");
} else {
  console.log("Not prime");
}
