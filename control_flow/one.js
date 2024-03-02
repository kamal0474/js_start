// if statement 
 
//if(condition) {
    //statement / code
 //}
// <, >, <=, >=, ==(checking the equality), !=, ===(it checks the type also)

const temp = 41
if(temp == 50) {
    console.log("hnji less than 50 hi hai")
} else {
console.log("na ji temp badha hai")
}

const score =100
if(score >20) {
    const power= 100
    console.log(`power is: ${power}`)
}
//console.log(`power is: ${power}`);     // isme nhi hua q ki power ki scope sirf if vale tk hi hai.
// implicit 
const bal = 10000
if( bal > 1000) console.log("test");

//+++++++++++++++ nesting if else
if(bal <= 900) {
    console.log("hnji bilkul hai");
}
 else if(bal<500) {
    console.log("na ji kam to ni hai");
 }
else if(bal == 10000) {
    console.log("aree ji bilkul");
}
else {
    console.log("aree sbse kaam hai");
}

const user = true
const debitc = true
const creditc = false
if(user && debitc) {       // and dono condition check krta hai true hogi to krega
    console.log("aree ji aa jaiye")
}
if(debitc || creditc) {     // or condition dono mein se koi bhi theek hogi tio krega.
    console.log("....")
}
//************switch********************/
// syntax
switch (key) {
    case value:
        break;
        default:
            break;
}