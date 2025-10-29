// let a=[1,2,3,4,5,6]
// for (a=0,a.length,a++){
    
// }
// const red=(a,b,c,d,e,f)=>{
//     return a*b*c*d*e*f
// }
// console.log(a.reduce(red))


let a=6

function factorial(number){
    // to get array
    let arr=Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
}

factorial(a)

