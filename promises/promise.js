/* meine kaha mein ye kaam krungi pr vo hua nhi pr meine promise to kiya hai krna ka aaj nhi to kal kr hi dungi to ye hota hai promise.
promise is a object*/ 

//************* how to make promises ************
//^^^^^^^^^^promise 1

const pro1 = new Promise(function(resolve, reject) {
    //do an async task
    //DB calls
    setTimeout(function(){
        console.log("hie kamluu")
        resolve()    // now resolve is connected to .then()
    }, 1000);
})
pro1.then(function(){
    console.log("promise consumed")
})

//^^^^^^^^^^^^^^promise 2

new Promise(function(resolve, reject) {
    //do an async task
    //DB calls
    setTimeout(function(){
        console.log("hie kamluu")
        resolve()    // now resolve is connected to .then()
    }, 1000);
})
.then(function(){
    console.log("pro2 consumed")
})

//^^^^^^^^^promise 3

const pro3 = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve({usname: "kamaldeep", email : "kd@gmail.com"})
    }, 1000);          // resolve mein koi bhi parameter pass krte hai vo mil jata hai
})
pro3.then(function (user) {   // function mein kuvh bhi pass krado
console.log(user)
})

//^^^^^^^^^^^^^^^^promise 4

const pro4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if(!error) {
            resolve({usname :"kamal" , pass: "123"})
        }
        else {
            reject('ERROR OCCURED')
        }
    }, 1000)
})
//pro4.then().catch()
 pro4
 .then((user) => {
 console.log(user);
 return user.usname
}).then((usname) =>{    //chaining process upr vale se jo value aaegi vhi aage pass hogi.
    console.log(usname)
}).catch(function(error){
   console.log(error)
}).finally(() => {      // ye humesha hoga hi
    console.log("promise ho gya hai")
})

//^^^^^^^^^^^^^^^^^^^promise 5

const pro5 = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error) {
            resolve({usname :"JS" , pass: "123"})
        }
        else {
            reject('ERROR:OCCURED')
        }
    }, 1000)
})
async function conpro ( ){
    try {
        const res = await pro5
console.log(res)
    } catch (error) {
        console.log(error)
    }
}
conpro()

//^^^^^^^^^^^^^fetch

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))