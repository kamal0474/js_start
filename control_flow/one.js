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
const month =1
switch (month) {
    case 1:
        console.log('jan')
        break;
        case 2:
            console.log('feb')
            break;
            case 3:
                console.log('mar')
                break;
                case 4:
                    console.log('apr')
                    break;
        default:
            console.log('default case')
            break;
}
// break nhi use krenge to aage ke bhi execute ho jaenge, aur default vala nhi hota executeunless koi cind math na ho 
// ******************************************
// truthy and falsy value
//FV => false, 0, -0, BigInt, "", null, undefined, NaN
//TV => "0", 'false', " ", [], {}, function(){}
 const empobj ={}
 if(Object.keys(empobj).length === 0) {
    console.log("empty obj")
 }

 //nullish coalescing operator(??) : null undefined 
  let val;
  let val1;
  let val2;
  val = 5 ?? 10       // jo phele assign hai vo aa jaega
  val1 = null ?? 10    //isme null aa skta tha pr isme aage value di hui thi to 10 aa gya vrna null hi aana tha.
  val2 = undefined ?? 2   
  console.log(val, val1, val2)


  // terninary op 
  const icecream =30
  icecream >=50 ? console.log("greater than 50") : console.log("less than 50")

  