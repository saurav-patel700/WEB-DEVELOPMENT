const useremail=""

if(useremail){
    console.log("got user email");
}
else{
    console.log("Dont have user email")
}
//falsy value

// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy
// "0", 'false', " ",[],{},function(){}
 
// if(useremail.length===0){
//     console.log("array is empty");
// }
// const emptyobj={}
// if(Object.keys(emptyobj).length){
//     console.log("object is empty")
// }
// output
// Dont have user email
// array is empty

//Nullish coalescing Operator (??):null underfined

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??20

console.log(val1);
//Terniary operator

//condition ? true:false

const iceteaprice=100
iceteaprice<=80 ? console.log("less than 80") : console.log("more than 80")
