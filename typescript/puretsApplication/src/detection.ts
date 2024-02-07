//Narrowing

function detectTypes(val: number | string) {
    if(typeof val == "string") {
        return val.toLowerCase()
    } 
    return val+3 
}

function provideId(id: string | null) { //be extra cautious when defining the type accepted to return, set, get and manipule values
    if(!id) {
        console.log("Provide a valid id");
        return
    }

    return id.toLowerCase()
}

// IN operator. Narrowing by property included in differents types/interfaces

type Spiderman = {throwWeb: () => void}
type Thor = {throwSparks: () => void}

function heroAttack(hero: Spiderman | Thor) {
    if ("throwWeb" in hero) {
        return "Attacking with web!"
    } 

    return "Attacking with sparks and hammer!"
}

interface User {
    name:string,
    email:string,
}

interface Admin extends User {
    isAdmin: boolean,
}

function isAdminAccount(account: User | Admin) {
    if("isAdmin" in account) {
        return true
    }
    return false
}

//instanceof narrowing. Narrowing "classic" by the type of value

function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString())
    }
    console.log(x)
}

//predictates: AS and IS

type Fish = {
    swin:()=>void
}

type Cat = {
    mew:()=>void
}

// function isFish(animal: Cat | Fish) { // Kinda wrong, it returns a boolean so TypeScript wont identify the Type before exec.
//     return (animal as Fish).swin !== undefined
// }

function isFish(animal: Cat | Fish): animal is Fish { //Using "is" in a boolean function, TS can identify the correct type to show when acessing this function(if true, the value passed will be considered a Fish, if false, will not considered a fish, so in this case, will considered a cat)
    return (animal as Fish).swin !== undefined
}

function getFood(animal: Cat | Fish) {
    if(isFish(animal)) {
        animal
        return "Fish food"
    } else {
        animal
        return "Cat food"    
    }
}

//

interface Circle {
    kind: "circle",
    radius: number,
    
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number,
}

interface Pentagram {
    kind: "pentagram",
    length: number,
    width: number,
}

type Shape = Circle|Square|Rectangle|Pentagram;

function identityShape(shape: Circle | Square | Rectangle) {
    if(shape.kind === "circle") {
        return "Circle: " + shape.radius
    } else if (shape.kind === "square"){
        return "Square: " + shape.side
    } else {
        return "Rectangle: " + shape.width
    }
}

function getArea(shape: Shape) { // Exaustive Checking
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
            const _defaultshape: never = shape // Way to sinalize that not every type of switch was analised. A good pratice;
            return  _defaultshape
            break;
    }
}

