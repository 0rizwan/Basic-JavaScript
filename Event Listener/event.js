//  Forms Event Listeners
// 1) focus-
// 2) blur- 
var fname = document.getElementById("name");
 fname.addEventListener('focus', focused);
 fname.addEventListener('blur', blured);

var city = document.getElementById('city');
 city.addEventListener('focus', focused);
 city.addEventListener('blur',blured);

var country = document.getElementById("country");
country.addEventListener("focus",focused);
country.addEventListener('blur', blured);

 function focused(){
    this.style.background = "pink";
 };

function blured(){
    this.style.background = "";
}

// 3) input- It gets triggered when user input something, it is mainly used in textarea and input.
fname.addEventListener('input',inputFunction);
function inputFunction(){
    var x = this.value;
    console.log(x);
    document.getElementsByClassName('screen')[0].value = x;
}

// 4) onchange()- It gets triggered when we change something and lose focus.
var city = document.getElementById("city");
city.addEventListener('change', function(){
    var x = this.value;
    console.log(x);
    document.getElementsByClassName('screen')[1].value = x;
})

// 5) onselect()- when we select any text in input or textarea this event gets triggered.
var job = document.getElementById('job');
job.addEventListener('select', function(){
    var x = this.value;
    console.log(x);
    document.getElementsByClassName('screen')[2].value = x;
})

// 6) onsubmit()- this event gets triggered when we click submit button on forms.
var form = document.getElementById("form");
form.addEventListener('submit', function(){
    var x = document.getElementById('name').value;
    console.log("this is name- ",x);
    alert("Congratulation " + x);
})

// 7) oninvalid()- 
var fname = document.getElementById('name');
fname.addEventListener('invalid', function(){
    alert("Plz fill the details")
})



