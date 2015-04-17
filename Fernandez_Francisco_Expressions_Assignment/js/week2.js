/*
Francisco Fernandez
4-16-2015
Expressions
 */

// Yearly Movie spending Calculator

//Ask the user for their favorite movie
var name = prompt ("What is the name of your favorite movie?\nType in the movie title. ");

//Im using the variable and saying wow and great movie
alert("Wow! "+name+" is a great movie.");

//Ask the user for the amount of money spent on movies each month
var moneySpent = prompt ("What is the amount of money you allow yourself to spend on movies monthly?");

//console.log the answer to check it
console.log(moneySpent);

alert("Now based on the amount of money you spend monthly on movies, lets figure out what your yearly spending amount is.");

//calculate yearly movie spending
//I need amount of money spent monthly on movies
var monthsINyear = 12;

//console.log the answer to check it
console.log(monthsINyear);

var yearlySpending = moneySpent * monthsINyear;


