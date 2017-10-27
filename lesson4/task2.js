// 1 задание
// Палиндром - это строка которая читается с обоих сторон одинаково.
// Например: Анна, оно, А роза упала на лапу Азора.
// Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того
// является ли строка палиндромом или нет.
function isPal(string) {
    var strLowSpa = string.toLowerCase().replace(/\s/g,"");
    var str = strLowSpa.split("").reverse().join("");
    return strLowSpa === str;
}
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false


// 2 задание
// Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
// воз - зов, киборг - гробик, корсет - костер - сектор,
// Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr) {
    var newArr = {};
    for ( var i = 0; i < arr.length; i++ ){
        var sortWord = arr[i].toLowerCase().split('').sort().join('');
        newArr[sortWord] = arr[i];
    }
    var res = [];
    for (var key in newArr) res.push(newArr[key]);
    return res;
}

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'


//3 задание
//
// Создайте программу которая соеденит массив в строку, поменяет местами буквы в словах и порядок следования слов в массиве:
//
    var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];

function sortArr() {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").reverse().join("");
        arr.splice(i, 1, arr[i]);
    }

    arr.sort(function(a, b){
        return 0.5 - Math.random();
    });

    return arr.join(" ");

}

// console.log(sortArr());
// 4 задание
//
// Найти сумму целых чисел от 1 до 100
// Найти сумму четных чисел от 0 до 100.

var n = 100;
var res = 0;
var evel = 0;

for ( var i = 1; i <= n; i++){
    res += i;
}

for ( var j = 0; j <= n; j++){
    if ( j%2 === 0){ evel +=j }
}

console.log(res);
console.log(evel);


// 5 задание
//
// Напишите функцию callMe которая будет принимать 3 аругумента, это будут цыфры,
// потом она будет суммировать их и выводить на екран результат их суммы!
//
// Если в нее передели не числа то она должна выводить сообщение об ошибке в консоль и возвращать null;
// (вывод ошибки в консоль осуществялется через console.error("Тут текст ошибки") )
//
function callMe(x,y,z) {
    var sum = 0;
    if ( isNaN(x) || isNaN(y) || isNaN(z)){
        console.error("ERROR");
        return null;
   }
    else {
        sum = x + y + z;
        return sum;


    }
}

console.log(callMe(+prompt("enter number"),+prompt("enter number"),+prompt("enter number")));

// 6 задание
//
// Напишите функцию callMeAgain которая будет принимать 1 аргумент, который будет массивом.
// Она должна возвращать массив соедененный через запятые и отсортированный по алфавиту (Array.join(','));

function callMeAgain(arr) {

    return arr.sort().join(",");

}

console.log(callMeAgain(["a","b","ads","4"]));

//
// 7 задание
//
// Дан массив объектов:
// Отсортируйте массив по полю age
//
    var arr = [
        {name: "L12", age: 45},
        {name: "L1", age: 20},
        {name: "L1", age: 10},
        {name: "L15", age: 78},
        {name: "L1", age: 41},
        {name: "L1", age: 10}
    ];

arr.sort(function (a,b) {
    return a.age - b.age;

});

console.log(arr);

//
// 8 задание
//
// Через prompt узнайте у пользователя его имя и возраст, и запишите в отсортированный массив с 7 задания в правильную позицию,
// чтобы все элементы в массиве остались отсортированные по полю age
//
// Если такой пользователь уже существует в массиве верните пользователю сообщение: "Такой пользователь уже существует"

var userName = prompt("Enter your name");
var useAge = +prompt("Enter your age");
var lastArr = [];

var newArr = [{name: userName, age: useAge}];

for ( var i = 0; i<arr.length; i++){
    if (arr[i].name == newArr[0].name){
        alert("Такой пользователь уже существует");
        break;
    }
    else{
        lastArr = arr.concat(newArr).sort(function (a,b) {
            return a.age - b.age;
        });
    }
}
console.log(lastArr);


//
// 9 task
//
// Дан массив с числами. Подсчитайте количество цифр 3 в данном массиве.
//
//     Пример: [13, 35, 3, 443] - в массиве 4 цифры 3.

var arr = [13, 35, 3, 443];

var newArr = arr.join("").split('');
var count = 0;

for ( var i = 0; i<newArr.length; i++){
    if ( +newArr[i] === 3)
        count +=1;
}

console.log(count);

//
// 10 task
//
// Дан массив ['1', '2', '3', '4', '5', '6'].
// Сделайте из него строку '16-25-34'. Массив, конечно же, может быть любым.

var arr = ['1', '2', '3', '4', '5', '6'];
var newArr = [];

if ( arr.length%2 != 0 ){
    console.log("Array should have even number of elements!");
}
else {
    for ( var i = 0; i < arr.length/2; i++){
        var indPos = i;
        var indNeg = arr.length - (i+1);
        newArr.push(arr[indPos]+arr[indNeg]);
    }
}
newArr = newArr.join('-');
console.log(newArr);

//
// 11 task
//
// Даны два массива, к примеру
//
//     [1,2,3]
//     [4,5,6]
// Создайте новый массив, заполненный суммами соответствующих элементов, то есть [1+4, 2+5, 3+6] = [5, 7, 9].
//
// Скрипт должен работать для любых массивов, даже если их длина не одинакова (подумайте, что делать в этом случае).

var first = [1,2,3];
var second = [4,5,6];
var len = Math.max(first.length,second.length);

var sum = [];

for ( var i=0; i < len; i++ ){
    var f = first[i];
    var s = second[i];
    if ( f == undefined ){f = 0;}
    else if (s == undefined){ s =0;}
    sum[i] = f + s;
}

console.log(sum);

//
// 12 task
//
// Дан массив. Напишите функцию, которая будет удалять элемент из массива по его тексту.
//
// Пример: arr = [1,2,3,4,3,3]. Удалим все элементы с содержимым 3: func(arr, 3).

var arr = [1,2,3,4,3,3];

function func(arr, sym) {

    for ( i = arr.length; i > 0; i-- ){
        if ( arr[i] === sym ){
            arr.splice(i,1);
        }
    }
    return arr;

}

console.log(func(arr, 3));

//
// 13 task
//
// Реализуйте функцию intersection, вернёт массив из элементов, встречающихся в каждом из переданных массивов.
// Пример: intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2].

function intersection(x,y,z) {

    var newArr = [];

    for( i = 0; i < x.length; i++ ){
        for( j = 0; j < y.length; j++ ){
            for ( k = 0; k < z.length; k++){
                if ( x[i] == y[j] && x[i] == z[k] )
                    newArr.push(x[i]);
            }
        }
    }
return newArr;
}

intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);


// 14 task
//
// Дан массив с числами, к примеру [2, 3, 1, 4].
// Сделайте из него массив [2, 2, 3, 3, 3, 1, 4, 4, 4, 4].
// В массиве могут быть только целые положительные числа.
var arr = [2, 3, 1, 4];

arr.splice(1,0,2);
arr.splice(3,0,3,3);
arr.splice(7,0,4,4,4);

console.log(arr);
//
// 15 task
//
// Реализуйте функцию, которая будет дополнять массив заданными элементами до заданного размера.
// Пример: [1,2,3] дополним нулями до размера 6 - [1,2,3,0,0,0].
function addNumbers(x,n) {
    var arr = [1,2,3];
    for ( i=0; i<n; i++){
        arr.push(x);
    }
    return arr;
}

console.log(addNumbers(prompt("Enter element"),prompt("Enter how many elements should be added")));
//
// 16 task
//
// Дан массив с числами. Не используя цикл, выведите:
//
// Три самых маленьких числа в массиве (числа должны быть разные, дубли должны быть проигнорированы).
var arr = [-5,6,3,2,1,-9,1,7,0,-5,-7];
arr = arr.sort(function (a,b) {
    return a - b;

});
var newArr = Array.from(new Set(arr)).slice(0,3);
console.log(newArr);
//
// // Первые 3 отрицательных числа в массиве (по порядку следования).
//
function negative(value) {
    return value < 0;
}
var neg = arr.filter(negative).slice(0,3);
console.log(neg);
