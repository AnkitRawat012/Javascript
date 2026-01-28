function one(){
    const username = 'Ankit'

    function two(){
        const website = 'Youtube';
        // console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if(true){
    const username = 'Ankit'
    if(username === 'Ankit'){
        const website = ' Youtube'
        // console.log(username + website)
    }
    // console.log(website); ** gives error because out of the scope
}
// console.log(username);


// +++++++++++++++++++ interesting ++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1;
}

// addone(5)
// addTwo(5) ++ This will throw an error
const addTwo = function(num){
    return num + 2
}

// addTwo(5)
