const name = "Ankit"
const repoCount = 50

// console.log(name + repoCount + "Value"); // outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Modern syntax for string which is called string Interpolation

const gameName = new String ('Bhore-G-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = " Ankit  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://Bhore.com/Bhore%20game"

console.log(url.replace('%20','-'))

console.log(url.includes('Bhore'))

console.log(gameName.split("-"));
