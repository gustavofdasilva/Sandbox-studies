"use strict";
// class User { //Classes
//     readonly power:string = "Simple Plan"
//     private token:number = 0
//     constructor(
//         public email: string, 
//         public name: string) {
//     }
//     private deleteToken() {
//     }
//     get getFormatEmail(): string {
//         return this.email+"@gmail.com"
//     }
//     get getToken():number {
//         return this.token
//     }
//     set setToken(value:number) {
//         this.token = value
//     }
// }
// const hitesh = new User("email","name",)
// hitesh.power
// console.log("TOKEN ANTES: ", hitesh.getToken)
// hitesh.setToken = 2
// console.log("TOKEN DEPOIS: ", hitesh.getToken)
// class Admin extends User {
// }
// interface TakePhoto {
//     cameraMode: string,
//     filter: string,
//     burst: number,
// }
// interface Story {
//     createStory():void
// }
// class Instagram implements TakePhoto {
//     constructor(public cameraMode:string, 
//                 public filter: string, 
//                 public burst: number){
//     }
// }
// class Youtube implements TakePhoto, Story {
//     constructor(public cameraMode:string, 
//         public filter: string, 
//         public burst: number,
//         public short: string,){
//     }
//     createStory() {
//     }
// }
