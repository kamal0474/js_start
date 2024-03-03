// for of loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {           //kis cheese pe loop lgana hai vo lkho bs.
 //  console.log(num)
}   

const str ="hello_ji"
for(const string of str) {
    //console.log(string)
}

// Maps  => maps sirf unique value hi daalta hai 2 same value na jati map meiin

const map = new Map()
map.set('IN','India')
map.set('Fr','France')
map.set('UK','United Kingdom')
//console.log(map)

// for loop of map
for (const [val, key] of map){   // [] isliye taki alag alag mention ho.
    console.log(val, ':-', key)
}
const myobj = {
    'g1': "NFS",
    'g2':'spider'
}
//for (const [val, key] of myobj){  
  //  console.log(val, ':-', key)
//}                                 for of loop object mein kaam nhi krta.


// ******* for in loop for objects ********
const myob ={
    js : 'javascript',
    cpp : 'c++'
}
for (const key in myob) {
    console.log(myob[key])   //`${key} shortcut is ${myob[key]}`  agar value chaiye to key ka mention kr do vrna sirf key aaegi.
}

// **** for in loop for array *******
const pro =["js", "py", 'c++']
for (const array in pro) {
 console.log(pro[array])
}

// **** for each loop *****
const code =["java", 'python', "c++"]
//code.forEach(function (item) {
 //   console.log(item)
//});

//code.forEach( (item) => {                 // using arrow function
  //  console.log(item)
//})

function printme(item) {
    //console.log(item)
}
//code.forEach(printme)                    // isme sirf reference dena hai exute ka nhi krna vo apne aap kr lega.

//code.forEach( (item, index, arr) => {
  //  console.log(item, index, arr)
//})

const mycode = [ {                      // array ke andar object hai.
    lname : 'l1', 
    lfile : 'js'
},
{
    lname : 'l2',
    lfile : 'java'
}]

mycode.forEach ( (item) => {
    console.log(item.lname)
})