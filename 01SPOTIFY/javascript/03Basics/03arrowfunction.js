const user = {
    username :"saurav",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
    }
}
// user.welcomeMessage()
// user.name="sam"
// user.welcomeMessage()
// console.log(this);


// const chai = function(){
//     let username="hitesh"
//     console.log(this.username);
// }

const chai = ()=> {
    let username="hitesh"
    console.log(this);
}
chai()
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// const addtwo=(num1,num2)=> num1+num2
// const addtwo=(num1,num2)=> (num1+num2)
const addtwo=(num1,num2)=> ({username: "saurav"})
console.log(addtwo(3,4))
//  
