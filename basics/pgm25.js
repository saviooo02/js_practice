//      *
//     * *
//    * * *
//   * * * *

for (i = 1; i <= 4; i++) {
  str = " ";
  for (sp = 3; sp >= i; sp--) {
    str = str + " ";
  }
  for (j = 1; j <= i; j++) {
    str = str + "* ";
  }
  console.log(str);
}
