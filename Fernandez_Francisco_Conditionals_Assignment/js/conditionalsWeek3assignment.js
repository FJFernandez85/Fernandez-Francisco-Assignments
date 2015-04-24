/*
Francisco Fernandez
4/23/2015
Conditionals Assignment
 */

//How to defeat the zombie king?
//alert user for help and prompt user for weapon selection

var grenadeLauncher;
var riFle;
var piStol;
var zombieKing;
var timeLimit;

 grenadeLauncher = timeLimit-(zombieKing/30*1);
 riFle = timeLimit-(zombieKing/10*10);
 piStol = timeLimit-(zombieKing/4*5);
 zombieKing = 500;
 timeLimit = 120;

alert("We need your help to defeat the zombie king.");

prompt("Select the best weapon for the job.\n1.Grenade Launcher - dmg:20, sps:1\n2.Rifle - dmg:10, sps:10\n3.Pistol - dmg:4, sps:5\n(dmg - Damage per shot), (sps - Shots per Second)");
