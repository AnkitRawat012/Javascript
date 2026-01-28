const user = {
    username : "Ankit",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Manthan"
// user.welcomeMessage()

// console.log(this); // **** In node this -> empty object 

// function chai(){
//     let user_name = 'Ankit';
//     console.log(this.user_name);
// }

// chai()

// const chai = function(){

//     let user_name = 'Ankit';
//      console.log(this.user_name);

// }

// chai()

 const chai = () => {

    let user_name = 'Ankit';
     console.log(this.user_name);

}

// chai()

const add_two = (num1,num2) => {
    return num1 + num2
}
const addTwo = (num1,num2) => num1+num2; //Implicit return
const addtwo = (num1,num2) => (num1+num2);

// Object ko return kerne ke liye hum prenthisis ka use kerte hai ()
const add__Two = (num1,num2) => ({username: "Ankit"})
console.log(addTwo(3,4))
