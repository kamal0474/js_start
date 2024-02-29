//string can be written in single or double quotes.
const name = "kamlu"
const count = 23
console.log(name + count);
//don't write in this way
//use backtiks modern way.
console.log(`hello my name is ${name} and my count is ${count}`);
const gamename = new String('sheu_sheu')//another way for declaring a string
console.log(gamename[0]);//0 is not an index 0 pe s store hai.
console.log(gamename._proto_);
console.log(gamename.length);//function ko directly access kr skte hai.
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));//for finding kis positin pe hai char 
console.log(gamename.indexOf('e'));//kis positin pe vo char hai.
//methods
const newstr = gamename.substring(0, 4);
console.log(newstr);
const newstr1 = gamename.slice(-9,3);//reverse
console.log(newstr1);
const newname= "   kamlu   "
console.log(newname);
console.log(newname.trim());//space remove kr dega.
const url = "http://kamlu.com/kamlu%90kaur"
console.log(url.replace('%90', '-'))//replace krna hai or kisse krna hai vo mention kr do.
console.log(url.includes("kamlu"))//ask ki ye cheese hai ki nhi.
console.log(gamename.split('-'))