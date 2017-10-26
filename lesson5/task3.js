// Мы можем обьявить функцию 3 способами:
//
//     function isNimble(){ return true; }
// var canFly = function(){ return true; };
// window.isDeadly = function(){ return true; };
// Чем они отличаються друг от друга?
//
// http://ejohn.org/apps/learn/#5 - Посмотрите и пройдите задания по функциям!
//
// 1 задание
//
// Написать функцию color(), которая будет генерировать случайный цвет в RGB формате.
//
function color() {
    r = Math.floor(Math.random() * (255 - 0) + 0);
    g = Math.floor(Math.random() * (255 - 0) + 0);
    b = Math.floor(Math.random() * (255 - 0) + 0);
    var rgb = `RGB = (${r}, ${g}, ${b})`;
    return rgb;
}
console.log(color());

// 2 задание
//
// Напишите функцию, генерирующую массив с N количеством элементов товара вида «Товар N»,
// где N номер товара который вы будете передавать в функцию. Выведите на экран массив.
var getProducts = function(n){

    var arr = [];

    for ( i=1; i <= n; i++){
        arr.push("Product " + i);
    }

    return arr;
};

console.log(getProducts(50)); // ["Products 1", "Prodcuts 2" ... ] and etc.


// 3 задание
//
// Write function that will get the 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

window.multiply = function(n){

    var res = 2;
    for ( var i = 1; i < n; i++){
        res *= 2;
    }
    var str = String(res).split("");
    var sum = 0;
    for ( var j = 0; j < str.length; j++){
        sum += +str[j];
    }
    return sum;
};

console.log(multiply(15));
// console.log(multiply(1000));???????????????? NOT READY