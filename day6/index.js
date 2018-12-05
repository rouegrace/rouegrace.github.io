
//Function that does not have a result - Procedure 
//Similar to declaring a variable
function calculate()
{
var myName = "this is stackup";
console.log(myName);

}
calculate(); // Calling the function


//Function that has a result or returns a value - Return Value
function getMyFullname()
{
var firstname = "Stackup";
var lastname = "One North";
var fullname = firstname + " " + lastname;
return fullname;
}
var myFullname = getMyFullname();
console.log(myFullname);

//--------------------
function calculate (myLocation, myLocation2, myLocation3)
{
    var myName = "This is stackup, at " + myLocation + " " + myLocation2;
    console.log(myName);
}
calculate("one north", "jtc launchpad");
calculate("test", "test");

//--------------------
function sum (a,b)
{
var ans = a+b;
console.log(ans);
}
sum(5,2);

//----------
function greeting(name, name2, bornYear)
{
var age = 2018 - bornYear;   
var myGreeting = "Hello" + " " + name + " " + name2+ "," + " " + age;
console.log(myGreeting);
}
greeting("Ano", "Nymous", "1983");
greeting("No", "Name", "1984");
greeting("Who", "You", "1985");


//-----------Alert--------
function testMe ()
{
alert("Hi! you hit the button")

}

//------IF condition------

var n = 5;
if (n<10)
{
console.log("n is less than 10");
}
if (n<3)
{
console.log("n is kess than 3");
}

//-----If Condition------

var score = 6;
var LowScore = false;
if (score < 10)
{
LowScore = true;
console.log(LowScore);
}

