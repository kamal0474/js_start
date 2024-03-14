//koi constant ki value change nhi hoti jaise math.pi to iske bts kay hota hai vo dekhna hai.
const hh = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(hh);

// or hum bhi apne kisi obj ko aisa bna skte hai ki uski value bhi kbhi change na ho

//const kk = Object.create(null)
const tea = {
    usname : "ginger",
    price : 10,
    available : true
}
//console.log(tea)
console.log(Object.getOwnPropertyDescriptor(tea))  // aise undefined aaega
console.log(Object.getOwnPropertyDescriptor(tea, "usname"))  // kiski property chaiye vo mention krna hi padhega

// pr hum khud apne diye hue obj ko to control kr skte hai uske liye ye krna hoga

Object.defineProperty(tea, 'usname', {
    writable : false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(tea, "usname"))  // ab change ho jaegi value

for (let [key, value] of Object.entries(tea)) {
console.log(`${key} : ${value}` )
}
