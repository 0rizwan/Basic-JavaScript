// Objects

// Changing values of Const variable in Object
const consVar = {
    name: "Jack",
    age: 20
}
consVar.name = "Jones";
consVar.age = 21;
// console.log(consVar);    

var a = {
    firstName: "Messi",
    lastName: "Lionel",
    age: 35,
    teamsPlayed: ["Barca","Psg","Argentina"],
    fullName: function(){
        return this.lastName + " " + this.firstName;
    },
    goals: {
        barca: 600,
        argentina: 98,
    },
}
console.log(a);
console.log(a.firstName);
console.log(a.teamsPlayed[2]);
console.log(a.fullName());
console.log(a.goals.barca);

// Another way to create Object 
var o = new Object();
o.firstName = "chutiya";
o.lastName = "jha2";
console.log(o);

// Array of Object
var student = [
    {name: "Pablo", age: 18},
    {name: "John", age: 21},
    {name: "Liam", age: 19},
];

for (var i=0; i<student.length; i++){
    console.log(student[i].name + " " + student[i].age);
}

// student.forEach((e)=>{
//     console.log(e.name + " " + e.age);
// })

// for in loop 
var obj = {
    firstName: "Ronaldo",
    lastName: "Cristiano",
    age: 38
}
for (p in obj){
    console.log(p + ": " + obj[p]);      
};
