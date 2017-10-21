// 1 task
// Create function "getName" that ask user his name with promt window and alerts his name to him in format: "Hello, <his_name>".
    function getName(x, y) {
    x = prompt("Enter your name");
    y = alert(`Hello, ${x}`);
    return y;
}

getName(); // if I put "Lily" in prompt I will see in alert: "Hello, Lily";

// 2 task
// Create function double(x) that returns the number passed to it as an argument, multiply with 2
    function double(x) {
        x *= 2;
        return x;
    }

double(6); // logs in console => 12

// 3 task
// Create function range(x, y) that returns a sum of digits in the range of numbers [x, y];
function range(x, y) {
    var result = 0;
    for (i = x; i<=y; i++){
    result = result + i;
    }
    return result;
}

range(1,3); // logs in console => 6

// 4 task
// Напишите функцию которая будет находить сумму простых чисел меньших переданному в нее значению. Пример работы:
    function getPrimesSumBelow(x, y) {
    var result = 0;
    if ( x>1 ) {
        labelContinue:
            for (i = x; i < y; i++) {
                for (j = 2; j < i; j++) {
                    if (i % j === 0) {continue labelContinue;}
                }
                result = result + i;
            }
        return result;
    }
    else {
        console.log("x should be more than 1")
    }
    }
getPrimesSumBelow(2,10); // 2 + 3 + 5 + 7 = 17

// 5 task
// Create a function that returns true if number is odd, and false if even;
function numberCheck(x){
    if ( x%2 === 0){
        return false;
    }
    else {
        return true;
    }
}
numberCheck(100);

// 6 task
// Create a function that returns all odd numbers in range, use the previous function inside this one;
function numberCheckRange(z,y){
    var odd = [];
    for ( i=z; i<=y; i++){
        if (numberCheck(i) === true){
            odd.push(i);
        };
    }
    return odd;
}
numberCheckRange(1,10);

// 7 task
// Create a function that will call promt window that will ask for a number to user, until he enters 9;
function numberNine(number) {
    if (number !== 9){
        return numberNine(+prompt("Please enter number 9"));
    }
    else {
        console.log("Nice work!")}
    
}

numberNine(+prompt("Please enter number 9"));
