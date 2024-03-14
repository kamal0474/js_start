class user {
    constructor(usname, email) {
        this.usname = usname
        this.email = email
    }
    logMe() {
        console.log(`username: ${this.usname}`);
    }
    static createId(){
        return '123'
    }
}
const kd = new user("kamli", "kd@gmail")
//console.log(kd.createId())

class teacher extends user {
 constructor(usname) {
    super(usname)
 }
}
const kdk = new teacher ('kamaldeep')
kdk.logMe()
console.log(kdk.createId())
// staic krne ke baaqd koi usse access nhi kr skta hai