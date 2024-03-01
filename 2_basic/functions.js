function myName() {
    console.log("k");
    console.log("d");
    console.log("k");
}
//myName<-(reference)
//myName() // execute

function add(num1, num2){ // this is parameters
     console.log(num1 + num2)
}
//add(4 , 21) // this is argument.
//const result = add(3, 9)
//console.log(result) // the result is not defined yet.

function add1(num1, num2){ // this is parameters
    let result = num1 + num2
    return result // return ke baad kuch execute nhi hoga.
}
const result = add1(3, 9)
//console.log(result)

function usrlogin (username) {
   return `${username} just logged in`
}
//console.log(usrlogin("kamli")) // agar sirf usrlogin likhte to kuch bhi nhi hota, print krvani hai to console.log kiya

function userlogin (username) {
    if(username === undefined) {
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}
//console.log(userlogin())

/**************************************/
//... <= rest and spread operator.

/* function mein multiple values kaise pass hoti hai.*/

function calculate (...num1) {
    return num1
}
//console.log(calculate(200, 400, 600, 50, 4298)) // ye array ke form mein store ho jaega.

function calculate2 (val1, val2, ...num1) {
    return num1
}
//console.log(calculate2(200, 400, 600, 50, 4298)) // isme val1 200 mein jaega val2 400 mein or baki bache vo ... ke sath jaenge.

const usernames = {
    usname : "kamlu",
    age : "20"
}
function handleit(anyobject) {
    console.log(`Username is ${anyobject.usname} and her age is ${anyobject.age}`);
}
handleit(usernames) // direct obj bhi bna ke pass kr skte the.

// for array 
const myArray =[200, 400, 500, 700]
function secondnum (getit) {
    return getit[1]
}
console.log(secondnum(myArray)) //console.log(secondnum([200, 400, 500, 700]))
