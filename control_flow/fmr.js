// filter, map, reduce 
// for each mein return nhi hota hai

// ********* filter op **************
const mynum = [1, 2, 3, 4, 5, 6]
const newnum = mynum.filter( (num) => num >= 4)   // filter mein condition deti padhti hai.
//console.log(newnum);
// const newnum = mynum.filter( (num) => {return num >= 4}) scope kr diya to return krna hi padhega vrna aise nhi hoga kuch bhi print.

const newnums = []
mynum.forEach( (num) => {
    if (num>4) {
        newnums.push(num)
    }
}) 
//console.log(newnums);

const books = [ {
    title : "b1",
    genre : "horror"
},
{
    title : "b2",
    genre : "romance"
}, 
{
    title : "b3",
    genre : "romance"
}
]
const mybooks = books.filter ( (bk) => bk.genre === "romance")
//console.log(mybooks)
// return ke liye 
//const mybooks1 = books.filter ( (bk) => {return bk.genre === "romance"})
//console.log(mybooks1)

// ******* map *********
const my1 = [1, 2, 3, 4, 5, 6, 7, 8]
const my2 = my1.map( (num) => num + 10)        // my1.map( (num)=> { return num + 10 })
//console.log(my2)

// ******* chaining *********
// ek mein hi aane va operations lga skte hai,, wuuw
const my3 = my1.map( (num) => num *10).map( (num) => num +1).filter( (num) => num>=50)
console.log(my3)

// ******* reduce *********
const mynumss = [1, 2, 3]
const total = mynumss.reduce(function  (acc, currval) {   
    console.log(acc,  currval)
    return acc + currval
}, 0)                          //current value deni padhti hai
console.log(total)

// ab yhi reduce se kr ke dekhta hai.
const mytotal = mynumss.reduce( (acc, currval) => acc + currval, 0)
console.log(mytotal)

const shop = [ {
    itemn : 'peplum top',
    price : 250
},
{
    itemn : 'crop top',
    price : 350
},
{
    itemn : 'frock top',
    price : 450
},
]
const mybag = shop.reduce( (acc,buy) => acc + buy.price, 0 )
console.log(mybag)