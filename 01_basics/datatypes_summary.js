// Primitive datatype // it is call by value
// 7 types : Strings,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 123345354546n



// Reference(Non Primitive)
//Arrays , Objects , functions

const heros = ['krish','naagraj','doga','Bhore']

let myObj = {
    name: "Ankit",
    age: 2,
}

const myfunction = function(){
    console.log("Hello Bhore")

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive) 

let myYoutubename = "Bhore"
let anothername = myYoutubename

anothername = "BhoreGaming"


console.log(myYoutubename)
console.log(anothername)

let userOne = {
    Email: "user@google.com",
    upi: "user@pthdf"
}

let userTwo = userOne

userTwo.Email = "ankit@google.com"

console.log(userOne.Email);
console.log(userTwo.Email);
