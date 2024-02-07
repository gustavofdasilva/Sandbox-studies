"use strict";
//Narrowing
function detectTypes(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Provide a valid id");
        return;
    }
    return id.toLowerCase();
}
function heroAttack(hero) {
    if ("throwWeb" in hero) {
        return "Attacking with web!";
    }
    return "Attacking with sparks and hammer!";
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return true;
    }
    return false;
}
//instanceof narrowing. Narrowing "classic" by the type of value
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    console.log(x);
}
// function isFish(animal: Cat | Fish) { // Kinda wrong, it returns a boolean so TypeScript wont identify the Type before exec.
//     return (animal as Fish).swin !== undefined
// }
function isFish(animal) {
    return animal.swin !== undefined;
}
function getFood(animal) {
    if (isFish(animal)) {
        animal;
        return "Fish food";
    }
    else {
        animal;
        return "Cat food";
    }
}
function identityShape(shape) {
    if (shape.kind === "circle") {
        return "Circle: " + shape.radius;
    }
    else if (shape.kind === "square") {
        return "Square: " + shape.side;
    }
    else {
        return "Rectangle: " + shape.width;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            break;
        case "square":
            break;
        case "rectangle":
            break;
        case "pentagram":
            break;
        default:
            const _defaultshape = shape; // Way to sinalize that not every type of switch was analised. A good pratice;
            return _defaultshape;
            break;
    }
}
