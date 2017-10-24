// 1 task
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
var str = 'aaa@bbb@ccc';
str = str.replace(/@/g,'!');
console.log(str);

// 2 task
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
var str = 'aaa bbb ccc';
var str1 = str.substr(0,3) + str.substr(7);
var str2 = str.substring(0,3) + str.substring(7);
var str3 = str.slice(0,3) + str.substring(7);

console.log(str1);
console.log(str2);
console.log(str3);

// 3 task
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
var date = '2025-12-31';
var dateTest = new Date(date);
var mon = dateTest.getMonth() + 1;
dateTest = dateTest.getDate() + '/' + mon + '/' + dateTest.getFullYear();
console.log(dateTest);

// 4 task
// Дана строка 'js'. Сделайте из нее строку 'JS'.
var str = "js";
strUp = str.toUpperCase();
console.log(strUp);

// 5 task
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
var str = 'я учу javascript!';
console.log(str.length);

// 6 task
// Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.
var str = 'я учу javascript!';
var n = 10;
if (str.length > n){
    var result = str.slice(0,n) + "...";
}
else {
    result = str;
}
console.log(result);

// 7 task
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
var str = 'я учу javascript!';
var arr = str.split(" ");
console.log(arr);

// 8 task
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join("+");
console.log(str);

// 9 task
// Преобразуйте первую букву строки в верхний регистр.
var str = 'я учу javascript!';
var strUp = str[0].toUpperCase();
var newStr = str.replace(str[0],strUp);
console.log(newStr);

// 10 task
// Преобразуйте первую букву каждого слова строки в верхний регистр.
var exm = 'я учу javascript!';
var str = '';
str = exm[0].toUpperCase();

for (i=1; i < exm.length; i++){
    if ( exm[i-1] === " "){
        str = str + exm[i].toUpperCase();
    }
    else {
        str = str + exm[i];
    }
}
console.log(str);

// 11 task
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
var exm = 'var_test_text';
var str = exm[0];
for (i=1; i < exm.length; i++){
    if ( exm[i-1] === "_"){
        str = str + exm[i].toUpperCase();
    }
    else {
        str = str + exm[i];
    }
}
str = str.replace(/_/g,"");
console.log(str);

// 12 task
// Преобразуйте строку 'varTestText' в 'var_test_text'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
var exm = 'varTestText';
var str = '';
for (i=0; i < exm.length; i++){
    if ( exm.charCodeAt(i) >= 65 && exm.charCodeAt(i) <= 90 || exm.charCodeAt(i) >= 1040 && exm.charCodeAt(i) <= 1071){
        str = str + "_" + exm[i].toLowerCase();
    }
    else {
        str = str + exm[i];
    }
}
console.log(str);

// 13 task
// Дано число, например '12345678'. Отделите пробелом каждую тройку чисел с конца.
// То есть у нас должно получится '12 345 678'. Число, конечно же, может быть любым.
var exm = 12345678;
var str1 = '' + exm;
str1 = str1.split("").reverse();
var str = [];
for ( i = 0; i<str1.length; i++){
        if ( (i+1)%3 === 0){
                str = str + str1[i];
                str = str + " ";
            }
        else {
            str = str + str1[i];
        }
        // console.log(str);
}
str = str.split("").reverse().join("");
console.log(str);
