//console.log(2>1);
//2 diff datatypes cannot be compared.
console.log(null > 0);//false
console.log(null ==0);//false
console.log(null>=0);//true
/*== quality check and comparisons >=, <= work differently and comarison convert null to a number treating it as 0 so that's why
3rd statement is correct.*/
console.log(undefined ==0);
console.log(undefined >=0);
console.log(undefined <=0);
//strict check === it checks the value strictly.
console.log("2" === 2);
// we should avoid all these codes.