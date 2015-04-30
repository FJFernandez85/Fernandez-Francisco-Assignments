/*
Francisco Fernandez
4-29-2015
Functions Assignment
*/

//Team Caps

//welcome alert to team caps
alert ("Welcome to Team Caps!");
console.log("Welcome to Team Caps");

//prompt user to choose team
capTEAM = prompt("Choose a team from the list by typing purchase cost!\n1.SanAntonio Spurs ($25)\n2.Golden State Warriors ($30)\n3.Cleveland Cavaliers ($20)\n4.Chicago Bulls ($35)\nex.(25, 30)");
console.log("Choose a team from the list by typing purchase cost!\n1.SanAntonio Spurs ($25)\n2.Golden State Warriors ($30)\n3.Cleveland Cavaliers ($20)\n4.Chicago Bulls ($35)\nex.(25, 30)");

//validating capTeam prompt
while(capTEAM==="" || isNaN(capTEAM)){
    capTEAM = prompt("Please do not leave blank and only use numbers.\nChoose a team from the list by typing purchase cost!\n1.SanAntonio Spurs ($25)\n2.Golden State Warriors ($30)\n3.Cleveland Cavaliers ($20)\n4.Chicago Bulls ($35)\nex.(25, 30)");
}

//prompt user to choose cap style
capSTYLE = prompt("Choose the cap style you want by typing the cost of it!\n1.Fitted : $10\n2.Snapback : $5");
console.log("Choose the cap style you want by typing the cost of it!\n1.Fitted : $10\n2.Snapback : $5");

//validating capSTYLE prompt
while(capSTYLE==="" || isNaN(capSTYLE)){
    capSTYLE = prompt("Please do not leave blank and only use numbers.\nChoose the cap style you want by typing the cost of it!\n1.Fitted : $10\n2.Snapback : $5");
}

//prompt user to type number of caps to be purchased
numberOFCAPS = prompt("Type number of caps that you want.");
console.log("Type number of caps that you want.");

//validating numberOFCAPS prompt
while(numberOFCAPS==="" || isNaN(numberOFCAPS)){
    numberOFCAPS = prompt("Please do not leave blank and only use numbers.\nType number of caps that you want.");
}

function checkoutCOST(numberOFCAPS){
    var checkoutCOST = (numberOFCAPS) * (capTEAM + capSTYLE);
    console.log("Final price is", checkoutCOST  );
}
checkoutCOST(1);
checkoutCOST(2);
checkoutCOST(3);
checkoutCOST(4);
checkoutCOST(5);
checkoutCOST(6);
checkoutCOST(7);
checkoutCOST(8);
checkoutCOST(9);
checkoutCOST(10);

