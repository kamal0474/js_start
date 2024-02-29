const myMarvel = ["thor", "ironman", "spiderman"]
const myFav = ["diljit", "amrit_mann","karan"]
//myMarvel.push(myFav)
//console.log(myMarvel);
//console.log(myMarvel[3,1]);// it can be done but it's wrong way bcz it's array in array.
const myHero = myMarvel.concat(myFav)
//console.log(myHero);

const newHero =  [...myMarvel, ...myFav]// right way of combining 1 array with another array.
//console.log(newHero)

const newarrays = [1, 2, 3, [4, 5, 6], 7, [4, 5,[8, 9]]]
const newarrays2 = newarrays.flat(Infinity)// flat likh ke kis array ke andar array ko likh ke kr skte hai sath mein depth mention krni hoti hai ki kitni depth kt solve krna hai.
console.log(newarrays2)

console.log(Array.isArray("kamlu"))// jaana ki ya cheese hai ki nhi.

console.log(Array.from("kamlu")) //from lga ke convert kr skte hai kisi bhi string ko array mein.

console.log(Array.from({name:'kamlu'}))// different case isme empty dega q ki humne mention nhi kiya ki key ka krna hai li value ka .

let sc1 =100
let sc2 =200
console.log(Array.of(sc1, sc2)) // iss tareeke se bhi kr skte hai array banana.