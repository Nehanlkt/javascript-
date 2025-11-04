// js is asynchronous here,n it can be synchronous also
console.log("neha")
console.log("neh")

setTimeout(()=>{
    console.log("hi")


},0);

setTimeout(()=>{
    console.log("hlo")


},2);

console.log("end")
// order of execution neha,neh,end,hi,hlo


// callback is the function passed as argument to another function

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcl){
    sumcl(a,b)

}

// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });

// or

calculator(1,2,sum);

// clback hell:nested clback started below one another form pyramid of doom
function getData(dataId){
    console.log("data",dataId)
}
getData(1);
getData(2);
getData(3);






