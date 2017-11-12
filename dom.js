// 1 task
//
// Add remove on li element on click on remove link.
// On click on button please add a new element with right index text
// (eg: if there are 3 elements, the new one should be Element 4)

var addButton = document.getElementsByClassName('btn btn-success')[0];
addButton.addEventListener('click', addLi);
removeLi();

function addLi() {
    var counter = document.getElementsByTagName('li').length;
    counter++;
    var li = document.createElement('li');
    var ul = document.getElementsByClassName('list-unstyled')[0];
    li.innerHTML = 'Element '+ counter;
    var a = document.createElement('a');
    a.setAttribute('class','glyphicon glyphicon-remove');
    a.setAttribute('href','#');
    ul.appendChild(li);
    li.appendChild(a);
    removeLi();
}

function removeLi() {
    var removeButton = document.getElementsByClassName('glyphicon glyphicon-remove');
    for ( var i = 0; i < removeButton.length; i++ ){
        removeButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }
}


// 2 task
//
// If persons click button add User please check the form inputs,
// they all are required and should be not empty, if something is empty give user info about it
// (add div after button with text please follow all the fields, and add red border to all the fields that are empty)
// After 3 seconds delete the info div from page
//
// If user clicks the button and all fields is not empty, push the new User to UserArray variable,
// and in block Users print the result fields with new user description, then clear all fields

var addUserButton = document.getElementsByClassName('btn btn-warning')[0];
addUserButton.addEventListener('click', emptyOrNot);

function emptyOrNot() {

    var formFields = document.getElementsByClassName('form-control');
    var marker;

    for ( var i = 0; i < formFields.length-1; i++ ){
        if ( formFields[i].value === ''){
            formFields[i].style.borderColor = "red";
            marker = true;
        }
        else {
            formFields[i].style.borderColor = "lightgrey";
        }
    }

    if (marker && document.getElementById('errorMessage') === null) {
        addErrorMessage();
        removeErrorMessage();
    }

    if (formFields[0].value !== '' && formFields[1].value !== ''){
        addUser();
        clearFields();
    }
}

function addErrorMessage() {

    var errorMes = document.createElement('div');
    errorMes.innerHTML = "Please fill in all fields";
    errorMes.style.color = "red";
    errorMes.setAttribute('id','errorMessage');
    document.getElementsByClassName('container')[1].insertBefore(errorMes, document.getElementsByTagName('hr')[0]);
}

function removeErrorMessage() {

    var errorMessage = document.getElementById('errorMessage');
    setTimeout('errorMessage.remove()', 3000);
}

function addUser() {

    var newUser = {
        userName: document.getElementsByClassName('form-control')[0].value,
        userAge: document.getElementsByClassName('form-control')[1].value,
        userGender: document.getElementsByClassName('form-control')[2].value
    };
    document.getElementById('usersList').innerHTML += `<br> User name is: ${newUser.userName}, age: ${newUser.userAge}, gender: ${newUser.userGender}`;
}

function clearFields() {
    document.getElementsByClassName('form-control')[0].value = '';
    document.getElementsByClassName('form-control')[1].value = '';
    document.getElementsByClassName('form-control')[2].value = 'male';
}

