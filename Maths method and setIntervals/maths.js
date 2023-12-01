// // Math Methods
// // 1) Math.ceil()- It gives the nearest upper value of Number.
// var a = Math.ceil(10.10)
// console.log("ceil- " + a); 

// // 2) Math.floor()- It gives the nearest lower value of Number.
// var a = Math.floor(15.40);
// console.log("floor- " + a);

// // 3) Math.round()- It gives the round figure value from decimal values.[if (numbers value > .5){Math.ceil} and if (numbers value < .5){Math.floor}]
// var a = Math.round(98.29);
// console.log("Round- " + a);

// // 4) Math.trunc()- It removes the decimal values and returns the number. 
// var a = Math.trunc(87.4516);
// console.log("Trunc- " + a);

// // 5) Math.max()- It gives the maximum value from all the value. 
// var a = Math.max(10,20,50,40);
// console.log("Max- " + a)

// // 5) Math.min()- It gives the minimum value from all the value. 
// var a = Math.min(10,20,50,40);
// console.log("Min- " + a)

// // 6) sqrt()- It gives the square root of the Number. 
// var a = Math.sqrt(25);
// console.log("Square root- " + a);

// // 6) cbrt()- It gives the Cube root of the Number. 
// var a = Math.cbrt(64);
// console.log("Cube root- " + a);

// // 7) pow(x,y)- It is same as x^y.
// var a = Math.pow(2,3); //2*2*2
// console.log("Power- " + a)

// // 8) random()- It gives the random number between 0 to 1.
// var a = Math.random();
// console.log("Random number- " + a);

// // 9) Math.abs()- It gives the absolute value. 
// var a = Math.abs(-10);
// console.log("absolute- " + a);

// Random number generator like OTP 
let verificationCode = Math.round((1000 + Math.random()*9000 ));
let arr = verificationCode.toString().split('');
while (arr[0]===arr[1] && arr[2]===arr[3] && arr[0]===arr[3]) {
    verificationCode = Math.round((1000 + Math.random()*9000 ));
    arr = verificationCode.toString().split('')
    // console.log(verificationCode)
}
// console.log(verificationCode);

// setInterval-
// var setInterval = setInterval('functionName',miliseconds);
// to stop the interval- var clear = clear('setIntervalName');

var a = document.getElementsByClassName('div-one');
var b = 0;
var borderRadius = 0;
var button = document.querySelector('#btn');
console.log(button);

button.addEventListener('click', function(){
    var c = setInterval(function(){
        b += 20;
        borderRadius += 3.5;
        if (b == 300){
            clearInterval(c);
        }
        else{
            a[0].style.marginLeft = b + "px";
            a[0].style.borderRadius = borderRadius + "px";
        }
        console.log("interval started");
    },500);
})

var yesBtn = document.getElementById('yes');
var noBtn = document.getElementById("no");
yesBtn.addEventListener('mouseover', function(){
    console.log("event hua");
    noBtn.style.marginLeft = '100px';
})

console.log(yesBtn)

function generateOTP(){
    let num = '0123456789';
    let OTP = "";
    for (let i = 0; i < 4; i++){
        OTP += num[Math.floor(Math.random()*10)];
        // console.log(i);
    }
    return OTP;
}
console.log(generateOTP());

