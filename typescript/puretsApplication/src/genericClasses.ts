interface Quiz{
    name: string,
    type: string,

}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class Sellable<T,> {
    public cart: T[] = [];

    addToCart(products: T) {
        this.cart.push(products)
    }
}

let bundle1 = new Sellable
let courses:Course[]= [
    {
        author: "gu",
        name: "Gutao",
        subject: "Math"
    }
];

bundle1.addToCart(courses[0])
