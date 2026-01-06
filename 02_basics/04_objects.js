//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123bfc"
tinderUser.name = "bhore"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
      userFullname :  {
        first_name : "Ankit",
        last_name : "Bhore"
        }
    }
}

// console.log(regularUser.fullname?.userFullname.first_name);

const obj1 = { 
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}
const obj3 = {obj1,obj2}
const obj3
console.log(obj3);

