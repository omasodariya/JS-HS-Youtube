const accountId = 433215
let accountEmail="om@google.com"
// you can use var in these two methods
// javascript scope problem caused by var so donot use it
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId=2 // not allowed

accountEmail="om@gmail.com"
accountPassword="212321232"
accountCity="Surat"

/*
Prefet not to use var
Because of issue in block scope and functional scope
*/


// console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])