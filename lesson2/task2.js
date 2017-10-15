//task1
// Определите результат и тип переменных в следующих случаях:

var r = '9' + 0; // 90 string
var r = 9 + '0'; // 90 string
var r = 4 + 9; //13 number
var r = null + 7; // 7 number
var r = '6' + null; // 6null string
var r = '6' + []; // 6 string
var r = '6' + null; // 6null string


//task2
// Будет ли верным выражение. Опишите почему да или нет?
2/3 + 1 + 1/3 == 2
// Нет, так как в левой части уравнения получаем 1.9999999999999998, что не равно 2


//task3
// Определите результат в следующих случаях:
var r = 6 && 0 && 7; // 0
var r = -9 && -8; // -8
var r = 6 && 0 && 7; // 0
var r = "string" && 0; // 0
var r = [] && {} && 7; // 7
var r = [] || 7; // []
var r = {} || 0; // {}
var r = false || true; //true
var r = "2" > "3"; //false
var r = "ab" <= "fg"; // true
var r = "2k" <= "8l"; // true
var r = "2" != 2; // false
var r = "2" !== 2; // true
var r = ++2 + 2; // 5
var r = ++2 + 2--; // 5
var r = 1++ - 2--; // -1
