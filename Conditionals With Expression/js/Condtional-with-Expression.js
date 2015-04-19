/*
 Francisco Fernandez
 SDI Section 01
 Conditional with expression
 4-18-2015
 */

//Conditional Logic - Ternary Operators

var age = 6;
var book;
// if the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
/*if(age <10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}*/
//Ternary Operator Example form
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);
