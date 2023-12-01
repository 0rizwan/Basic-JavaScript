// Arrays

// changing values of Const variable in Array
const consVar = [14,20,23,4];
consVar[2] = 25;
consVar[3] = 30;
console.log(consVar);

// Index position of Elements in Array
     //   [   0,     1,      2,     3  ] poistive indexing of Array
     //   [  -4,     -3,    -2,     -1  ] negative indexing of Array
var arr = ["Puyol","Ramos","Xavi","Gavi"];

var array = [10,20,30,40,50];
array.forEach((e,i)=>{
    // console.log(i,")",e);
})
var sum = 0;
for (a = 0; a <= 4; a++){
    // console.log(array[a]);
    sum = sum + array[a];
    // console.log(sum);
}

// another ways of creating Array
// creating a new array and assigning values to it
var arr = new Array(4);
arr[0] = "hey";
arr[1] = 10;
arr[3] = null;

var arr2 = new Array();
for (var g = 0; g < 2; g++){
    // arr2[g] = prompt("enter a values to array");
}
// document.write(arr2);
// console.log(arr);

var arr3 = [
    ["John",18,"Paris"],
    ["Bryan",19,"NYC"],
    ["Raju",18,"Mumbai"],
];
// console.log(arr3[0][2]);

for (var a = 0; a < 3; a++){
    for (var b = 0; b < 3; b++){
        // console.log(arr3[a][b]);
    } 
}

// Array Methods- there are 24 Array Methods.
// 1. Sort()- It sorts the Array in a Ascending order.
var arr = [5,-8,12,21,4];
arr.sort();
console.log(arr);

// 2. Reverse()- It reverses the Array, last element comes to first and first goes to last.
var arr = ["Diego","Beckham","Cristiano","Anthony"];
arr.reverse();
console.log(arr);

// 3. pop()- It removes the last Element of an Array.
var arr4 = ["Raju",1,"John"];
arr4.pop();
console.log(arr4);

// 4. push()- It adds a new Element to the Array from last. 
var arr = ["Diego","Cristiano","Beckham","Anthony"];
arr.push("Neymer");
console.log(arr);

// 5. Shift()- It removes the Element from the first.
var arr5 = ["Rohan",5,"Mukesh",7];
arr5.shift();
console.log(arr5);

// 6. Unshift()- It adds the new Element to the Array from the first. 
var arr5 = ["Rohan",5,"Mukesh",7];
arr5.unshift(10);
console.log(arr5);

// 7. Concat()- It concats the two diffrent Arrays
// There are two ways to concat the Arrays
// 1st Way
var a = [1,2,3];
var b = a.concat(4,5,6);
console.log(b);

// 2nd Way
var a = ["a","b","c"];
var b = [1,2,3]
var c = ["x","y","z"];
var d = a.concat(b,c);
console.log(d);

// 8. Join()- It joins the Elements of the Array and convert it into single String value.
var a = ["a","b","c"];
var b = [1,2,3];
console.log(b);
var c = b.join(" ");
console.log("join",c);

// 9. Slice()- It removes the Elements of Array and the removed elements will give a new Array.
      //   [   0,     1,      2,     3  ] positive indexing of Array
     //   [  -4,     -3,    -2,     -1  ] negative indexing of Array
var a = ["Puyol","Ramos","Xavi","Gavi"];
var b = a.slice(0,-1);
console.log(b);
var b = a.slice(1);
console.log(b);

// 10. Splice()- It removes and Adds the Elements of the Existing Array.
// a.splice(index(to add new value), delete element, "new Value");
var a = ["Lewa","Ander","Pedro","Karim"];
a.splice(-4,1,"Gonzalez");
console.log(a);

// 11. indexOf()- It shows the index position of Element that we searched for from the Front
// Array.indexOf("Value", index(from where to start searching));
var a = ["Frenky","Pedri","Licha","Pedri"];
var b = a.indexOf("Pedri",2);
console.log(b);

// 12. lastIndexOf()- It shows the index position of Element that we searched for from the Last.
// Array.lastIndexOf("Value", index(from where to start searching));
var a = ["Diego","Beckham","Cristiano","Anthony","Beckham"];
var b = a.lastIndexOf("Beckham",2);
console.log(b);

// 13. isArray()- It checks the variable and shows if it is Array or not. 
var a = ["Raju","John","Suii"];
// var a = 10;
if (Array.isArray(a)){
    console.log("This is Array");
}else{
    console.log("This is not Array");
}

// 14. Includes()- It searches the value in the Array that we passed and gives bolean value.
var a = ["Puyol","Ramos","Xavi","Gavi"];
var b = a.includes("Puyol");
console.log(b);

// 15. some()- It checks if any of the Elements in an Array pass a test. 
var ages = [17,15,20,25];
let checkAdult = (age) => {
    return age >= 21;
}
var b = ages.some(checkAdult);
console.log(b);

// 16. every()- It will check all the elements and if all of them pass the test then only it will show true else false.
var ages = [17,15,20,25];
let check = (age) => {
    return age >= 21;
}
var b = ages.every(check);
console.log(b);

// 17. find()- It returns the first Element in an Array that pass a test
var ages = [21,19,15,10];
let checkTeen = (age) => {
    return age <= 19 && age >= 12;
}
var b = ages.find(checkTeen);
console.log(b);

// 18. findIndex()- It is same as find method but instead of returning value it returns the index poisition of that value after passing the test.
var height = [170,185,174,180];
let checkHeight = (height) => {
    return height >= 175;
}
var b = height.findIndex(checkHeight);
console.log(b);

// 19. filter()- It creats a new Array of all array Element that passed the test. 
var athletes = ["Messi","Kohli","Ronaldo","Dhoni"];
let checkA = (player) => {
    return player != "Ronaldo";
}
var b = athletes.filter(checkA);
console.log(b);

// 20. toString()- It converts the Array into String.
var x = ["Jack","Sanchez","Rodri"];
var b = x.toString();
console.log(b);

// 21. valueOf()- It returns the Array. 
var a = [1,2,3,4];
var b = a.valueOf();
console.log(b);

// 22. fill()- It fills all the elements in an array with a static value.
var a = [1,2,3,4];
var b = a.fill("raju");
console.log(b);

// 23. forEach()- 
var a = ["Messi","Ozil","Bale"];
a.forEach(function(element, index){
    console.log(element + index);
})

// 24. map()- It changes the value of elements in Array.
var num = [1,2,3,4];
var b = num.map(test);
function test(e){
    return e*10;
};
console.log(b);

var a = [
    {fname: "Berry", lname: "Carol"},
    {fname: "Ben", lname: "Carl"},
    {fname: "Lorem", lname: "Epsom"}
];
var b = a.map(function(x){
    return console.log(x.fname + " " + x.lname); 
    // return console.log(x.lname);
});




