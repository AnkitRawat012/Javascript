let num1 = 5;
let num2 = 8;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("Nope , num1 is not greater");
}

console.log("I am regular bottom code");

// Checking if a string is equal to another string:

let user_name = "Bhore";
let another_user_name = "Bhore";
if (user_name == another_user_name) {
  console.log("Pick another user name");
}
else{
    console.log("You can pick this username");
    
}

// Checking if a variable is a number or not:

let score = 44
if(typeof score === 'number'){
    console.log("Yep , this is a number");
    
}else{
    console.log("No this is not a number");
    
}

// checking if a boolean value is true or false:

let isTeaReady = true
if(isTeaReady){
    console.log("Tea is Ready");
    
}else{
    console.log("Tea is not Ready");
    
}

// Checking if an array is empty or not:

let item = ['item']

if(item.length === 0){
    console.log("Is a Empty Array");
    
}else{
    console.log("Not a Empty Arrray");
    
}