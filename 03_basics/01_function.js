// function sayHello() {
//   console.log("H");
//   console.log("E");
//   console.log("L");
//   console.log("L");
//   console.log("O");
// }

// sayHello()

function addTwoNumbers(num1,num2){
    return num1+num2;
}

const result = addTwoNumbers(3,5);
// console.log("Result :" , result);
// console.log(addTwoNumbers(2,5))
// console.log(addTwoNumbers(3,null));
// console.log(addTwoNumbers(3,'a'));

// function loginUserMessage(username = 'Bhore'). ** set default username value
function loginUserMessage(username){

    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }

    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// const login = loginUserMessage('Bhore');
// console.log(login);

// console.log(loginUserMessage('Bhore'));
console.log(loginUserMessage())
