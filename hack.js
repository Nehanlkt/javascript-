const getRandom=()=>{
    return new Promise((resolve,reject)=>{
        timeout=1+6*Math.random();
        setTimeout(() => {
            resolve()
        }, 2000);
    }

)}



