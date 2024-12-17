//wap tp print pair sum of an array
a = [2, 3, 4, 5];

low = 0;
high = a.length - 1;

for (i = low; i <= high; i++) {
  for (j = i + 1; j <= high; j++) {
    if (a[i] + a[j] == 8) {
      console.log(a[i], a[j]);
    }
  }
}
