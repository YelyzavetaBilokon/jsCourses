// 1 task
// Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// ** Sample Output: **
// "0 is even"
// "1 is odd"
// "2 is even"
for ( i=0; i<=15; i++){
    // или можно писать так console.log(i + (i%2 === 0 ? " is even" : " is odd"));
    if ( i%2 === 0){
        console.log( i + " is even");
    }
    else {
        console.log( i + " is odd");
    }
}

// 2 task
// Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
for ( i=1; i<=100; i++){
    if ( i%3 === 0){
        if ( i%3 === 0 && i%5 === 0 ){
            // тут это i%3 === 0 проверять не нужно он уже есть правдой
            console.log("FizzBuzz");
        }
        else {console.log("Fizz");}
    }
    else if ( i%5 === 0){
        if ( i%3 === 0 && i%5 === 0 ){
            // тут это i%5 === 0 проверять не нужно он уже есть правдой
            console.log("FizzBuzz");
        }
        else {console.log("Buzz");}
    }
    else {
        console.log(i);
    }
}

// 3 task
// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers
var x = 24;
var y = 12;

for ( i = x; i >=1 ; i-- ){
    if ( x%i === 0 && y%i === 0){
        console.log("GCD is " + i);
        break;
    }
}

// 4 task
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for ( i = 1; i <= 1000; i++ ){
    if ( i%3 === 0 && i%5 === 0 ){
        sum += i;
    }
}
console.log(sum);

// 5 task
// Console log all numbers from range 10-90 that divide to 5 and 3.
for ( i = 10; i <= 90; i++ ){
    if ( i%5 === 0 && i%3 === 0 ){
        console.log(i);
    }
}

// 6 task
// Console log only odd numbers from range 11-70 in reverse order starting with 70.
for ( i = 70; i >= 11; i-- ){
    if ( i%2 !== 0){
        console.log(i);
    }
}

// 7 task
// Console log only even numbers that divide to 2 and 3 from range 13-78 in reverse order.
for ( i = 78; i >= 13; i-- ){
    if ( i%2 === 0 && i%3 === 0 ){
        console.log(i);
    }
}
