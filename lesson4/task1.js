// 1 задание
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
//Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
//
// P.S. Код также должен легко модифицироваться для любых других интервалов.
var x = 2;
var y = 10;
    if ( x > 1 ) {
        labelContinue:
            for (i = x; i <= y; i++) {
                for (j = 2; j < i; j++) {
                    if (i % j === 0) {continue labelContinue;}
                }
                console.log(i);
            }
    }

// 2 задание
// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var objArr = obj.className.split(' ');
    cls = cls.trim();
    if ( objArr.find(function(str){return str == cls;}) == cls ){
    }
    else {
        obj.className = Object.values(obj) + ' ' + cls;
    }
}
addClass(obj, 'new');// obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'
alert( obj.className ); // "open menu new me"

// P.S. Ваша функция не должна добавлять лишних пробелов.

// 3 задание
// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
    var obj = {
        className: 'open menu'
    };
function removeClass(obj, cls) {
    var objArr = obj.className.split(' ');
    cls = cls.trim();
    if ( objArr.find(function(str){return str == cls;}) == cls ){
        var ind = objArr.indexOf(cls);
        objArr.splice(ind,1);
    }
    obj.className = objArr.join(' ');
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
alert(obj.className);

// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

    obj = {
        className: 'my menu menu'
    };

function removeClass(obj, cls) {
    var objArr = obj.className.split(' ');
    cls = cls.trim();
    for ( i = 0; i <objArr.length; i++ ){
        if ( objArr.find(function(str){return str == cls;}) == cls ){
            var ind = objArr.indexOf(cls);
            objArr.splice(ind,1);
        }
    }
    obj.className = objArr.join(' ');

}

removeClass(obj, 'menu');
alert( obj.className ); // 'my'

// Лишних пробелов после функции образовываться не должно.


// 4 задание
//
// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива когда ввод прекращен.
var arr = [];
var result = 0;
function isNumber(arg) { return !isNaN(arg) }
do {
    var pr = prompt("Type number");
    if (pr != null) {pr = pr.trim()}

    var cond = isNumber(pr) && pr != "" && pr != null;
    // впринцыпе вместо этого сравнения можно было бы сравнить typeof pr === "number" и тогда это число и с ним можно дальше работать )
    if ( cond == true ){
        // можно просто написать if(cond)
        arr.push(pr);
        result = result + +pr;
    }
}
while (cond != false);
console.log(result);

// 5 задание
//
// Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2).
// В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.
//
// Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
function fib(n) {
    var a = 1;
    var b = 1;
    for ( i = 3; i<=n ; i++){
        var c = a+b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(3)); //2
console.log(fib(7)); //13
console.log(fib(77)); //5527939700884757
//------------------------------------------------
// 6 задание
// Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
// Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'
function stringCheck(str){
    var n = 20;
    if (str.length > n){
        var result = str.slice(0,n) + "...";
    }
    else {
        result = str;
    }
    return result;

}
console.log(stringCheck('я учу javascript и у меня получается!'));
// точно получается)

// 7 задание
// Напиште код который выведет сотрудника который выполнил больше всех задач.
//     Например:

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var maxValue = Math.max.apply(null, Object.values(tasksCompleted));
for (property in tasksCompleted) {
    var PropValue = tasksCompleted[property];
    if ( PropValue === maxValue){
        console.log(property);
    }
}
