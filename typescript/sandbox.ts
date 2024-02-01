let greetings: string = "Hello World!";
let num: number = 4

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

export {}