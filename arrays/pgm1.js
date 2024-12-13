// wap to print pair whose sum is 6

a = [2, 3, 4, 5]; // 2,4

for (i = 0; i < a.length; i++) {
  element = a[i];
  for (j = i + 1; j < a.length; j++) {
    if (element + a[j] == 6) {
      console.log(element, a[j]);
    }
  }
}
