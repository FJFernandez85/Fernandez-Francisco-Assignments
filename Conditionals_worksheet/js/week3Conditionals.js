/*
Francisco Fernandez
4-19-2015
Conditionals Worksheet
 */

//Group 1 : Expressions with Conditionals

//Celsius to Fahrenheit converter
var ifF = ("If you want degrees in fahrenheit type f.");
var ifC = ("If you want degrees in celsius type c.");

alert("Welcome to the temperature converter.");
prompt("If you want degrees in fahrenheit type f.\nIf you want degrees in celsius type c. ");

degreesCelsius = prompt("Input temperature to convert to Fahrenheit");
var fahrenheitFormula = 9/5*degreesCelsius+32 ;
if(ifF){
    console.log(+ fahrenheitFormula + "Degrees in Fahrenheit");
}

degreesFahrenheit = ("Input temperature to convert to Celsius");
var celsiusFormula = (degreesFahrenheit - 32)*5/9;
if(ifC){
    console.log(+ celsiusFormula + "Degrees in Celsius");
}




//alert("The temperature in degrees celsius is "+celsiusUnit +".");
//If the user puts a "C" for the unit,its celsius. If the user puts "F" for the unit,its fahrenheit