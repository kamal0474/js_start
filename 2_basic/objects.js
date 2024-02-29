// obj can be declared by literals or as constructor
// singleton -> isme ek hi object banta.
// literal se kbhi bhi singleton nhi bnega 
// constrictor se hi singleton bnega.
// object.create <- ye constructor se bna hai.

/*********object literals ***********/
/* for declaration */
const symbl = Symbol("k11")
const Js = {
    name:'kamlu',
    age : 20, 
    [symbl] : "k1", // syntax for defining symbol.
    loc : "delhi"
}

/* for accessing */
//console.log(Js.name);
//console.log(Js['name']);// declare as a string bhi kr skte hai.
//console.log(Js[symbl]);
Js.loc = "london"
//Object.freeze(Js)// object ko freeze kr dena .. baad mein change nhi kr skte.
Js.loc = "chandigarh"
//console.log(Js);

// function declare
Js.greetings = function() {
    console.log("Hellio Ji");
}
//console.log(Js.greetings()); // isme reference nhi hua hai.

Js.greetings1 = function() {
    console.log(`Hellio Ji, ${this.name}`);
}
//console.log(Js.greetings1());

/***********singleton****************/

const user1 = new Object()//singleton obj
const user ={} // non singleton obj
//console.log(user1, user)

const user3 = {
    email : "kd@g.com",
    fullname : {
        userfname : {
            fname : "kamal",
            lname : "deep"
        }
    }
} //nested objs
console.log(user3.fullname)

const ob1 = {1 : "k", 2: "d"}
const ob2 = {3 : "d", 4: "j"}
//const ob3 = Object.assign({}, ob1, ob2)
const ob3 = {...ob1, ...ob2} // easy way 
console.log(ob3)

// console.log(Object.values(Js));
// console.log(Object.keys(Js));
// console.log(Object.entries(Js));
// console.log(Js.hasOwnProperty('isLoggedIn'));

/*****************destructuring of objects *************/
const course ={
    cname : "javascript",
    price : "00",
    source : "youtube"
}
const {cname : coursename} = course
console.log(coursename); // destructing.

