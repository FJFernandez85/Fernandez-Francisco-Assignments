/**
Francisco Fernandez
Functions
4/27/2015
*/

//Functions - Function vs Procedure

//this is a function
//return values
function calcArea(width, height){
    var area = width * height;
    return area;
}

//this is a procedure, functions that just have a list to do
//never returns values
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}