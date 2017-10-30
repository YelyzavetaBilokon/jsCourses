// 1 task
//
// Опишите как выглядит структура дом дерева в файле index.html
//
// 2 task
//
// Read about done types: https://www.w3schools.com/jsref/prop_node_nodetype.asp
//
// Возле каждого узла ДОМ элемента укажите тип этого узла
//
// 3 task
//
// Выведите количество тегов form на странице
var el = document.getElementsByTagName('form');
console.log(el.length); // 4
//
// 4 task
//
// Выведите количество дочерних элементов у тега form#main
var em = document.getElementById('main').children;
console.log(em.length); // 3

//
// 5 task
//
// Read first: https://developer.mozilla.org/ru/docs/Web/API/Element/tagName
// Проверьте является ли form#main дочерним элементом для тега body

var cl = document.body.children;
console.log(cl);

// 6 task
//
// Закрасьте body документа в зеленый цвет
document.body.style.backgroundColor = "green";

// 7 task

// Закрасьте body документа в черный цвет, а цвет текста сделайте белым)
document.body.style.backgroundColor = "black";
document.body.style.color = "white";


// 8 task
//
// Выведите через консоль background цвет body и цвет текста через запятую. Используйте встроенные JS методы
console.log(document.body.style.backgroundColor +',' + document.body.style.color);