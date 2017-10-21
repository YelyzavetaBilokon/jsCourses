//task1
// Если переменная a равна нулю, то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a = +prompt("Enter a value");
if (a === 0){
    console.log("Correct!");
}
else {
    console.log("Incorrect!");
}

//task2
// Если переменная a равна 'test', то выведите 'Верно!', иначе выведите 'Неверно!'.
// Проверьте работу скрипта при a, равном 'test', 'тест', 3.
var a = prompt("Type: test");
if (a === "test"){
    console.log("Correct!");
}
else {
    console.log("Incorrect");
}

//task3
// Если переменная test равна true, то выведите 'Верно!', иначе выведите 'Неверно!'.
// Проверьте работу скрипта при test, равном true, false.
// Напишите два варианта скрипта - с короткой записью и с длинной.
var test = confirm("Is it true or not?")
if (test == true){
    console.log("Correct!");
}
else {
    console.log("Incorrect!");
}

test ? console.log("Correct!") : console.log("Incorrect!");

//task4
// Создайте переменные a и b. Просуммируйте их, а результат запишите в переменную result.
// Если result больше 5, то присвойте переменной result значение 5. Если же она меньше 5-ти - то умножьте ее на 10.
// Выведите на экран значение переменной result. Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.
var a = 3;
var b = 1;
var result = a+b;
if (result > 5){
    result = 5;
}
else {
    result *= 10;
}
console.log(result);

//task5
// Если переменная a равна нулю или равна двум, то поделите ее на 10, иначе прибавьте к ней 7 и выведите ее на экран.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.
var a = 2;
if (a === 0 || a === 2){
    a /= 10;
}
else {
    a +=7
}
console.log(a);

// task6
// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите 'Неверно!'.
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
var a = 3;
var b = 5;
if ( a<=1 && b>=3){
    console.log(a+b);
}
else {
    console.log("Incorrect!");
}

//task7
// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-х и меньше 14-ти, то увеличьте a на 2,
// иначе прибавьте к a число 5. Выведите новое значение перенной на экран. Проверьте работу скрипта самостоятельно.
var a = 3;
var b = 6;
if ((a>2 && a<11) || (b>=6 && b<14)){
    a +=2;
}
else {
    a +=5;
}
console.log(a);

//task8
// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'лето' и так далее.
// Решите задачу через switch-case.
var num = +prompt("Type season number (from 1 to 4)");
switch (num){
    case 1:
        result = "winter";
        break;
    case 2:
        result = "sping";
        break;
    case 3:
        result = "summer";
        break;
    case 4:
        result = "autumn";
        break;
    default:
        result = "incorrect season";
        break;
}
console.log(result);

//task9
// Переменная lang может принимать три значения: 'ru', 'en', 'de'.
// Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
// если имеет значение 'en' – то на английском, если 'de' – на немецком.
// Решите задачу через 3 if, через switch-case и через многомерный массив

var lang = prompt("choose ru, en or de?");
var arr;
if (lang === "ru"){
    arr = ["пн","вт","ср","чт","пт","сб","вс"];
    console.log(arr);
}
else if (lang === "en"){
    arr = ["mon","tue","wed","thu","fri","sat","sun"];
    console.log(arr);
}
else if (lang === "de"){
    arr = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Soontag"];
    console.log(arr);
}
else {
    console.log("Incorrect language");
}


switch (lang){
    case "ru":
        arr = ["пн","вт","ср","чт","пт","сб","вс"];
        console.log(arr);
        break;
    case "en":
        arr = ["mon","tue","wed","thu","fri","sat","sun"];
        console.log(arr);
        break;
    case "de":
        arr = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Soontag"];
        console.log(arr);
        break;
    default:
        console.log("Incorrect language");
        break;
};


var mass = [
    ["пн","вт","ср","чт","пт","сб","вс"],
    ["mon","tue","wed","thu","fri","sat","sun"],
    ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Soontag"]
];

if (lang === "ru"){
    arr = mass[0];
    console.log(arr);
}
else if (lang === "en"){
    arr = mass[1];
    console.log(arr);
}
else if (lang === "de"){
    arr = mass[2];
    console.log(arr);
}
else {
    console.log("Incorrect language");
}


