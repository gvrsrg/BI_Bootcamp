// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions


let container = document.getElementById("container")
let animate = document.getElementById("animate")
let button = document.querySelector("button")

let containerWidth = container.scrollWidth
let animateWidth = animate.scrollWidth

function myMove(){
    newInterval = setInterval(()=>{
        left = parseInt(animate.style.left)
        if (isNaN(left)) {left=0}
        animate.style.left = left + 1 + "px"
        if(parseInt(animate.style.left) >= parseInt(containerWidth) - parseInt(animateWidth)){
            clearInterval(newInterval)
        }
    },1)
}