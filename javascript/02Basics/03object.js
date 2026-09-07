// singleton 
// object literals
const mysymbol=Symbol("key1")

const Jsuser={
    name: "saurav",
    "full name" :" saurav kumar",
    [mysymbol]: "mykey1",
    age:23,
    location: "patna",
    email:"saurav399@gmail.com",
    isLoggedin:false,
    lastlogindays: ["monday","saturday"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mysymbol])

JsUser.email = "saurav@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "saurav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());