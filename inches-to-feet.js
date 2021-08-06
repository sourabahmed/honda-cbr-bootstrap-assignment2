
// var inches = 48;
// var feet = inches/12;
// console.log(feet);


// function toFeet(inches){
//     var feet = inches/12;
//     return feet;
// }
// var inch = 50;
// var totalFeet = toFeet(inch);
// console.log(totalFeet)

// var inch = 60;
// var totalFeet = toFeet(inch);
// console.log(totalFeet)

function toMile(kilometer){
    var miles = kilometer * 0.621371192;
    return miles;
}
var myKilometers = 20;
var miles = toMile(myKilometers);
console.log(miles);

function toKilometers(miles){
    var kilometers = miles * 1.609344;
    return kilometers;
}
var myMiles = 20;
var kilometers = toKilometers(myMiles);
console.log(kilometers);