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
// const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2) // Object.assign(target {},source obj1 , obj2 and so no)

const obj3 = {...obj1 , ...obj2} // using spread to combine objects
// console.log(obj3);

const user = [
    {
        id: 1,
        email : "ac@gmail.com"
    },
    {
        id: 2,
        email : "nc@gmail.com"
    }
]

// console.log(user[0].email)

// console.log(Object.keys(tinderUser)); // object.keys return array of keys
// console.log(Object.values(tinderUser)); // object.value return arry of values
// console.log(Object.entries(tinderUser)); // 

// console.log(tinderUser.hasOwnProperty('isLogged'))


const course = {
    coursename: "DSA in hindi",
    price : "999",
    courseInstructor : "Bhore"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // object destructure

console.log(instructor);

// {
//     name : "Bhore",
//     coursename : "DSA in hindi",
//     price : "free"

[
    {},
    {},
    {}
]

// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }


