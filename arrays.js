// arrays are mutable
let arr=[1,2,3,4]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr.length)
console.log(arr,typeof arr)
console.log(arr.toString())
console.log(arr.join(" and ")) 
// in place of comma and will be replaced
// console.log(arr.pop())
// last elem will be pooped and pooped elem vl be displayed
// console.log(arr.push("hi"))
// returns the new lwngth
// console.log(arr.push(22))
// console.log(arr.shift())
// removes frst elem and frst elem vl display
console.log(arr.unshift("jack"))
// in 1st place it will come and dislays the length
let s=[2,3]
let f=[4,5]
console.log(s.concat(f))
// dosent change original arr
// sort modifies the original arr
// splice returns deleted items ,modifies the array
// position of add,no of elem to remove,elemts need to be added
let c=[2,3,4,5]
console.log(c.splice(2,1,7,8))
// slice out peice from array it creates new arr
console.log(c.slice(2))
console.log(c.slice(2,4))
console.log(c.reverse())
let k=[1,4,3]
// for (let k = 0; k < k.length; k++) {
//     const element = array[k];
//     console.log(element)
   
// }
k.forEach((value,index,arr)=> {
    console.log(value,index,arr)
    
});

// for of loop used to get the values from an array
// for in loop used to get keys from array
let object={
    a:1,
    b:2,
    c:4
}
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}

for (const element of arr) {
    console.log(element)
    
}
// element is of any name

// map
// creates new array by  performing some operation on each array element
let ar=[1,3,4,5]
let newar=ar.map((e)=>{
    return e**2

})
console.log(newar)

// filter
// filter an array with the values that passes a test create new array
const greaterThanseven=(e)=>{
    if(e>7){
    return true
    }
    return false
}

// reduce fn
console.log(newar.filter(greaterThanseven))

let arr2=[1,2,3]
const red=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))