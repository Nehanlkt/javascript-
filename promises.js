// promise is for eventual completion of task.it is obj is js
// it is sln to callback hell
// let promise=new promise((resolve,reject)=>{...})
// resolve n reject r the clback provided by js
// 3 states of promises-pending,resolve,reject


// let promise = new Promise((resolve, reject) => {
//     console.log("i am promise");
//     // resolve("done");
//     reject("some error");
//     // this gives error as some error
// });



// function getdata(dataid, getnextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve("success");
//             // reject("errrror")
//             if (getnextdata) {
//                 getnextdata();
//             }

//     }, 8000);
// });
// }

// these promises r given by api
// now we have to see how to use these problems
// uses by .then() for resolved & .catch()

// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am promise");
//         // resolve("done");
//         reject("some error");
//         // this gives error as some error
//     });
// };

// let promise=getpromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// }
// )

// promise Chaain
function asyncFunc1 () {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess");
        },4000);
    });
    
}
function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("sucess");
        },4000);
    });
    
}

console.log("fetching data1....");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);

});

console.log("fetching data2....");
let p2=asyncFunc2();
p1.then((res)=>{
    console.log(res);

});
// both vl execute at a time


// but to get one after other we use chaining
