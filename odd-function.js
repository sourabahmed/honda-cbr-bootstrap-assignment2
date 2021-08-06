// const number = 5;
// // const oddNumber = number % 2;
// // console.log(oddNumber == 0);
// console.log(number % 2 == 0);

function isEven(number){
    if(number % 2 == 0){
        return true;
    } 
    return false;  
}
var myNumber = 2344;
var isMyNumberEven = isEven(myNumber);
console.log('is my number even '+ isMyNumberEven);

function isOdd(number){
    if(number % 2 == 1){
        return true;
    }
    return false;
}
var myNumber = 2341;
var isMyNumberOdd = isOdd(myNumber);
console.log('is my number odd ' + isMyNumberOdd);