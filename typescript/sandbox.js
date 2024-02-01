"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello World!";
var num = 4;
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
signUpUser("2", "", "", 4);
getUpper("d");
addThree(2);
addTwo(5);
console.log(greetings);
