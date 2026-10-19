const marvelhero = ["thor","hulk"]
const dchero = ["superman","flash"]

// marvelhero.push(dchero)
// console.log(marvelhero);
// console.log(marvelhero[3][1]);
// const allhero = marvelhero.concat(dchero)
// console.log(allhero);
const allnewhero=[...marvelhero,...dchero]
console.log(allnewhero);
const arr2=[1,2,3,[4,5,6],[4,[5,6]]]
const realarr2=arr2.flat(Infinity)
console.log(realarr2);

console.log(Array.isArray("saurav"))
console.log(Array.from("saurav"))
console.log(Array.from({name: "saurav"}))

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));