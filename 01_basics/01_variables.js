const accountId = 14453
let accountEmail = "hitesh@gamil.com"
var accountPassword = "1234"
accountCity = "Jaipur"

let accountState ;

// accountId = 2 // not allowed

accountEmail = "jc@hc.com"
accountPassword = "12321223"
accountCity = "Mumbai"
console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail,accountPassword,accountCity,accountState])

