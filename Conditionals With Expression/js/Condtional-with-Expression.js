/*
 Francisco Fernandez
 SDI Section 01
 Conditional with expression
 4-18-2015
 */

//Conditional Logic - Logical Operators
//Or Operator

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget And if our paycheck is over 300
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log ("No phone for you!");
}
