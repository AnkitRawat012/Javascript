// singleton 
Object.create // when we create object by constructor then this is singleton

// object literals ("{}" this is literal)

// create object by using literals is not singleton

const mySumbol = Symbol("key1")

const JsUser = {
    name: "Bhore",
   // "full name": Gaming,
    [mySumbol]: "mykey1",
    age : 20,
    location : "Pune",
    Email : "csaiml@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ['Monday', 'Saturday']    
}

console.log(JsUser.Email); // how to access objects

console.log(JsUser["Email"]);
// console.log(JsUser["full name"]);
console.log(typeof JsUser[mySumbol]) // when we Directly use symbols in object the the typeof that symbol is string  like mysymbol : key1.

// we use symbol as a symbol then declare symbol using [mysymbol] : key1 inside the object 


JsUser.Email = "hero@gmail.com"

// Object.freeze(JsUser)
JsUser.Email = "herozero@gmail.com"
//console.log(JsUser.Email)
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
    
}



console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
