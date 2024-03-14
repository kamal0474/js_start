function set (usname) {
    this.usname = usname
}
 function createuser (usname, email) {
 set.call(this, usname)      // ye this uska hai apne reference ka nhi diya
 
 this.email = email
 }
 const neww = new createuser("kamal", "kd@gmail.com")
 console.log(neww);