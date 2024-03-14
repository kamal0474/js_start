class user{
    constructor(username, email, phone){
        this.username = username
        this.email = email
        this.phone = phone
    }
changeuser () {
    return `${this.username.toUpperCase()}`
}
}
const kd = new user("kamal", "kd@gmail.com", "1234567")
console.log(kd);
console.log(kd.changeuser())
