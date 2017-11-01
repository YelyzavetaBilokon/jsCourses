// task 1
// Please find all inputs using 4 DOM methods, e.g. getElementsByTagName and etc.

document.getElementsByTagName('input');
document.getElementsByClassName('form-control');
document.querySelectorAll('input');

// task 2
// Clone the last block with label and input
// (using cloneNode JS DOM method: https://developer.mozilla.org/ru/docs/Web/API/Node/cloneNode)
// and add the this block (.input-group) to the end of form before button, but first change label text to Age

var par = document.getElementsByClassName("input-group col-xs-12 marg")[1];
var cloned = par.cloneNode(true);

var button = document.querySelector('button');
document.querySelector('form').insertBefore(cloned, button);

var label = document.querySelectorAll('label')[2];
label.innerHTML = 'Age';

// task 3
// Add class 'input-lg' to all inputs on the page, including new created
var inputs = document.querySelectorAll('input');

for ( var i = 0; i < inputs.length; i++){
    document.querySelectorAll('input')[i].setAttribute('class','input-lg');
}

// task 4
// Add to each input unique id, e.g. 'age' for age field and etc.,
// and to the label that is upper add 'for' attribute with the same value as id
for ( var i = 0; i < inputs.length; i++){
    var id = document.querySelectorAll('label')[i];
    var idName = id.innerHTML.toLowerCase();
    document.querySelectorAll('input')[i].setAttribute('id',idName);
    document.querySelectorAll('label')[i].setAttribute('for',idName);
}

// task5
// Add placeholders for each input, e.g. for 'age' field, 'Please enter your age'
for ( var i = 0; i < inputs.length; i++){
    var id = document.querySelectorAll('label')[i];
    var idName = id.innerHTML.toLowerCase()
    document.querySelectorAll('input')[i].setAttribute('placeholder','Please enter your ' + idName);
}

// task6
// Please add this last block before submit button using JS
var html = [
    '<div class="input-group col-xs-12 marg">',
    '<label for="">Gender</label>',
    '<select class="form-control">',
    '<option value="male">Male</option>',
    '<option value="female">Female</option>',
    '</select>',
    '</div>'
].join('');

var div = document.createElement('div');
div.innerHTML = html;
document.querySelector('form').insertBefore(div, button);