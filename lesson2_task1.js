//task1
var t = {
    y: 9
};
var number = t.y;
number += 5;
console.log(t.y, number);   // 9, 14 (значение t.y не меняется, к значению переменной number добавляем 5)


//task2
var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2];
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;
}
console.log(number); // 5 (t.y[2] равен 5, выполнение цикла не влияет на значение переменной number)


//task3
var t = 9;
var obj = {
    number: t
};
obj.number++;
console.log(obj.number, t); // 10, 9 (obj.number увеличиваем на единицу, t остается без изменений)


//task4
var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number;
obj.number++;

var str = object1.str;

object1.str.name = "Kolya";

console.log(str, object1.str.number); // Object, 67(значением переменной str вляется обьект object1.str
                                     // поэтому в консоль выведет Object и значение object1.str.number = 67)

//task5

var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: "Kolya"
};

object2.str.number = object2.str.number;

object2.str.number++;

console.log(object2.str.number); // undefined (так как при создании нового свойства object2.str.number
                                // мы присваиваем ему значение несуществуещего свойства)
