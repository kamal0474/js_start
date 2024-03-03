// Iterations  
// **** for loop ****
for ( let j = 0; j<=10; j++) {
    const element = j;
    if(element == 4){
        console.log("4 is the best number") //phele ye print aaega phir 4 vala.
    }
    //console.log(element);
}
for ( let  i =0; i<=5; i++) {
    //console.log(`outer loop : ${i}`)
    for( let k=0; k<=6; k++) {
        //console.log(`inner value ${k} and inner loop ${i} `)
   // console.log(i + "*" + k + "=" + i*k)
}
}

let myarray = ["ironman", "spiderman", "thor"]
for( let i =0; i<myarray.length; i++) {
    const ele = myarray[i];
    //console.log(ele);
}

// **********keywords***********
// ********break and continue

for(let k=1; k<=35; k++){
    if(k ==25) {
        //console.log("oyee milgya")
        break;                 // isme ye condition mil gyi to phir break ho jaega aage ki nhi chalege
    }
    //console.log(`value izz ${k}`)
}

for(let k=1; k<=35; k++){
    if(k ==25) {
        //console.log("oyee milgya")
        continue;                 // isme ek bar ko krne bhi deta hai agr mil bhi gyi vo condition.
    }
    //console.log(`value izz ${k}`)
}


// while and do while loop
let i =0
while (i<=4) {
  //console.log(`value izz ${i}`);
  i = i+2;
}

let myarr = ["iru", "thoru", "spidru"]
let l = 0
while(l<myarr.length) {
    //console.log(`value is ${myarr[l]}`)
    l = l+1
}

let s =2
do {
    console.log(`score is = ${s}`);
    s++
} while(s<=1)