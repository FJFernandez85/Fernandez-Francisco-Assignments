/*
 Francisco Fernandez
 SDI Section 01
 Conditional with expression
 4-18-2015
 */

//Conditional Logic - Ternary Operators

var gpa = 48;

//if the gpa is over the min 2.0, the student can graduate
/*if(gpa > 2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}*/
(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low!");
