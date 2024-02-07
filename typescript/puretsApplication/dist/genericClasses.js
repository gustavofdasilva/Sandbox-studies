"use strict";
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
let bundle1 = new Sellable;
let courses = [
    {
        author: "gu",
        name: "Gutao",
        subject: "Math"
    }
];
bundle1.addToCart(courses[0]);
