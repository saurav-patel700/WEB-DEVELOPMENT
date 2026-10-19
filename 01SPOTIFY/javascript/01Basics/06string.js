const name="saurav"
const repocount=7

// console.log(name+repocount+"value");
console.log('hello my name is ${name} and my repo count is ${repocount}');
const gamename=new String('saurav-700-google')
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('7'));

const newString = gamename.substring(0,4)  //4 not include
console.log(newString);

const anotherString = gamename.slice(-8,4) 
console.log(anotherString);

const newStringone="     saurav   "
console.log(newStringone);
console.log(newStringone.trim());

const url="www.google/.com"
console.log(url.replace('/','o'))

console.log(url.includes('google'));
console.log(url.includes('s'));

console.log(gamename.split('-'));
