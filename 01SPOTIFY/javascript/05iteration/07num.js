const mynumbers=[1,2,3,4,5,6,7]

// const newnums=mynumbers.map((num)=>num+10)

const newnums=mynumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
// console.log(newnums);

const mynums=[1,2,3]
// const mytotal=mynums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)
const mytotal = mynums.reduce((acc,curr)=>acc+curr,0)
// console.log(mytotal);

const shoppingkart=[{
    itemname:"js course",
    price:2000
    },
    {
    itemname:"py course",
    price:23000
    },
    {
    itemname:"ds course",
    price:234000
    },
]
const price = shoppingkart.reduce((acc,item)=>acc+item.price,0)
console.log(price);