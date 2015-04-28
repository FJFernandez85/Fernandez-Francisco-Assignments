/**
Francisco Fernandez
Functions
4/27/2015
*/

//Functions - Anonymous Functions

//var functionName = function(){
    //code goes here
//}

var calcArea = function(width, height){ //defining (defining happens before invoking)
    //code the function runs
    var area = width * height;
    return area;
}

var a = calcArea(20, 30); //invoking (invoking happens after defining)

console.log(a);