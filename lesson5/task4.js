// 1 task
//
// Hoisting или "поднятие переменных"? Что произойдет при выполнении следующего куска кода?

    myname = "global";

function func() {
    console.log(myname); // undefined
    var myname = "local";
    console.log(myname); // local
}
func();

// 2 task
//
// Какие языковые конструкции в javascript создают scope? Что произойдет при выполнении следующего куска кода?
//
var a = 90100;
function someFunc(){
    if(false){
        var a = 1;
    } else {
        var b = 2;
    }
    console.log(b); // 2
    console.log(a); // undefined
}
someFunc();


// 3 task
//
// На что ссылаеться this в следующем фрагменте кода?

    function test() {
        this; // window
    }
    test();


// 4 task
//
// Что такое глобальные переменные ?

// Это переменные, которые не ограничены областями видимости, то есть к ним можно достучатся из любой части кода.

// Как они создаются ?
// Так же как и обчные переменные, но за пределами функций.

// Какие проблемы связаны с использованием глобальных переменных?
// Их случайно можно перезаписать другими переменными.
//
//
//     5 task
//
// Почему вызов a(); происходит успешно, а вызов b(); выдает ошибку?
//
// a(); //ok - при таком обьявлении функции а, мы можем ее вызывать еще до того как она была обьявлена
// b(); //error - при таком варианте обьявления фукнции, ее можно вызывать только после обьявления
//
var b = function(){
    alert( 'function b');
}

function a(){
    alert( 'function a' );
}


// 6 task
//
// Что выведет в консоль следующий код:
//
    var i = 0;

for (; i< 10; i ++) {
    console.log(i) // числа от 0 до 9 включительно
}
// 7 task
//
// Напишите функцию подсчета факториала числа, но каждый раз возвращая факториал умножайте его на 2 если число четное.
var factorial = function () {
        var multiplied = function (x) {
            var res = 1;
            for ( var i=1; i <= x; i++){
                res *= i;
            }
            if ( res%2 == 0){ return res *= 2;}
            else {return res};
        };
        return multiplied;
    };

var f = factorial();
var y = f(+prompt('Enter number'));
console.log(y);
//
// 8 task  - NOT READY
//---------------------------------------
// Напишите скрипт, который генерирует случайную строку.
// В строке должны быть маленькие и большие латинские буквы, цифры и подчеркивание.
//

var n = 10;
var alfC = "QWERTYUIOPASDFGHJKLZXCVBNM".charAt(Math.floor(Math.random() * 26));
var alfL = "qwertyuiopasdfghjklzxcvbnm".charAt(Math.floor(Math.random() * 26));
var alfN = "0123456789".charAt(Math.floor(Math.random() * 10));
var alfU = "_";
var randomString = alfC + alfL + alfN + alfU;

for ( var i = 0; i < n-4; i++){
    randomString += "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789_".charAt(Math.floor(Math.random() * 63));
}

randomString = randomString.split("");
randomString.sort(function(a, b){return 0.5 - Math.random()});
randomString = randomString.join("");

console.log(randomString);

//---------------------------------------------------
// 10 task
//
// Реализуйте функцию union, которая объединит уникальные элементы всех массивов, переданных ей параметром.
function union(x,y,z) {

    var newArr = [];
    newArr = x.concat(y,z);
    var obj = {};

    for ( var i = 0; i < newArr.length; i++ ) {
        var str = newArr[i];
        obj[str] = true;
    }

    return Object.keys(obj);
}
console.log(union([1, 2, 3], [101, 2, 1, 10], [2, 1])); // вернёт [1, 2, 3, 101, 10].
// //
// 11 task - NOT READY
//
// Реализуйте функцию flatten, которая в случае, если массив обладает уровнями вложенности,
// приведёт его к элементарному виду (вложенность может быть любой глубины).

function flatten(arr) {

    arr = arr.join(",").split(",");
    return arr;
}
console.log(flatten([1, [2], [3, [[[4]]]]]));

// Пример: flatten([1, [2], [3, [[[4]]]]]) вернёт [1, 2, 3, 4].
//
// 12 task
//
// Реализуйте функцию unique, которая будет удалять дубли из массива.
function unique(arr){
    var obj = {};
    for ( var i = 0; i < arr.length; i++ ) {
        var str = arr[i];
        obj[str] = true;
    }

    return Object.keys(obj);
}


console.log(unique([1,2,2,2,8,9,8,5]));