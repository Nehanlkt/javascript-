console.log("harry")
let boxes=document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor="red"

document.getElementById("red").style.backgroundColor="blue"

document.querySelector(".box").style.backgroundColor="purple"
// first elemt vl be applied
// for all elem use
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green";
})

// dom are usefull when parent child r close to eachother

document.getElementsByTagName("div")
// shows all html collection including parent

// matches- to check if elem matches given css selectors


// closest

// need to learn this
