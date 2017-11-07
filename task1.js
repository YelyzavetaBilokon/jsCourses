// task form lesson
// if all the conditions true do noting
// else if something is false we should do this:
// evt.preventDefault();

//
// document.querySelector('form').addEventListener('submit', function (evt) {
//
//     var checked = document.querySelector('input[type=checkbox]').checked;
//     var input = document.querySelector('input[type=text]').value;
//     var textArea = document.querySelector('textarea').value;
//
//     if ( checked === true && input !== "" && textArea !== ""){
//         alert("Great!");
//     }
//     else {evt.preventDefault();
//     console.log("Fill in all fields")};
// });


// 1 task
// Write a JavaScript function that accept row, column, (to identify a particular cell)
// and a string to update the content of that cell.
function updateContent(row,column,str) {

    document.querySelectorAll('tr')[row-1].children[column-1].innerHTML = str;
}

updateContent(3,1,"Foo");

// 2 task
//
// Write a JavaScript program to remove selected item from a dropdown list.
//
function removecolor() {
    var sel = document.getElementById('colorSelect');
    sel.remove(sel.selectedIndex);
}

// 3 task
//
// Write a JavaScript program to highlight the bold words with yellow background of the following paragraph, on mouse over on it.
//
function change() {
    this.style.backgroundColor = "yellow";
}
function changeBack() {
    this.style.backgroundColor = "white";
}

var strong = document.getElementsByTagName('strong');
for ( var i = 0; i < strong.length; i++ ){
    strong[i].addEventListener('mouseover', change);
}
for ( var i = 0; i < strong.length; i++ ){
    strong[i].addEventListener('mouseleave', changeBack);
}



// 4 task
//
// Write a JavaScript function to add rows to a table.
function insert_Row() {
    var n = document.getElementsByTagName('tr').length;
    var m = document.getElementsByTagName('td').length;

    var newTr = document.createElement('tr');
    document.getElementById('sampleTable').appendChild(newTr);

    for ( var j = 0; j < m/n; j++ ) {

        var newRow = document.createElement('td');
        newTr.appendChild(newRow);
        newRow.innerHTML = "test";
    }

}

// 5 task - NOT READY
//
// Напишите функцию showNotification(options), которая показывает/скрывает уведомление.
// Элемент уведомление (попап) создайте с помощью html,css и добавьте на страницу, по началу он будет невидимый.
//
// Создайте также 2 кнопки при нажатии на 1 = мы показываем елемент, при нажатии на 2 - скрываем
//
// setTimeout(function () {
//     // тут пишем наш код который покажет наш элемент пользователю
// }, 5000);
// /**
//  * Показывает или прячет уведомление
//  *
//  * @param options.show {boolean} показать.скрыть элемент
//  */
// function showNotification(options) {
//     // ваш код
// }
// Example of usage:
//
// // покажет элемент справа-сверху окна
//     showNotification({
//         show: true
//     });
//
// // прячет элемент
// showNotification({
//     show: false
// });

// // 6 task
//
// На html странице создайте input[type=text].
// Запретите водить в инпут символы a, b, c, d, e.
// Любые другие символы должны вводится.

var input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','key');
document.getElementById('task6').appendChild(input);

var arr = ['a', 'b', 'c', 'd', 'e'];

input.addEventListener('keypress', function () {
    var key = event.key;

    for ( var i = 0; i < arr.length; i++ ){
        if ( key === arr[i] ) {
            event.preventDefault();
        }
    }
});

//
// 7 task - NOT READY
//
// Дан инпут.
// При введени в него числа он должен отделять тройки чисел точкой (по мере ввода).
// Например, если я ввожу число: 1 = без изменений 10 = без изменений 100 = без изменений 1000 = число измениться на 1.000
//
//
// 8 task
//
// На html странице создайте 4 input[type=text]
// Сделайте так, чтобы, в инпут можно было вводить не более 2 символов,
// когда в инпут ввели 2 или более символов, фокус ввода переносился на следующий инпут, и так со всеми остальными.
// Если это полседний инпут фокус переноситься на 1 = если у него длинна символов < 2, или по аналогии на 2-3 и тд.
// Если во всех инпутах длинна символов превишает 2 то тогда мы просто убираем фокус с инпута
// и говорим пользователю через alert("Вы ввели все данные")

var input = document.getElementsByTagName('input');

for ( var i = 0; i < input.length; i++) {
    input[i].addEventListener('keypress', onlyTwo);
}

function onlyTwo() {
        if (this.value.length === 2) {
            event.preventDefault();
            if (this.nextElementSibling !== null && this.nextElementSibling.value.length !== 2 ) {
                this.nextElementSibling.focus();
            }
            else{
                if (input[0].value.length !== 2) {
                    input[0].focus();
                }
                else if (input[1].value.length !== 2) {
                    input[1].focus();
                }
                else if (input[2].value.length !== 2) {
                    input[2].focus();
                }

            }
        }

    if ( input[0].value.length === 2 && input[1].value.length === 2 && input[2].value.length === 2 && input[3].value.length === 2){
        alert("all is filled");
        this.blur();
    }
}


// 9 task
//
// Сделайте два поля ввода, в которые пользователь будет вводить ширину и высоту.
// Сделайте блок, который будет менять свои размеры когда вы будете менять данные в input которые отвечают за ширину и высоту.
//
var width = document.getElementById("width");
var height = document.getElementById("height");
var newElement = document.createElement("textarea");

document.body.appendChild(newElement);

width.addEventListener("keypress", changeW);
height.addEventListener("keypress", changeH);


function changeW() {
    newElement.style.width =`${width.value}px`;
}

function changeH() {
    newElement.style.height =`${height.value}px`;
}


//
// 10 task - Almost ready (need to add checking for cells in a row)
//
// Дана таблица произвольного размера.
// По нажатию на ячейку таблицы эта ячейка красится красным фоном ("активируется").
// Сделайте так, чтобы, если активировано 5 ячеек подряд по горизонтали или по вертикали,
// таблица блокировалась (то есть нельзя больше будет активировать ячейки) и выводилось сообщение "завершение активаций".

var tableAll = document.querySelectorAll("td");
var marker = false;

for ( var i = 0; i < tableAll.length; i++ ){
    var tableCell = document.querySelectorAll("td")[i];
    tableCell.addEventListener("click", colorCell);
}

function colorCell() {
    if ( marker === false ){
        this.style.backgroundColor = "red";
    }
    else {return 0;}

    var trAll = document.querySelectorAll('tr');
    var cellCount = document.querySelectorAll('tr')[0].children.length;

    for ( var j = 0; j < trAll.length; j++ ) {

        var arr = [];
        var tdAll = document.querySelectorAll('tr')[j].children;

        for ( var i = 0; i < cellCount; i++ ) {
            if (( tdAll[i].style.backgroundColor === "red" ) === true) {
                arr.push('1');
            }
        }

        if ( funcSum(arr) === 5){
            marker = true;
            console.log("the end!");
            break;
        }
    }


    for ( var t = 0; t < cellCount; t++ ){
        var arrCol = [];

        for ( var r = 0; r < trAll.length; r++ ){
            if (( trAll[r].children[t].style.backgroundColor === "red" ) === true) {
                arrCol.push('1');
            }
        }
        if ( funcSum(arrCol) === 5){
            marker = true;
            console.log("the end!");
            break;
        }
    }
}

function funcSum(array) {
    var result = 0;
    for ( var y = 0; y < array.length; y++){
        result += +array[y];
    }
    return result;
}


// 11 task
//
// Дан инпут. В него разрешено вводить N символов.
// При введение текста справа появляется счетчик такого типа - "Осталось ввести 10 символов".
// После того, как предел достигнут - текст все равно разрешено вводить, только надпись будет типа "Лимит превышен на 10 символов".
// Вместо 10-ти, конечно же, число в вашем конкретном случае.
var inputN = document.getElementById("maxN");
var textL = document.getElementById("limitText");
inputN.addEventListener("keypress", maxNumber);

function maxNumber() {
    var n = 10;

    if ( this.value.length < n){
        var i = n - this.value.length-1;
        textL.innerText = `${i} symbols remain`;
    }
    else {
        textL.innerText = "Limit is reached!";
    }
}