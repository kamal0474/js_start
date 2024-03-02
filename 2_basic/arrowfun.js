// this keyword current context(values) bnata hai.

const us = {             // obj created
    username :'kamaldeep',
    age : 20,
    welcomemess : function() {     //function created
        console.log(`${this.username} , welcome here`);  //backtiks use krna jada acha hai.
     console.log(this)
    }
}
//us.welcomemess()
//us.username = "kamlu"
//us.welcomemess()
//console.log(this) // ye empty dega

const cup = function() {
    let usernaMe = "kD"
    //console.log(this.usernaMe);
}
cup()
const cup1 = () => {    // this is arrow function
    let usernaME = "kD"
    //console.log(this.usernaME);
}
cup1()

const addit = (num1, num2) => {   // arrow fun can be stored in var also.
    return num1 +num2;
}
//console.log(addit(4,21))

// implict function mtbal ek hi line mein likh do
const add = (num1, num2) =>num1 +num2  //(num1 + num2)
console.log(add(4,21))

// { }<= ye use kiya to return likhna padhega. or ()<= ye use kiya to nhi likhna padhega return.

const addi = (num1, num2) => ({usernamme : "kamlu"})
console.log(addi(6,7))