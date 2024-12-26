//[id,name,price,stock]
products = [
  [1, "hide and seek", 50, 20],
  [2, "lays", 20, 80],
  [3, "oreo", 40, 100],
  [4, "parleG", 25, 10],
  [5, "tiger", 20, 30],
  [6, "unibic", 60, 0],
  [7, "good day", 70, 20],
];
//1. display all product name
// for (n of products) {
//   console.log(n[1]);
// }

//2. display product whose price < Rs.50

//3. print price of oreo
// oreo = products.find((pro) => pro[1] == "oreo");
// console.log(`price of oreo is ${oreo[2]}`);

//4. print costly product name

//5. display out of stock product
products.filter((item) => item[3] < 1).forEach((pro) => console.log(pro[1]));

//6. sort products based on stock in decsending order

//7. print product having maximum available stock

//8. is there any product can be purchased by Rs. 10

//9. Is there any product in the range of 10 to 30

//10. print all products in the range of 10 to 30
