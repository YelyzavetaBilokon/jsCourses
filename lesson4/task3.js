// 1 задание - NOT READY
//
// Напишите функцию которая будет выводить текст на екран: "Как ваше имя?";
// После ввода имя запишите как свойство "name" для ссылки внутри функции this;
//
// Создайте пустой объект и вызовите эту функцию для объекта и просто для окна и посмотрите изменился ли объект,
// и создалась ли переменная name в окне браузера?
//
// 2 задание
//
// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
function sumTo(n) {

    var res = 0;

    for ( var i=1; i <= n; i++){
        res += i;
    }

    return res;

}
console.log(sumTo(4));
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

// 3 задание
// Напишите код, который отсортирует массив объектов people по полю age, для сортировки используем метод массива sort.

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var people = [ vasya , masha , vovochka ];
var newList = [];

function compare(person1, person2) {
    return person1.age - person2.age;
}

people.sort(compare);

for( var i = 0; i < people.length; i++ ) {
    newList.push(people[i].name);
}

console.log(people[0].age) // 6
console.log(newList);

// Выведите список имён в массиве после сортировки.
//
// 4 задание
//
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).
function unique(arr){
    var obj = {};
    for ( var i = 0; i < arr.length; i++ ) {
        var str = arr[i];
        obj[str] = true;
    }

    return Object.keys(obj);
}

console.log(unique(["lol","b","dfd","lol","b","454","454"]));
