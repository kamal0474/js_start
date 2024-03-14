// getters setters jb aap kisi ko kuch nhi dena chate tb use krte hai
// getter ke sath hi setter aata hai
class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){   // koi value get krna chate ho to get use krte hai
        return this._email.toUpperCase()
    }
    set email(value){    // koi value set krna chate ho to set use kro or set mrin return use nhi krte.
        this._email = value.toUpperCase()
    }
}
const kk = new user("kd@gmail.com", "123")
console.log(kk.email);