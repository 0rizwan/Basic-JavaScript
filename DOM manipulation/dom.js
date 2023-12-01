// DOM manuplation 

// This are basic methods to target the DOM. 
// 1) Document- It shows the whole html document.
var element = document;
console.log(element);

// 2) document.all- It taragets all the elements of html and returns their Array. 
var element = document.all;
console.log("document- ",element);

// 3) document.head- It targets the head tag .
var element = document.head;
console.log("Head- ",element);

// 4) document.title- It targets the title tag.
var element = document.title;
console.log("Title- ",element);

// 5) document.body- It targets the body tag.
var element = document.body;
console.log("Body- ",element);

// 6) document.links- It targets all the links in html.
var element = document.links;
console.log("Links and anchor Tags- ",element);

// 7) document.images- It targets all the images in html. 
var element = document.images;
console.log("Images- ",element);

// 8) document.doctype.

// 9) document.URL- It gives the URL of our website.
var element = document.URL;
console.log("URL- ",element);

// 10) document.domain- It gives the domain of out website. 
var element = document.domain;
console.log("Domain- ",element);

// There are lot of ways to manipulate the DOM but The written below are the main methods. 

// 1)By targeting ID. 
var Id = document.getElementById("nav");
console.log("ID Method- ",Id);

// 2)By targeting Class name. 
var Class = document.getElementsByClassName('container');
console.log("Class Method- ",Class);

// 3)By targeting Tag name. 
var Tag = document.getElementsByTagName('li');
console.log("Tag Method- ",Tag);

// DOM get value methods.
// 1) innerText- It is used to target the innertext of the html tags.
var a = document.getElementById('para').innerText;
console.log("Inner Text- ",a);

// 2) innerHTML- It is used to target the inner html tags of the html element.
var b = document.getElementsByClassName("nav")[0].innerHTML;
console.log("Inner HTML- ",b);

// 3) getAttribute- It returns the value of the Attribute.
var c = document.getElementById('navbar').getAttribute('style');
console.log("Get Attribute- ",c);

// 4) getAttributesNodes- It returns the whole attribute with value.
var d = document.getElementsByClassName('nav')[0].getAttributeNode('style');
console.log("Get Attribute Node- ",d);

// 5) Attributes- It returns the array of all attribute we can get any attribute by their index number.

var e = document.getElementById('navbar').attributes[0].name;
console.log("Attribute's Name- ",e);

var f = document.getElementById('navbar').attributes[0].value;
console.log("Attribute's Value- ",f);

// DOM set methods
// 1) innerText-
var g = document.getElementById('para');
g.innerText = "This is new paragraph";
console.log("Changed innerText- ",g);

// 2) innerHTML-
var h = document.getElementById('heading');
h.innerHTML = "<h1>New Heading</h1>";
console.log("Changed innerHTML- ",h);

// 3) setAttribute
var i = document.getElementById('navbar').setAttribute('style', 'background-color: black');
console.log("Changed Attribute- ",i);   

// 4) Attributes
var j = document.getElementsByClassName('nav')[0].attributes[2].value = "background-color: brown";
console.log("Changed Attribute- ",j); 

// 5) removeAttribute
var k = document.getElementById('navbar').removeAttribute('class');
console.log("Removed Attribute- ", k);

// querySelector
var l = document.querySelector("#heading").innerHTML;
console.log("query Selector- ",l);

// query Selector All
var m = document.querySelectorAll('.container')[0].innerHTML;
console.log("query Selector All- ",m);

var n = document.querySelectorAll('#navbar li');
console.log(n);

// DOM CSS styling Method
// 1) style- It adds  a styling. 
var o = document.querySelectorAll('.container')[1].style.height = "10rem";
console.log("Style- ",o);


// 2) className- It adds a class to html tags.
var p = document.getElementById('para').className = "center";
console.log("Class Name- ",p);

// 3) classList Methods-
//3.1) classList.add-
var q = document.querySelector("#divFour").classList.add("height", "bg-yellow", "border");
console.log("Class Added")

//3.2) classList.remove- 
var r = document.getElementById('divThree').classList.remove('width');
console.log("Class Removed");

// 3.3) classList.length- It shows how many classses are present.
var s = document.querySelector('#divThree').classList.length;
console.log("classList length- ",s);

// 3.4) classList.toggle("class name")- The class gets added on first click and it gets removed on the second click.

var t = document.querySelector('#divFour');
t.addEventListener('click', function(){
    t.classList.toggle("bg-green");
    
    if (t.innerText == "This is Div Four"){
        t.innerText = "This is now Green Div";
    }else{
        t.innerText = "This is Div Four";
    }
    console.log("classList Toggle- ",t);
});

// 3.5) classList.item(index)- We can get any classes by their index no.

var u = document.getElementById('divThree').classList.item(2);
console.log("classList Item- ",u);

// 3.6) classList.contain("class name")- It checks if the class exists or not in html.

var v = document.querySelector('#divFive').classList.contains("center");
console.log("classList Contains- ",v);

// DOM traversal Method 
// 1) parentElement and parentNode- Both the methods are same it shows the parent element.
var w = document.querySelector('#divFour').parentNode;
w.style.height = "300px";
console.log("Parent Element- ",w);

// 2) children- It returns the children elements of given element.
var x = document.getElementById("parentFF").children[1];
x.style.height = "100px";
console.log("Children Elements- ",x);

// 3) childNodes- 
var y = document.getElementById('parentFF').childNodes;
console.log(y);

// 3) firstElementChild- It targets the first element of the parent element. 

var z = document.querySelector("#parentFF").firstElementChild;
console.log("First Element Child- ",z);


// 4) lastElementChild- It targets the last element of the parent element. 

var a = document.querySelector('#parentFF').lastElementChild;
console.log("Last Element Child- ",a);

// 5) nextElementSibling- It targets the next element.
var b = document.getElementById("divFive").nextElementSibling;
console.log("next Element Sibling- ",b);

// 6) previousElementSibling- It targets the previous element. 
var c = document.getElementById('divFive').previousElementSibling;
console.log("Previous Element Sibling- ",c);

// create Methods
// 1) createElement- 
var createElement = document.createElement("h1");
console.log("Element Created- ",createElement);

// 2) createTextNode-
var createTextNode = document.createTextNode("This is Text");
console.log("Text created- ",createTextNode);

// 3) createComment- 
var f = document.createComment("Thiss is Comment");
console.log("Comment Created- ",f);

// Append and Insert Methods
// 1) appendChild- It adds the Elements at the last only.

createElement.appendChild(createTextNode);
console.log("Appended Text to Element- ",createElement);

var appendedChild = document.getElementById('divSeven').appendChild(createElement);
console.log("Appended Element- ",appendedChild);

// 2) insertBefore((what to insert),(before whom to insert))- We can append the Elements anywhere.

var creatingElem = document.createElement("p");
var creatingText = document.createTextNode("This is paragraph");
creatingElem.appendChild(creatingText); 

var d = document.getElementById('divFive').nextElementSibling;
d.insertBefore(creatingElem, d.childNodes[0]);
console.log("insert Before- ",d);

// insertAdjacent methods has four positions - 1) beforebegin 2) afterbegin 3) beforeend 4) afterend

// 3) insertAdjacentElement("positions", (what to add))- It creates and adds the Element.

var newElem = document.createElement("div");
var newText = document.createTextNode("This is created div");
newElem.appendChild(newText);

var target = document.querySelector('#divEight');
target.insertAdjacentElement("afterbegin",newElem)
console.log("insert Adjacent Element- ",target);

// 4) insertAdjacentText- It creates the text and appends.

var newText = "This is new just a Text";
var target = document.getElementById('divEight');

target.insertAdjacentText("afterend", newText);
console.log("insert Adjacent Text- ",target);

// 5) insertAdjacentHTML- It creates the Element and Text and appends them.

var newText = "<h2>this is heading </h2>";

var target = document.getElementById('divEight');
target.insertAdjacentHTML("beforeend",newText);

// replaceChild((New Element),(Old Element))- It replaces the Old element child with the new one.

var newElem = document.createElement("li");
var newText = document.createTextNode("ORANGE");
newElem.appendChild(newText);

var target = document.querySelector("#list");

target.replaceChild(newElem, target.children[3]);
console.log("Replace Child- ",target);

// removeChild-
var target = document.getElementById('list');
target.removeChild(target.children[2]);
console.log("Remove Child- ",target);

// cloneNode- It can copy any Element.
var target = document.querySelector("#divEight").childNodes[2];
var clone = target.cloneNode(true);
console.log("cloned- ",target);

var append = document.getElementById('divThree');
append.appendChild(clone);
console.log("Appended- ",append);

// contains()- It shows if the id, class or elements are present in parent element.

var parent = document.querySelector('div');
var contains = document.querySelector('#parentFF');
var find = parent.contains(contains);
console.log("Contains- ",find);

var a = document.querySelector(".main");
console.log(a);
var b = document.querySelector('ul');
console.log(b);
var find = a.contains(b);
console.log(find);

// just checking diffrence between cloneNode append and just append. 
// just append
var a = document.querySelector('#list').children[0];
var b = document.querySelector("ul");

// var result = b.appendChild(a);
// console.log("Appended without Cloning- ",result);

// cloning and appending.
var a = document.querySelector('#list').children[0];
// console.log(a);
var cloning = a.cloneNode(true);
console.log("Cloning- ",cloning);

var b = document.querySelector("ul");
// console.log(b);
// var result = b.appendChild(a);
// console.log("Element Appended after Cloning- ",result);











