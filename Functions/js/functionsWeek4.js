/**
Francisco Fernandez
Functions
4/27/2015
*/

//Functions - Parameters and Arguments

//ex.

//Function definition - parameters
function dogYears(age){ //We dont need var in the parameter section because only variables declarations go inside the parenthesis
    var dogYears = age * 7;
    console.log("Sparky is "+ dogYears + "years old.")
}
//Function call- arguments

dogYears(4);
dogYears(6);
dogYears(5);

//also works
//var age1 = 4;
//dogYears(age1);