// Numbers Methods

// 1) Numbers()- It converts String into Numbers. 
var str = "10";
var num = Number(str);
console.log(num + 10);

// 2) parseInt()- It returns the number without decimal.
var a = "18.50 years";
var b = parseInt(a);
console.log(b);

// 3) parseFloat()- It returns the number With decimal.
var a = "25.324 days";
var b = parseFloat(a);
console.log(b);

// 4) isFinite()- It checks the number if it is finite then it will show true else false (it will show true for all the number except string and infinity).
var a = Infinity;
var b = isFinite(a);
console.log(b);

// 5) Number.isInteger()- It checks if the value is integer and returns boolean values (It will show true for all numbers except decimal number, Infinity and strings). 
var a = 10.70;
var b = Number.isInteger(a);
console.log(b);

// 6) toFixed()- It only gives the decimal value that we want.
var a = 50.6567;
var b = a.toFixed(1);
console.log(b);

// 7) toPrecision()- It is bit similar like toFixed().