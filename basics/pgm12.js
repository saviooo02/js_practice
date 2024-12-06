//wap to display the nos whose exponential is in the range of 8 to 36 , where the power can be determined by the user

pow = 3;
low = 8;
up = 36;
i = 1;
val = 1;

while (val <= up) {
  val = i ** pow;
  if (val >= low && val <= up) {
    console.log(i);
  }
  i++;
}
