let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleString());
// console.log(typeof myDate);

let mycreateddate=new Date("03-09-2003")
// console.log(mycreateddate.toLocaleString()); 

let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday: "long",
})