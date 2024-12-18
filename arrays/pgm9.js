//wap to create a new array with numbers
//1 if parent array is having nos less than or equal to 13 ,the new array should have a increment value
//1 if parent array is having nos greater than 13 ,the new array should have a decrement value

a = [10, 11, 12, 13, 14, 15];
//op = [11,12,13,14,13,14]

result = a.map((x) => {
  return x > 13 ? x - 1 : x + 1;
});

console.log(result);
