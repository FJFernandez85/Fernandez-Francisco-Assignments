/*
Francisco Fernandez
Loops Week 4
4-29-2015
 */

console.log('------ Loops ------');

//while Loops

var b = 50; //variable starting point,(setups the index)

while (b > 0){ //replace if with "while", (checks the condition)
    console.log(b + 'kegs on the wall' );
    b--; //to increment it use ++ (increments or decrements the index)
}

console.log('------ Do While Loops ------');


var c = 10;

do{
    console.log(c + 'kegs okn the wall');
    c--; // this code will always run before condition is verified as true or false
}

while(c > 0); //condition has to be true for code to run