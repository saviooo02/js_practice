//0,1,1,2,3,5,8

var a = 0,
  b = 1,
  sum = 0;
n = 7;

console.log("series is : " + a + " " + b);
for (i = 2; i <= n; i++) {
  sum = a + b;
  a = b;
  b = sum;
  console.log(sum);
}
