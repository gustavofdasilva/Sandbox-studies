const names: Array<string> = ["g","h,","i"]
const score: Array<number> = []

function IdentityOne(value: boolean): boolean { //WRONG
    return true
}

function IdentityTwo(val: any):any { //WRONG
    return val
}

function IdentityThree<Type/*this "Type", is like a variable that gets the type of the value thats gonna be passed when calling the function*/>(val: Type):Type { //RIGHT, how generics works->
    return val
}

function IdentityFour<T>(val: T): T { //"Shortcut"
    return val
}

interface Bootle{
    brand: string,
    type: number,
}

//IdentityFive<Bootle/*When refering a interface, we need to use it exactly name*/>({})

function IdentitySix<Type>(val: Type[]) : Type {
    return val[0]
}

const getSearchProducts = <Type>(val: Type[]): Type => { //Using generics with arrow functions
    return val[2]
}

interface Database {
    connection: string,
    username: string,
    password: string,
}

function dualGenerics<T, U extends Database/**/>(valOne: T, valTwo: U):object {
    return {valOne, valTwo}
}

dualGenerics(3, {
    connection:"",
    username:"",
    password:"",    
})
