//wap to print common nos from given 2 arrays

arr1 = [10, 11, 12, 13, 40];
arr2 = [13, 14, 34, 21, 10];

for (i in arr1) {
  for (j in arr2) {
    if (arr1[i] == arr2[j]) {
      console.log(arr1[i]);
    } else {
      console.log("Nothing in common");
    }
  }
}
