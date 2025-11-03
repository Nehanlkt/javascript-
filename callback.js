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





