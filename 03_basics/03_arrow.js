const addOne = (num) => num+1;
// console.log(addOne(5))

const adding = (num1,num2) => num1 + num2;
// console.log(adding(5,6))

const factorial = (num) =>{
    if(num == 1 || num == 0) return 1;
    
    return num * factorial(num-1);

}

// console.log(factorial(0));

const fibonacci = (num) =>{
    if(num<=1) return num;

    return fibonacci(num-1) + fibonacci(num-2);
}
let num = 10 ;
for(let j = 0 ; j<num ; j++){
    // console.log(fibonacci(j));
}
console.log(typeof(factorial))
// function fib(num){
//     if(num<=1) return num;
//     return fib(num-1) + fib(num - 2);
// }
// let num = 10 ;
// for(let i = 0;i<num ; i++){
//     console.log(fib(i));
// }

// console.log(fibonacci(6))