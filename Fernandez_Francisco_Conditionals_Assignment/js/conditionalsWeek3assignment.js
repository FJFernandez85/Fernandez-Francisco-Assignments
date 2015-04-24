/*
Francisco Fernandez
4/23/2015
Conditionals Assignment
 */

//How to defeat the zombie king?
//alert user for help and prompt user for weapon selection

var zombieKing = 500;

//numberofTimes

//alert("We need your help to defeat the zombie king.");

//alert("This is the weapon selection .\n1.Grenade Launcher - dmg:20, sps:1\n2.Rifle - dmg:10, sps:10\n3.Pistol - dmg:4, sps:5\n(dmg - Damage per shot), (sps - Shots per Second)");

var weaponChoice = prompt("Input the damage amount of your weapon of choice.\n1.Grenade Launcher : 30 dmg\n2.Rifle : 10 dmg\n3.Pistol : 4 dmg");
console.log(weaponChoice);

var shotsperSecond = prompt("Input the sps amount of your weapon of choice.\n1.Grenade Launcher : 1 sps\n2.Rifle : 10 sps\n3.Pistol : 5 sps");

var numberofTimes = prompt("Input the number of times you have to use it to defeat the zombie king");
console.log(numberofTimes);

//else if Statement
if(weaponChoice * shotsperSecond * numberofTimes > zombieKing ){
    console.log("You defeated the zombie king!");
}else{
    console.log("You failed!");
}
//Ternary Statement
(weaponChoice * shotsperSecond * numberofTimes > zombieKing) ? console.log("You defeated the zombie king!") : console.log("You failed!");