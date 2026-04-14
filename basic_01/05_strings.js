const name ="hitesh"
const repoCount =50

// console.log(name + repoCount + "Value");

//string interpulation modern way and most useable string syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('saurabhh-hs-comm')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.endsWith());
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(7,8)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    saurabh   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://hitesh.com/hitesh%20choudhary"

console.log (url.replace('%20','-'))

console.log(url.includes('prince'))

console.log(gameName.split('-'));



