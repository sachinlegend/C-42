//datatypes - string, number, boolean, undefined and null
//String (" ")
var a = "Sachin";
console.log(a);

//number
var b = 123;
console.log(b);

//boolean (true/false)
var c = true;
console.log(c);

//undefined
var d;
console.log(d);

//null
var e = null
console.log(e);

console.log(a.toUpperCase())
 console.log(parseInt("5"))

 //ARITHMETIC OPERATORS --> + - / * %
 console.log(5+3);
 console.log(5*41%15);
 console.log(8-4);
 console.log(85/8);
 console.log(9%2);

 //COMPARATIVE OPERATORS --> > < >= <= === !==
 console.log(10>5);
 console.log(1555<5);
 console.log(5>=8);
 console.log(4<=4)
 console.log(7555===8014);
 console.log(5000!==578);

//CONDITIONAL PROGRAMMING
if(3<2) {
  console.log("three is greater");
} else {
  console.log("two is greater")
}

//LOOP STATEMENTS - for, while
//for(initialisation; conditional statement; increment/decrement)
//display a set of numbers of from 17 to 39

for(var i = 11; i<=31; i = i+1){
  console.log(i);
}

//WHILE LOOP
var j = 10;
while(j <= 20){
  console.log(j);
  j = j+ 1

}  

//ARRAYS
var colors=["black", "red", "blue", "yellow", "brown"]
console.log(colors)
colors.push("white","green")
console.log(colors);
colors.pop()
console.log(colors);

//CREATING USER DEFINED FUNCTIONS
function add(num1, num2){
  var sum = num1 +num2;
  return sum;

}

console.log(add(4,8))

function square(num1) {
  var product = num1 *num1;
  return product;
}

console.log(square(5))