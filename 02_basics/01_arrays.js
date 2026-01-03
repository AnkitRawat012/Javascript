//Arrays

let nums = [1,2,3,4,5]
let nums_array = new Array(2,5,67,7)
let myHeros = ["shaktiman", "naagraj"]
// console.log(nums_array);

// console.log(nums_array[0]);

// console.log(nums);
// console.log(myHeros.length);

// Array Methods

// nums.push(6)
// nums.pop()
// nums.push(4)

nums.unshift(0)
nums.shift()
// console.log(nums);


// console.log(nums.includes(9));
// console.log(nums.indexOf(3));

const newArray = nums.join() // join convert the array into strings and wind up

// console.log(nums);

// console.log(newArray);
// console.log(typeof newArray);

// slice and splice

console.log("a",nums);
const myn1 = nums.slice(1,3)

console.log(myn1);
console.log("b" , nums)

const myn2 = nums.splice(1,3);  // splice is modify the original array and separate out the entire range (1,3) and changes the original array to [1,5]
console.log("c" , nums);
console.log(myn2);









