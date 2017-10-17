//task1
var str = "Have a good day!";
console.log(str);

//task2
var age = 25;
console.log(age);
age = undefined;


//task3
var info = {
    name: "Liza",
    age: 28,
}
console.log(info.name);
console.log(info.age);
var name = info.name;
console.log(name);
delete info.name;
console.log(name);

//task4
var customArray = [1,5,8];
console.log(customArray);
customArray = 0;
console.log(customArray);

//task5
var student = "Liza";
console.log(student);
student = "Liza Belokon";
console.log(student);

//task6
var complex = [];
complex[0] = "My name is:";
complex[1] = 7;
complex[2] = null;
complex[3] = info;
console.log(complex[2]);

//task7
var complexObj = {};
complexObj.name = "Liza";
complexObj.age = 28;
complexObj.friends = ["Sergii","Nastya","Lena"];
complexObj.soc_links = {
    facebook: "facebook.com",
    googlePlus: "google.com",
    };
console.log(`My name is ${complexObj.name}, I am ${complexObj.age} years old,
I have a lot of friends, but the best one is: ${complexObj.friends[0]}. 
You can find me on FB: ${complexObj.soc_links.facebook} or on googlePlus: ${complexObj.soc_links.googlePlus}`);





