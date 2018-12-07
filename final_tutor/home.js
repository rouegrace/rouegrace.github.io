/*document.getElementById('my_shopping_cart').innerHTML = 
"IPhone x2: $600 <br>";

document.getElementById('my_shopping_cart').innerHTML = 
document.getElementById('my_shopping_cart').innerHTML +
"IPhone x2: $600 <br>"; */

/*
function mbpAmount()
{
var mbpQuantity = document.getElementById ("quantity").value;
var mbpPrice = 300
var mbpTotal = "$" + mbpQuantity * mbpPrice;
document.getElementById('my_shopping_cart').innerHTML = 
"Macbook Pro X" + mbpQuantity : mbpTotal "<br>";
} */


//MBP only - function per product. Only quantity and cart is dynamic

//collection
var myCarts = [];
var totalPayable = 0;

function addToCart()
{
var myQuantity = document.getElementById ("quantity").value;
var price = 300;
var productName = "Macbook Pro";
var totalPrice = parseInt(myQuantity) * price;
var item = productName + " x " + myQuantity + ": $" + totalPrice
totalPayable = totalPayable + totalPrice;


myCarts.push(item);

//display shopping cart. can be used by all product
document.getElementById("my_shopping_cart").innerHTML = "";
for (var a = 0; a < myCarts.length ; a++)
{
    var currItem = myCarts[a] + "<br>";
    var currResult = document.getElementById ("my_shopping_cart").innerHTML;
    document.getElementById ("my_shopping_cart").innerHTML = currResult + currItem;
}

//display the total payable:
document.getElementById("totalPayable").value = totalPayable;

}

//Dynamic method

var myCarts = [];
var totalPayable = 0;

function addToCart(exPrice, exProductName)
{
var myQuantity = document.getElementById ("quantity").value;
var price = exPrice;
var productName = exProductName;
var totalPrice = parseInt(myQuantity) * price;
var item = productName + " x " + myQuantity + ": $" + totalPrice
totalPayable = totalPayable + totalPrice;


myCarts.push(item);

//display shopping cart:
document.getElementById("my_shopping_cart").innerHTML = "";
for (var a = 0; a < myCarts.length ; a++)
{
    var currItem = myCarts[a] + "<br>";
    var currResult = document.getElementById ("my_shopping_cart").innerHTML;
    document.getElementById ("my_shopping_cart").innerHTML = currResult + currItem;
}

//display the total payable:
document.getElementById("totalPayable").value = totalPayable;

}
//compute payment and change
function payNow()
{
var grandTotal = document.getElementById("totalPayable").value;
var userPay = document.getElementById("totalUSerPay").value;

grandTotal = parseInt(grandTotal);
userPay = parseInt (userPay);

if (userPay >= grandTotal)
{
var change = userPay - grandTotal;
//display the total change:
document.getElementById("changeTotal").value = change;

}
else
{
alert ("unable to pay");
}


}