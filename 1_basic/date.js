//let mydate = new Date()
//console.log(mydate)
//console.log(mydate.toString());
//let createdate = new Date(2024, 0, 21)
//console.log(createdate.toString()); // for prticular date
//let newdate = new Date(2024, 0, 4, 4,14)
//console.log(newdate.toLocaleString())// for particular date with time
//** timestamp 
//let mytime = Date.now()
//console.log(mytime) // milliseconds mein aaega.
//console.log(Math.floor(mytime/1000)) // seconds mein dega 
let newdates= new Date()
console.log(newdates.getMonth()) // 0 se chalu hota hai js mein mtlab 0 means jan 
console.log(newdates.getDay())
console.log(newdates.toLocaleString('default', {
    weekday : "long"
}))