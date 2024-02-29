// simple declaration of array
const myArr = [4,21,7,25,15,3]
const myHero = ["tony", "thor", "peter_parker"]
const myarr = new Array(1, 2, 3, 4, 5, 6)
//console.log(myArr);
//console.log(myHero)
//console.log(myArr[1])
myarr.push(1)//add
console.log(myarr);
myarr.pop()//remove
console.log(myarr);
myarr.unshift(21)// start mein add ho jata hai array ke
console.log(myarr);
myarr.shift()// ye start se remove kr deta hai
console.log(myarr)
console.log(myarr.indexOf(6));// btata hai ki kis index pe hai
console.log(myarr.includes(5)); //btata hai ki present hai ki nhi
const myyarr = myarr.join() // convert kr deta hai string mein
console.log(myarr)
console.log( myyarr)
/**********slice, splice*********/
console.log('a', myarr)
const myNewArr = myarr.slice(1,3)
console.log(myNewArr)// isme sirf 1, 2 index vale aaye ge
console.log('b', myarr)
const myNewArr2 = myarr.splice(1,3)
console.log(myNewArr2)// isme 1,2,3 index vale aaenge or original index mein change ho jaega mtlb jo bache hue hai vo aa jaenge
console.log('c',myarr)