let greetings: string = "Hello World!";
let num: number = 4


// functions -->
function addTwo(num: number): number{
     return num + 2 
}

const addThree = (num: number):number => {
     return num+3
}

function getUpper(value: string) {
     return value.toUpperCase()
}

function signUpUser(name: string, email: string, password: string, pin: number = 0) {}

function getValue(value: number): string | boolean {
     if(value > 5) {
          return true
     } else {
          return "200 OK"
     }
}

signUpUser("2","","",4)
getUpper("d")

addThree(2)

addTwo(5)

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero) : string=>{
     return `hero is ${hero}`
})

console.log (greetings);

//Objects ->


type User = { // Creating a type (Type Aliases)
     readonly id: string, // <-- readonly (not changable)
     name: string,
     email: string,
     isPaid: boolean,
     credDetails?: number, //<---- optional param
}

const allUsers: User[] = []

function returnUser(user : User):User {
     return user
}


returnUser({
     id: "2333",
     name: "Gustavo", 
     email: "gu@gmail.com",
     isPaid: true,
})

type cardNumber = {
     cardnumber: string
}

type cardDate = {
     carddate: string
}

type cardSecNumber = {
     cardsecnum: string
}

type CardDetails = cardNumber & cardDate & cardSecNumber // <-- Union types (AND operator)

let card2: CardDetails = {
     cardnumber: "2332 2342 2345 2532",
     carddate: "20270810",
     cardsecnum: "234"
}

// Arrays -->

type Colors=[
     [red: number, green: number, blue: number]
]

let colorDb: Colors = [[0,0,0]]

colorDb.push([244,244,255])
colorDb.push([125,234,231])

// Union -->
let score: number | string = 44
type UserAccount = {
     name: string,
     id: number
}
type AdminAccount = {
     username: string,
     id: number
}

let user: UserAccount | AdminAccount = {
     id: 293,
     username:"Gu",
}

function getDb (id: number | string) {
     if( typeof id === "string") {
          id.toUpperCase()
     } else {
          id+ 2
     }
}

const data: (number | string)[] = [1,2,3,"4"] // Union in array (can be either number or string, mixing both of them)
const data1: number[] | string[] = [1,2,3,4] // "Union" in array (can be either ONLY numbers or ONLY strings)
const data2: number[] | string[] = ["1","2","3","4"] // "Union" in array (can be either ONLY numbers or ONLY strings)

//selecting exact values to a variable -->>
type Combo = {
     size: "small" | "medium" | "large",
     icecream: "chocolate" | "strawberry" | "vanilla",
     promo: boolean 
}

let delivery: Combo[] = [
     {
          size:"medium",
          icecream:"strawberry",
          promo:false,
     },
     {
          size:"large",
          icecream:"strawberry",
          promo: true,
     }
]





export {}