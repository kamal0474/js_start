/*stack(primitive) heap(non_primitive)
stack mein ek copy milti hai primitive datatypes ki, kuch bhi change krenge to original copy mein change nhi hoga.
heap mein reference value milti hai original value, kuch bhi change krenge to original mein change hoga.*/
let my_Id = "kamlu.com"
let another_Id = my_Id
another_Id = "kamli.com"
console.log(my_Id);
console.log(another_Id);//copy mein change hua original mein nhi.
let user1 = {
    email : "kamli@google.com",
    upi : "kamli@ybl"
}
let user2 = user1
//for accessing we can write like this user2.email
user2.email ="kamlu@google.com"// changed in original email also
console.log(user1.email, user2.email);