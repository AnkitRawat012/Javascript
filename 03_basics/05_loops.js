const arr = [1,2,3,4,5]

for (const index in arr){
    console.log(arr[index])
}

// for (const val of arr) {
//     console.log(val)
// }

// const greetings = 'Hello World'

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('FR','France')
map.set('FR','France')

// console.log(map);

/* 
for (const key of map) {
    console.log(key)
}  
*/
// for (const [key,value] of map) {
//     console.log(key , ' :- ' , value)
// }

const myObj = {
    'game1' : 'GTA V',
    'game2' : 'BGMI',
    'game3' : 'PUBG',
    'game4' : 'Roblox'
}

// for (const [key,value] of myObj) {   ++ for of loop is not iterate to the objects
//     console.log(key)
// }

// for(const key in myObj){
//     console.log(key, ' :-' ,myObj[key])
// }