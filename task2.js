// Опеределить на какой контекст будет ссылатся this в результате выполнений следующих примеров
//
//
function isContextEqualTo(contextLink) {
    console.log(contextLink === this);
}

function name() {
    isContextEqualTo(window); // window
}

var name = "Vasya";

var user = {
    getName: function () {
        isContextEqualTo(window); // object
        isContextEqualTo(user); // object
    }
}
console.log(user.getName()); // object

var getName = user.getName;

console.log(getName()); // window

user.getName = name;

console.log(user.getName()); // window

user.getName.call(window); // window

