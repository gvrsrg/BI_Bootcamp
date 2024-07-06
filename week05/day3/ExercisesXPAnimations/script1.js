// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

setTimeout(() => {
    alert("Hello World");
}, 2*1000);

setTimeout(() => {
    let p = document.createElement("p");
    p.innerHTML = "Hello World";
    document.getElementById("container").appendChild(p);
    
}, 2*1000);

let newInterval = setInterval(() => {
    let p = document.createElement("p");
    p.innerHTML = "Hello World";
    document.getElementById("container").appendChild(p);
    }, 2*1000);

let button = document.getElementById("clear")
button.addEventListener("click", () => {
    clearInterval(newInterval);
    });
    