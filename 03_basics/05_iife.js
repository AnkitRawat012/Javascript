// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})(); // use semicolon ; to end the IIFE Other wise it throw an error
// (Here function definition)(this one is function call) ()()
// chai()

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Ankit')

(() => {
    console.log(`DB CONNECTED TWO`);
})()