//object or new keyword

function mul(num) {
    return num*2
}
mul.power = 2
console.log(mul(5));
console.log(mul.power)
console.log(mul.prototype)

//function is a function and function is a object also.

function create(usname, score) {
    this.usname = usname;
    this.score = score;   //this mainly uska reference btata hai
}
//prototype mein hum apni functionality bhi de skte hai
 // this mtlab jis, jis ne bulaya uska kro.
create.prototype.increment = function () {
    this.score++
}
create.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}
const kd = new create("kamal", 99)
const kdk = new create("kamli", 98)
kd.printMe()

/* new keyword initiates the creation of a new js object
prototype link hoga new object se
The constructor function is called with the specified arguments and this is bound with newly created object
The new object is returned. */

//^^^^^^^^^^^^^^^ prototype ^^^^^^^^^^

/*
let myName = "kamal"
console.log(myName.length)
*/

let myHero = ["thor", "ironman"]

let hero = {
    thor : "hammer",
    ironman : "sling",

    getspiPower: function () {
        console.log(`Spi power is ${this.spider}`)
    }
}
Object.prototype.kamal = function() {               // directly object mein hi vo property(functionality) inject kr do taki sb mein hi aajaye
    console.log(`kamaldeep is present in everyone's heart`)
}
Array.prototype.heykamal = function(){
    console.log("hiee kamli")
}

//hero.kamal()    object declare 
myHero.kamal()
myHero.heykamal()    // array ke pass power hai
//hero.heykamal()   iss hero mein heykamal ka access nhi hai

//^^^^^^^^^^ Inheritance ^^^^^^^^^^^
const usser = {
    usnamee : "js hi js"
}
const tt = {
    makev : true
}
const teachingsupport = {
   isAvailable : false
}
const TAsupport = {
    assi : 'js assi',
    __proto__ : tt    // isse tt ka reference mil jaega TAsupport ko
}
tt.__proto__ = usser

//modern syntax for inheritance
Object.setPrototypeOf(TAsupport, usser)

let usserr = "kamldeep    "
String.prototype.truelength = function() {
    console.log(`${this}`)
    //console.log(`${this.name}`)
    console.log(`true lenght is: ${this.trim().length}`)
}
usserr.truelength()
"khushi".truelength()   // ab directly kr skte hai