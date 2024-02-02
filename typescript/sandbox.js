"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello World!";
var num = 4;
// functions -->
function addTwo(num) {
    return num + 2;
}
var addThree = function (num) {
    return num + 3;
};
function getUpper(value) {
    return value.toUpperCase();
}
function signUpUser(name, email, password, pin) {
    if (pin === void 0) { pin = 0; }
}
function getValue(value) {
    if (value > 5) {
        return true;
    }
    else {
        return "200 OK";
    }
}
signUpUser("2", "", "", 4);
getUpper("d");
addThree(2);
addTwo(5);
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(greetings);
function returnUser(user) {
    return user;
}
returnUser({
    name: "Gustavo",
    email: "gu@gmail.com",
    isPaid: true,
});
