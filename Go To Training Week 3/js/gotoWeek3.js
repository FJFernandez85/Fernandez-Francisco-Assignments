/*
Francisco Fernandez
4/22/2015
GoTo Week #3
Section 01
 */

//loops for validation example
var name = prompt("Type in your name:");

while(name === ""){
    name=prompt("Please dont leave empty. \nWhat is your name:");


}

var num = prompt("Please enter only number");

while(isNaN(num) || num===""){
    num = prompt("Please enter only numbers!");
}
