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


function getdata(dataid, getnextdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid);
            resolve("success");
            if (getnextdata) {
                getnextdata();
            }
        }
    }, 5000);
});
}


