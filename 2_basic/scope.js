/* let, var, const*/
// {} scope
let a =400
if( true) { // scope
    let a =59
    const b= 90
    //console.log("Inner : ", a) // isme a ki value jo block mein hai vhi aaegi mtbl sirf block tk a ka scope rhega
}
//console.log(a); // isme a global scope vala hai

/*nested scope*/

function one(){                  // ice cream concept bada chote se nhi le skta pr chita bade se le skta hai.
    const usname = 'kamaldeep'
     function two() {
        const web = "youtube"
        console.log(usname)
     }
     //console.log(web)
     //two()
}
one()
 
if (true) {
    const uname = 'kamaldeep' 
    if(uname === 'kamaldeep') {
        const webs = " utube"
        //console.log(uname + webs)
    }
    //console.log(webs) ye isliye nhi aaya q ki iska scope hi sirf if tk ka hi tha.
}
//console.log(uname) iska bhi scope nhi hai.

function add1 (num) {
    return num+1
}
add1(8)


add2(9) // isme error aa jaega q ki ye declaration se phle use ho raha hai
const  add2=function(num) { // ye var mein store kiya hai isliye isme error aaega 
 return num +2 
}