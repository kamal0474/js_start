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
console.log(this) // ye empty dega