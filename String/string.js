// Strings methods

// 1) length()- It shows the length of the string.
var a = "You are Moron!";
var b = a.length;
console.log(b);

// 2) toLowerCase()- It converts the string into small letters. 
var a = "How Are You?";
var b = a.toLowerCase();
console.log(b);

// 3) toUpperCase()- It converts the string into capital letters. 
var a = "hey myself jack";
var b = a.toUpperCase();
console.log(b);

// 4) includes()- It searchs the value we given and if that value is present in string it will show true otherwise false.
var a = "This is a String";
var b = a.includes("String");
console.log(b);

// 5) startsWith()- It only checks the start of the string. 
var a = "This is the examle of startWith method.";
var b = a.startsWith("T");
console.log(b);

// 6) endsWith()- It checks the end of String. 
var a = "This is example of endsWith method.";
var b = a.endsWith("method.");
console.log(b); 

// 7) search()- It gives the index position of the searched value.
var a = "It is example of search method";
var b = a.search("of");
console.log(b);

// 8) match()- It returns a array of the searched values.
var a = "it is what it is";
var b = a.match(/it/g);
console.log(b);

// 9) indexOf()- It checks the string from front and returns the index of the value.
var a = "This example of indexOf method";
var b = a.indexOf("f");
console.log(b);

// 10) lastIndexOf()- It checks the string from the back and return the index of value.
var a = "This example of lastIndexOf method";
var b = a.lastIndexOf("f");
console.log(b);

// 11) replace()- It replaces the old value with new value.
var a = "this boy is the smart boy";
var b = a.replace(/boy/g, "raju");
console.log(b);

// 12) trim()- It removes the extra spaces from the string.
var a = "  Javascript  ";
var b = a.trim();
console.log(b);

// 13) charAt()- It shows the character which is present on given index.
var a = "This is example of charAt method";
var b = a.charAt(10);
console.log(b);

// 14) charCodeAt()- It gives the code of the character present on the given index. 
var a = "This is example of charCodeAt method";
var b = a.charCodeAt(0);
console.log(b);

// 15) fromCharCode()- It gives the character from the given code.
var a = String.fromCharCode(115);
console.log(a);

// 16) concat()- It concats two or more string into one string. 
// 1st way to concat strings 
var a = "Hello";
var b = a.concat(" World");
console.log(b);

// 2nd way to concat strings 
var a = "Hey ";
var b = "Bishh ";
var c = "How are ya?"
var d = a.concat(b,c);
console.log(d);

// 17) split()- It splits the String and convert it into array.
var a = "Javascript is difficult";
var b = a.split(" ");
console.log(b);

// 18) slice()- It cuts the String. 
var a = "Javascript is difficult";
var b = a.slice(0,10);
console.log(b);

// 19) repeat()- It repeats the strings
var a = "  Javascript is difficult";
var b = a.repeat(4);
console.log(b);

// 20) substr(index(from where to start), how many char to return)- It gives substring by taking two parameters.
var a = "This is String";
var b = a.substr(7,7);
console.log(b);

// 21) substring()- it is same as slice and substr.
// 22) toString()- it converts any data types into String
var a = 10;
var b = a.toString();
console.log(b + 20);
// 23) valueOf()- It is a default method to print the string 





