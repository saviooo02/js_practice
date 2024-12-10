// * * * * * * *
// *           *
// *           *
// *           *
// *           *
// *           *
// * * * * * * *

for (i = 1; i <= 7; i++) {
  str = " ";
  for (j = 1; j <= 7; j++) {
    if (i == 1 || i == 7 || j == 1 || j == 7) {
      str = str + "*";
    } else {
      str = str + " ";
    }
  }
  console.log(str);
}
