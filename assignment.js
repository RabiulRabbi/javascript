//converted into feet to mile:

function feetToMile(feet) {
    if (feet < 0) {
        return "Distance can't be negative";
    }
    var mile = feet / 5280;
    return mile;
}
var inputMile = feetToMile(200);
console.log(inputMile);


//wood calculator:

function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "Quantity of those elements can't be negative";
    }
    var woodChair = chair * 1;
    var woodTable = table * 3;
    var woodBed = bed * 5;
    var woodTotal = woodChair + woodTable + woodBed;
    return woodTotal;
}
var inputNum = woodCalculator(4, 5, 6);
console.log(inputNum);


//brick calculator:

function brickCalculator(floor) {
    if (floor < 0) {
        return "Number of floor can't be negative";
    }
    var feetTotal = 0;
    var brickTotal = 0;
    for (var i = 1; i <= floor; i++) {
        if (i >= 1 && i <= 10) {
            feetTotal = feetTotal + 15;
        } else if (i >= 11 && i <= 20) {
            feetTotal = feetTotal + 12;
        } else {
            feetTotal = feetTotal + 10;
        }
    }
    brickTotal = feetTotal * 1000;
    return brickTotal;
}
var floorNum = brickCalculator(15);
console.log(floorNum);


//tiny friend:

function tinyFriend(names) {
    if (names == "") {
        return "Array is empty";
    }
    var min = names[0].length;
    var smallName = names[0];
    for (var i = 0; i < names.length; i++) {
        if (min > names[i].length) {
            min = names[i].length;
            smallName = names[i];
        }
    }
    return smallName;
}
var arrayFriends = tinyFriend(["rakib", "raihan", "meheidi", "roni"]);
console.log(arrayFriends);