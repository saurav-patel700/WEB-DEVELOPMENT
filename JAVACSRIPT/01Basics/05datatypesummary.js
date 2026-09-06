//primitive

// 7types : string
// string nunber boolean null undefined symbol 
// bigint 

//reference type or non primitive
//array.objects,functions

const score =100
const scorevalue =100.3

const isloggedin = false
const outsidetemp=null
let useremail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

const Bignum=3243423243n
const heroes=["shakti","naag"]
let myobj= {
    name:"saurav",
    age:22
}
const myfunction=function(){
    console.log("hello world");
}
console.log(typeof outsidetemp);
console.log(typeof scorevalue);


///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack [primitive] ,  heap [non primitive]

let myname="saurav"
let sname="myname"
sname="change"
console.log(sname)
console.log(myname)

let userOne={
    email:"user@google.com",
    upi: "user@ybl"
}
// print
console.log(userOne.email);