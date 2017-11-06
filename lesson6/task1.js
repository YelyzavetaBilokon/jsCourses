// 1 задание
//
// Создать функцию которая будет создавать html таблицу с цветом фона подобным шахматной доске.
//
// Функция будет принимать три аргумента:
//
// fcolor – первый цвет таблицы
// scolor – второй цвет ячеек таблицы
// contents – массив, содержимое которого может выводиться в таблице.
// для закрашивания цветом ячейки воспользуйтесь своством style.backgroundColor,
// например document.body.style.backgroundColor = 'red' закрасит цвет body в красный цвет то же самое и для ячейки
//
function colorTable(fcolor,scolor,contents) {

    var tb = document.createElement('table');
    document.body.appendChild(tb).style.backgroundColor = fcolor;
    var k = 0;

    for ( var i = 0; i < 2; i++){

        var tr1 = document.createElement('tr');
        tb.appendChild(tr1);

        for ( var j = 0; j < 3; j++){

            var td1 = document.createElement('td');

            if ( j%2 == 0 && i%2 == 0 || j%2 != 0 && i%2 != 0){
                tr1.appendChild(td1).style.backgroundColor = scolor;
            }
            else{tr1.appendChild(td1)};

            td1.innerText = contents[k];
            k++;

        }
        k =+ 3;
    }
}

console.log(colorTable("pink","green",["abc","bcd","kls","kjf","kjh","sdd"]));

// 2 задание
//
// Напишите функцию которая вовращает html код таблицы размером NхM.
//
// Каждая ячейка будет заполняться случайной буквой русского алфавита и случайным цветом фона
//
// P.S. Для выполнения задания, воспользуйтесь методом random() объекта Math;
// кроме того создайте массив в элементами – буквами алфавита)

var rus = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
var colors = ['lightcyan','indigo','yellow','red','greenyellow','blue','pink'];

function randomTable(n,m) {
    var tb = document.createElement('table');
    document.body.appendChild(tb);

    for ( var i = 0; i < n; i++){

        var tr1 = document.createElement('tr');
        tb.appendChild(tr1);

        for ( var j = 0; j < m; j++){

            var td1 = document.createElement('td');
            tr1.appendChild(td1).style.backgroundColor = colors[(Math.floor(Math.random() * colors.length))];
            td1.innerText = rus[(Math.floor(Math.random() * 26))];

        }
    }
}

console.log(randomTable(5,6));
//
// 3 task
//
// Here is a sample html file with a submit button.
// Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
//
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//     </head>
//     <body>
//     <p>
//     <a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="http://www.w3resource.com/">w3resource</a>
//     </p>
//     </body>
//     </html>

function findAttributes() {
    // можно было сохранить document.getElementById('w3r') в переменную а потом уже брать у нее атрибуты

    var href = document.getElementById('w3r').getAttribute('href');
    var hreflang = document.getElementById('w3r').getAttribute('hreflang');
    var rel = document.getElementById('w3r').getAttribute('rel');
    var target = document.getElementById('w3r').getAttribute('target');
    var type = document.getElementById('w3r').getAttribute('type');

    console.log(href);
    console.log(hreflang);
    console.log(rel);
    console.log(target);
    console.log(type);

}

console.log(findAttributes());

// 4 task
//
// Here is a sample html file with a submit button. Modify the style of the paragraph text through javascript code.
//
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//     <title>JS DOM paragraph style</title>
// </head>
// <body>
// <p id ='text'>JavaScript Exercises - w3resource</p>
// <div>
// <button id="jsstyle"
// onclick="js_style()">Style</button>
//     </div>
//     </body>
//     </html>

document.getElementById('text').style.backgroundColor = 'red';
document.getElementById('text').style.fontSize = "xx-large";
document.getElementById('text').style.border = "thick dotted green";


// 5 задание
//
// Придумайте самый короткий код для проверки, пуст ли элемент elem. «Пустой» — значит нет дочерних узлов, даже текстовых.
// Что написать в условии if ?

if ( document.getElementById('elem').children.length === 0 )  {
    console.log("node is empty");
}

// 6 задание
//
// Напишите функцию createElementInBlock(blockLink, elementName) которая будет создавать элемент в блоке elementName
// (это может быть любой элемент селектор существующего блока на странице)
//
// P.S. Эта функция должна проверять наличие элемента в этом блоке,
// если он уже там есть второй раз она его добавлять не будет!
function createElementInBlock(blockLink, elementName) {
    var a = document.createElement(elementName);
    var b = document.querySelector(blockLink);

    for ( var i = 0; i < b.children.length-1; i++ ){

        if ( b.children[i].toString() != a.toString()){
            b.appendChild(a);
        }
    }
}

createElementInBlock('body', 'div');
createElementInBlock('body', 'a');

//     7 задание
//
// Создайте функцию createCloneNode(block) которая которая будет клонировать передаваемый ей элемент и добавять его в конец страницы!
//
// P.S.: Для клонирование элемента используйте метод cloneNode (в презентации есть примеры)

function createCloneNode(block) {

    var first = document.createElement(block);
    first.innerHTML = "Yahooo";
    document.body.insertBefore(first, document.body.firstChild);

    var second = first.cloneNode(true);
    second.innerHTML = "Second yahooo";
    document.body.appendChild(second);
}

createCloneNode('p');

//
// 8 задание
//
// Создайте функцию addChildrenTo(block, count, type)
// которая будет создавать внутри block count количество детей типа type
// ( type это будет тип блока например 'span, ul, li, div' и т.д. )

function addChildrenTo(block, count, type){

    var bl = document.createElement(block);
    document.body.appendChild(bl);

    for ( var i = 0; i < count; i++){
        var createCl = document.createElement(type);
        bl.appendChild(createCl);
    }
}

addChildrenTo('div', 5, 'span');
//
// 9 задание
//
// Напишите функцию replaceElBy(blockCurrent, blockToReplace) которая будет заменять
// blockCurrent на blockToReplace и выводить сообщение пользователю после успешного проведения операции!

function replaceElBy(blockCurrent, blockToReplace){

    var blockCur = document.createElement(blockCurrent);
    document.body.appendChild(blockCur);

    var blockRep = document.createElement(blockToReplace);
    document.body.appendChild(blockRep);

    blockCur.replaceWith(blockRep);
    console.log("Successful replacing");

}

replaceElBy('div', 'p');
//
// 10 задание
//
// Создайте пару элементов с классом 'www'.
// Добавьте каждому элементу в название класса еще дополнительно название его тега в нижнем регистре.
//
var elem1 = document.createElement('div');
document.body.appendChild(elem1);
elem1.setAttribute('class', 'www');
var tagName = elem1.tagName.toLowerCase();
// тут ты добавляешь класс www зачем его добавлять перед этим лишний операции с ДОМ не нужны
elem1.setAttribute('class', 'www ' + tagName);


var elem2 = document.createElement('span');
document.body.appendChild(elem2);
elem2.setAttribute('class', 'www');
var tagName2 = elem2.tagName.toLowerCase();
elem2.setAttribute('class', 'www ' + tagName2);

// 12 task
//
// Создайте ol. Вставьте ему в конец li с текстом 'пункт'.
var ol = document.createElement('ol');
document.body.appendChild(ol);
var n = 5;
for ( var i = 0; i < n; i++){
    var li = document.createElement('li');
    // лучше извне цикла обьявить ol = document.querySelector('ol') чтобы каждый раз оно его не искало он же у тебя один и в цикле не меняется
    document.querySelector('ol').appendChild(li);
    if ( i+1 == n){
        li.innerHTML = i+1;
    }
}
//
//
// 13 task
//
// Создайте функцию которая принимает массив с элементами,
// создайте на странице список ul и выведите все элементы массива в отдельный элемент списка li&

function showArray(arr){
    var ul = document.createElement('ul');
    document.body.appendChild(ul);

    for ( var i = 0; i < arr.length; i++){
        var li = document.createElement('li');
        document.querySelector('ul').appendChild(li);
        li.innerHTML = arr[i];
    }
}

showArray([1,4,"abc","sff"]);

// 14 task - NOT READY
//
// Покрасьте все буквы текста в заданном элементе в разные случайные цвета.
// Список цветов должен хранится в массиве.
// Две соседние буквы не должны иметь одинаковый цвет.
var el = document.createElement('p');
document.body.appendChild(el).innerText = "Random colors";
var strEl = el.innerText;

var colors = ['lightcyan','indigo','yellow','red','greenyellow','blue','pink'];
var ranCol = colors[(Math.floor(Math.random() * colors.length))];

el.style.color = ranCol;

for ( var i = 0; i < strEl.length; i++){
    strEl[i].style.color = ranCol;
};

//
// 15 task - DUPLICATE of 14
//
// Покрасьте все буквы текста в заданном элементе в разные случайные цвета.
// Список цветов должен хранится в массиве.
// Две соседние буквы не должны иметь одинаковый цвет.
