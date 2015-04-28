/**
Francisco Fernandez
Functions
4/27/2015
*/

//Functions - Basic Structure

var width = 5; //Functions - Variable Scope

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();
console.log(width); //Functions - Variable Scope
