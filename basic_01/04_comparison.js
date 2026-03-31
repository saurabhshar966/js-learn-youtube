// console.log (2 > 1);
// console.log ( 2 >= 1);
// console.log ( 2 > 1);
// console.log ( 2 == 1);
// console.log ( 2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);   

//NOTE ::----->> //When you use comparison operators like >=, 
// JavaScript converts null to a number.null becomes 0 //  
// and avoide this type of conversion (give importance to clean code)

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === stict check by teiple equal check 

// console.log("2" === 2);


//**********************MEMORY********************************** */


//stack(Primitive), heap(Non-Primitive) 

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@goole.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email ="hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email);





