const user = {
 usname :'kamlu',
 login : 8,
 signedIn : true,
 getUserDetails : function (){
    //console.log("got it")
    //console.log(`username : ${this.usname}`);
    //console.log(this)       //ye sare ki value de dega
 }
}
//console.log(user.usname);
//console.log(user.getUserDetails())
//console.log(this)             //ye empty dega qki reference nhi hai

//^^^^^^ constructor function ^^^^^^^^

//const pro1 = new Promise()   //joo new hai vo naya context bnane ke kaam aata hai or isse constructor function khete hai
//const date = new Date()

function user1(user1name, login, isloggedIn){
 this.user1name =user1name;      //this.user1name hai ye variable hai or right vala user1name ye pass krke de rahe ho
 this.login = login;
 this.isloggedIn = isloggedIn
  
 return this
}
//const userr = user1("kamlu", 12, true)
//const userr1 = user1("kamlii", 13, false)
//console.log(userr);
//console.log(userr);   // ye sari value override kr dega

const userr = new user1("kamlu", 12, true)
const userr1 = new user1("kamlii", 13, false)
console.log(userr);
console.log(userr1);

/*
1.new object banta hai
2.constructor function call hota hai new keyword ke karan
3.constructor function har bar naya instance deta hai
4.sare arguments this keyword ke ander inject ho jate hai
5.or phir humko mil jate hai
*/