// immediately invoked function expression.
// global solution ko remove krne ke liye iife use krte hai remove mtlab taki aage problem na de

//function one() {
    //console.log("DB CONNECTED")
//}
//one()                              // directly invoke kr liya 
// ab iife lga ke 
(function one1() {                    // named iife
    console.log("DB CONNECTED")
})() ;//()<= ye vala execution ke liye.      // directly parenthesis lga ke bhi ho jaega, aur semicolon lgana imp hai isme.

( () => {                                   // arrow function ka bhi ho skta hai isse.
    console.log('i am connected');
}) ();

( (name) => {                                 // parameter iife
    console.log(`i am connected ${name}`);
}) ('kamlu');