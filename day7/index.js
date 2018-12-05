
//To get the value of HTML element
//document.getElementById("firstNumber").value;

//To display value
//document.getElementById("result").value="";

function calculate()
{
    var firstField = document.getElementById("firstNumber").value; //Returns string by default
    var secondField = document.getElementById("secondNumber").value;
    //use parseInt(); to converts string to number otherwise the values gets concatenated
    var total = parseInt(firstField) + parseInt(secondField);
    document.getElementById("result").value=total; 
}

//---Conditional Statement-----

var greet;

if (greet=="morning")
{
console.log("this is morning");
}
else if (greet=="afternoon")
{
console.log("this is afternoon");
}
else if (greet=="evening")
{
console.log("this is evening");
}
else 
{
console.log("night time");
}


//
function answer()
{
    var firstBox = document.getElementById("firstNo").value;
    var operator = document.getElementById("operator").value;
    var secondBox = document.getElementById("secondNo").value;
    var total;
   

if (operator =="+")
{
total= parseInt(firstBox) + parseInt(secondBox);
}
else if (operator =="-")
{
total= parseInt(firstBox) - parseInt(secondBox);
}
else if (operator =="*")
{
total= parseInt(firstBox) * parseInt(secondBox);
}
else if (operator =="/")
{
total= parseInt(firstBox) / parseInt(secondBox);
}
document.getElementById("result2").value=total;
 
}

var greetings = ["Morning","Afternoon","Evening"];
console.log(greetings);
console.log(greetings.length); // will return the total value of the array
console.log(greetings[1]);
console.log(greetings[2]);

//how to get the last number which is 15
var primenumber = [1,3,5,7,9,12,15];
console.log(primenumber[primenumber.length-1]) //get the last index of the array. 


//Looping using WHILE

var step = 0;
while (step < primenumber.length)
{
//console.log(step);
console.log(primenumber[step]);
step = step + 1;

}


//if even number -> "even number"
// if not -> not even number

var numbers = [1,2,3,4,5,6,7,8,9,10];
step =0;
while (step < numbers.length)
{
var isEven = numbers [step] % 2; //using the current index -> step = 0

if (isEven == 0)
{
console.log(numbers[step] + " is even number");
}
else
{
console.log(numbers[step] + " is not an even number");
}
step = step +1;

}

