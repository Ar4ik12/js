"use strict"

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userValue = Object.keys(user);
for (const value of userValue) {
    console.log(value, ":", user[value])
}

// заменить значение hobby на 'skydiving'
// заменить значение premium на false
// вывести содержимое объекта user в формате: "ключ:значение" используя Object.keys() и for...of