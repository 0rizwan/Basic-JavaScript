// 1. Ways to print in Javascript
// alert("you are mf!");
// console.log("Hello World", 5 + 7, "hello mfs!");

// 2. Javascript Console Apis
// console.log("Hello World");
// console.warn("you are getting warning");
// console.assert("4==6");
// console.error("error 101")
// console.clear();

// 3. Javascript Variables
// what are variables? - Containers to store data values.

var number1 = 45;
var number2 = 54;
// console.log(number1 + number2);
 
//  4. Javascript Data types. 
//  There are two types of data types in javasrcipt:
// 1. Primitive Data types- string, number, boolean, undefined, null, symbol.
// 2. Refrence Data types- object, arrays.       

// 1. Primitive Data Types-
// 1.1 strings 
var str = "this is string";
var str2 = 'this is also string';

// 1.2 number 
var number1 = 45;

// 1.3 boolean 
var a = true;
var b = false;
// console.log(a, b);

// 1.4 undefined
var und = undefined;
// console.log(und);

// 1.5 null
var n = null;
// console.log(n);

// 2. Refrence Data Types-
// 2.1 Object 
var marks = {
    victor: 80,
    max: 50,
    leo: 70,
}
// console.log(marks);

// 2.2 Arrays
var arr1 = [1, 2, "Victor", 3, null, 5];
// console.log(arr1);

//5. Operators in JavaScript. 
// i. Arithmetic Operators
var a = 100;
var b = 50;
// console.log("The vaue of a + b is ", a+b);
// console.log("The vaue of a - b is ", a-b);
// console.log("The vaue of a * b is ", a*b);
// console.log("The vaue of a / b is ", a/b);

// ii. Assignment Operators
var c = b;
// c += 10; c = c + 10
// c -= 10; c = c - 10
// c *= 5;  c = c * 5
// c /= 2;  c = c / 2
// console.log(c);

// iii. Logical Operators

// logical AND-- only true when both the value are true 
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// logical OR-- true when one of the value is true 
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical NOT-- true when value is false and false when value is true. 
// console.log(!true);
// console.log(!false);

// iv. Comparison Operators
var a = 50;
var b = 100;
// console.log(a == b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a > b);
// console.log(a < b);

// 6. Functions in JavaScript-
// DRY- Do not repeat Yourself. 

function avg(p, c, m, b){
    c = (p+c+m+b)/4;
    return c;
}
c1 = avg(5,10,15,20);
// console.log(c1);

// Arrow function
avg = (a, b) => {
   c = (a + b)/2;
   return c;
}
c1 = avg(20,10);
// console.log(c1);


// 7. Conditionals in JavaScript-
var age = 21;
// 7.1 if statement. 
if (age > 19){
    // console.log("You are adult")
}

// 7.2 if - else statement
var age = 18;
if (age > 19){
    // console.log("You are adult")
}
else {
    // console.log("You are Underaged")
}

// 7.3 if - else ladder
var age = 16;
if (age > 19){
    console.log("Adulthood")
}
else if (age > 14){
    console.log("Teenage")
}
else if (age > 8){
    console.log("Puberty")
}
else if (age > 4){
    console.log("Childhood")
}
else if (age > 1){
    console.log("Toddler")
}
else {
    console.log("Not borned yet")
}
// 7.4 ternary operators
var y = 1;
var g;
(y > 9)?g = "y is greater": g = "y is smaller";
g = "value of b is " + (y > 9?" greater":"smaller");
// console.log(g);

// 7.5 switch statements.
let umar = 18;
switch (true){
    case (umar >= 15 && umar <=18):
        console.log("you are eligible");
        break;
    
    case (umar >= 18 && umar <= 25):
        console.log("you are not eligible");
        break;

    default:
        console.log("enter a valid age!");
}
let day = 2;
switch (day){
    case 0: case 1: case 2:
        console.log("monday");
        break;  
    case 3:
        console.log("thursday");
        break;
    case 4:
        console.log("friday");
        break;
    case 5:
        console.log("saturday");
        break;
    case 6:
        console.log("sunday");
        break;
    default:
        console.log("invalid")
}

// 8. Loops in JavaScript.
// 1) For Loop
for(var a=10; a <=50; a+=10){
    if (a == 30){
        // break;
        // continue;
    }
    // console.log(a + "- hello world");
}

// 2. for each Loop (Arrays)
var arr2 = [1,2,3,4,5,6,7];
arr2.forEach(function(value){
    // console.log(value);
})

// 3. For in loop (Object)
var obj = {
    name : "Victor",
    age : 19,
    place : "Mumbai",
}
for (var i in obj){
    // console.log(i + ": " + obj[i]);
}

// 4. While loop
var a = 1;
while(a <= 5){
    document.write("<ul>");
    document.write("<li>" + a + ") " + "fuck you" + "</li>");
    document.write("</ul>")
    a+=1;
}

// 5. Do While loop
var a = 1;
do{
    // console.log(a);
    a+=1;
}while(a <= 10);

// 9. Array Methods
let myArr = ["harry", "john", 1, null, true];
// console.log(myArr.length);   //(it shows the length of array)
// myArr.shift();               //(removes the first value)
// myArr.pop();                 //(removes the last value)
// myArr.unshift("abc");        //(adds the new value at the start of array)
// myArr.push("123");           //(Adds the new value at the last of array)
// myArr.toString();            // (converts the array into string)
// console.log(myArr);
let arr3 = [1, 44, 53, 24, 76, 14, 78];
// arr3.sort();   // Sorts the array
// console.log(arr3);

// 10. String Methods
let str3 = "hello world this world is cruel";
// console.log(str3.length);
// console.log(str3.indexOf("world"));
// console.log(str3.lastIndexOf("world"));
// console.log(str3.slice(0, 11));
d = str3.replace("hello", "hey");
d = d.replace("world", "everybody");
d = d.replace("cruel", "nice")
// console.log(d);

// 11. Dates in Javascript.
let myDate = new Date;
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());

// 12. Dom Manipulation
let elem = document.getElementById('firstContainer');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);

elemClass[1].style.background = "orange";
elemClass[1].style.height = "300px";
elemClass[1].classList.add('text-center');   //Adds the class into html
// elemClass[1].classList.remove('text-center'); // removes the added class

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[1].innerText);

tag = document.getElementsByTagName('div');
// console.log(tag);

createElement = document.createElement('p');
createElement.innerText = "this is created paragraph";
tag[2].appendChild(createElement);

createElement2 = document.createElement('h1');
createElement2.innerText = "this is replaced heading";
tag[2].replaceChild(createElement2, createElement);

createElement3 = document.createElement('h2');
createElement3.innerText = ("This is div 4");
tag[3].appendChild(createElement3);

sel = document.querySelectorAll('#firstContainer');
// console.log(sel);

// 13. Events in javascrip

function clicked() {
//    alert("you clicked on button");
}

function hey() {
    // alert("hey everyone");
}

window.onload = function (){
    console.log("the document was loaded");
}

firstContainer.addEventListener('click', function(){
    // console.log("you clicked on container")
})

firstContainer.addEventListener('mouseover', function(){
    // console.log("you did mouseover");
})

firstContainer.addEventListener('mouseout', function(){
    // console.log("you did mouse out");
})

firstContainer.addEventListener('mouseup', function(){
    // console.log("you did mouse up");
})

firstContainer.addEventListener('mousedown', function(){
    // console.log("you did mouse down");
})

// This event only works in body tag
// body.addEventListener('keypress', function(){
//     alert("you activated a key press event")
// })

// 14. Set Timeout and Set Time interval
logkaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<h1>Hello MFS!</h1>"
    // console.log("you are gay!");
}
// clr = setTimeout(logkaro, 2000);
// clr = setInterval(logkaro, 2000);
// clearTimeout(clr);
// clearInterval(clr);

// local storage in javascript
// localStorage.setItem('name', "victor")
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()

// about JSON - javascript object notation
let Object = {name: "victor", length: 1 };
let json = JSON.stringify(Object);
console.log(json)
console.log(typeof json)
let parsed = JSON.parse('{"name":"victor","length":1}');
console.log(parsed);

// backtiks literals
a = 35;
console.log('this is number ' + a);

var z = 9;
if (!z < 8){
    console.log("okey");
}
// Confirm box and Alert box.

// let x = confirm("wanna have s**?");
// if (x){
//     alert("nice!");
// }else{
//     alert("fuckoff");
// }

let button = document.getElementById('btn');
button.addEventListener('click', ()=>{
    let conBox = confirm("you are gay!");
    if (conBox){
        alert("go to doctor");
    }else{
        alert("nice");
    }
})
// prompt box
// let pro = prompt("what is your type?");
document.write(pro);

let parentDiv = document.getElementsByClassName('parent');
console.log(parent);
parentDiv[0].style.height = "300px";
parentDiv[0].style.width = "300px";
parentDiv[0].style.background = "Black";
parentDiv[0].classList.add('center');
parentDiv[0].classList.add('margin');

let childDiv = document.createElement('div');
childDiv.innerHTML = "This is child"
parentDiv[0].appendChild(childDiv);
childDiv.style.color = "white";
childDiv.style.background = "blue";
childDiv.style.height = "100px";
childDiv.style.width = "100px";
childDiv.classList.add('center');






















