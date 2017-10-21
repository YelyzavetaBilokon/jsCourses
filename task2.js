// task1
// Выведите столбец чисел от 1 до 50.
for (i=1; i<=50; i++){
    console.log(i);
}

// task2
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
var arr = [1, 2, 3, 4, 5];
for (i=0; i<=4; i++){
    console.log(arr[i]);
}

// task3
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
var arr = [2, 3, 4, 5];
var result = 1;
for (i=0; i<=3; i++){
    result *= arr[i]
}
console.log(result);

// task4
// Дан объект obj с ключами 'Минск', 'Москва', 'Киев' и значениями соответственно: 'Беларусь', 'Россия', 'Украина'.
// С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
var city = {
    minsk: "belarus",
    moskva: "russia",
    kiev: "ukraine"
};
for (var cityCountry in city){
    console.log(`${cityCountry} - this is ${city[cityCountry]}`);
}

// task5
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
// Посчитайте количество итераций, необходимых для этого (итерации - это количество проходов цикла), и запишите его в переменную num.
var n = 1000;
var num = 0;
do {
    n /=2;
    num++;
}
while (n>=50);
console.log(n);
console.log(num);

// task6
// Дан массив с элементами 2, 5, 9, 15, 0, 4.
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
var array = [2, 5, 9, 15, 0, 4];
for (i=0; i<array.length; i++){
    if (array[i]>3 && array[i]<10){
        console.log(array[i]);
    }
}

// task7
// Составьте массив месяцев. С помощью цикла for выведите все месяцы, а текущий месяц выведите жирным.
// Текущий месяц должен храниться в переменной month.
var mon = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var date = new Date();
var month = date.getMonth();
for (i = 0; i <= mon.length; i++){
    if (i != month){
        console.log((mon[i]));
    }
    else {
        console.log('%c%s', 'font: bold 1.3em/1 Arial', mon[i]);
    }
}
