/*
Francisco Fernandez
4/22/2015
GoTo Week #3
Section 01
 */

//alert("Testing to see if connected.");

//Create an array of fruit names and then sort it

//Array - variable that holds multiple variables
//Index # of an array always starts with 0!!

var bowlofFruit = ["apple", "banana", "pear", "peach", "banana", "kiwi"];

//See whole array
console.log(bowlofFruit);

//Console.log the pear
console.log(bowlofFruit[2]);

//How many items are in an array?
//length property - access this by using dot syntax
//Fancy term for use a period
console.log(bowlofFruit.lengt);

//Count the number of pears in our fruit bowl

//Create a variable that will keep track of many pears there are.
var totalNumPears = 0;

//Test each item in the array and check if it is a pear

//Basic structure of a conditional
// if(condition to tes){code that will run if true}

// "7" == 7 - true
// "7" === 7 - false
//prompts always return strings!!

if(bowlofFruit[0]==="pear"){
    //This code will run if true
    //Add 1 to the total numbers of pears
    console.log("This item is a pearl!");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
}else{
    console.log("This fruit is not a pear");
}
if(bowlofFruit[2]==="pear") {
    //This code will run if true
    //Add 1 to the total numbers of pears
    console.log("This item is a pear!");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
}else{
    console.log("This is not a Pair");
}
if(bowlofFruit[3]==="pear") {
    //This code will run if true
    //Add 1 to the total numbers of pears
    console.log("This item is a pear!");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
}else{
    console.log("This fruit is not a pear");
}

console.log("There are "+totalNumPears+" pear(s) in the fruit bowl.");

//Create a loop for repetitive code.
//For Loop Structure
//for (intializing a counting variable; condition to test; increment of change){code to run for each time we loop}

for(var i =0; i<bowlofFruit.length; i++){
    console.log("Inside the loop, i ="+i);
    console.log(bowlofFruit[i]);
    //Test if the array item is pear
    if(bowlofFruit[i]==="pear"){
        console.log("Found a pear!");
        pearNumber++;
    }else{
        console.log("Fruit is not a pear");
    }
}

console.log("The total number of pears in the bowl is"+pearNumber);