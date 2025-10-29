let boxses=document.getElementsByClassName("box")
console.log(boxes)
let boxes=document.querySelectorAll(".container").children

function getRandomColor(){
    let val1=233;
    let val2=124;
    let val3=11;
    return `rgb(${val1},${val2},${val3})`
}
// no for each in html
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor()
})

// still need to do