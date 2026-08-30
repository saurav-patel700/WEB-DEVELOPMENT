const score=400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber=123.8966
console.log(othernumber.toPrecision(4));

const hund=1000000
console.log(hund.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++++    MATH     +++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(-10.04));
console.log(Math.ceil(-10.04));
console.log(Math.floor(-10.04));
console.log(Math.min(1,2,3,4,5,6,7,8));
console.log(Math.max(1,2,3,4,5,6,7,8));
 
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min);
