// 1 task
//
// Example:
//
//     var makeFunction = function () {
//         var addOne = function (x) {
//             return x + 1;
//         };
//         return addOne; // return the function
//     };
// // makeFunction is a function with no arguments
//
// var f = makeFunction();
// // f is a function that takes one argument
//
// var y = f(3);
// // now y is 4

// Create a function that will always return a number multiply on 3!
function multip(x) {
    return x *=3;

}
console.log(multip(4));

// Write a JavaScript program to calculate the factorial of a number using 1 task,
// but ask user for a number to get factorial from using prompt() function.
// Then give an answer to user after calculation is finished using alert(number);

var factorial = function () {
        var multiplied = function (x) {
            var res = 1;
            for ( var i=1; i <= x; i++){
                res *= i;
            }
            return res;
        };
        return multiplied;
    };

var f = factorial();
var y = f(+prompt('Enter number'));
alert(y);
//-------------------------------------
// 2 task - NOT READY
//
// Make this syntax possible: var a = add(2)(3); //5
// var add = function (x) {
//
// var a = add(2)(3); //5
// console.log(add(2)(3)); // 5

// ------------------------------------
// 3 task
//
// Transform array of numbers to array of functions that will alert that digits:
//
var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
var func = numberArray.map(function (x) {
    alert(x);
    return x;

});
console.log(func);

// // in result we will have: [function (){...}, function (){...}, function (){...}, function (){...}]

// 4 task
//
// Please write a function "double" and "doubleTripple" so the following code will be true.
// To create a "doubleTripple" function please use double function inside.

var double = function (x) {
    return x * 2;
};

function doubleTripple(y) {
    var dob = double(y);
    return dob * 3;
}

console.log(double(9)); // 18
console.log(double(3)); // 6

console.log(doubleTripple(3)); // 18 = 3 * 3 * 2
console.log(doubleTripple(2)); // 12 = 2 * 3 * 2
console.log(doubleTripple(5)); // 30 = 5 * 3 * 2

// 5 task
//
// Please write a function "makeCount" so the following code will be true.
//
function createCount () {
    var curNum = 1;
    return function () {
        return curNum++;
    }
}

var makeCount = createCount();

console.log(makeCount()); // 1
console.log(makeCount()); // 2
console.log(makeCount()); // 3
console.log(makeCount()); // 4
console.log(makeCount()); // 5
console.log(makeCount()); // 6

// / 6 task
//
// Please write a function "makeCount" so the following code will be true. Use the previous function.
//
function createCount (startFrom) {
    var curNum = startFrom;
    return function () {
        return ++curNum;
    }
}

var makeCount = createCount(4);

console.log(makeCount()); // 5
console.log(makeCount()); // 6
console.log(makeCount()); // 7
console.log(makeCount()); // 8
console.log(makeCount()); // 9
console.log(makeCount()); // 10
