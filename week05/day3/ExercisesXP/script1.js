// Using a DOM property, retrieve the h1 and console.log it.
// Using DOM methods, remove the last paragraph in the <article> tag.
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

function consoleLogH1(){
    var h1 = document.getElementsByTagName("h1")[0];
    console.log(h1.innerHTML);
}

function removeLastParagraph(){
    var article = document.getElementsByTagName("article")[0];
    var paragraphs = article.getElementsByTagName("p");
    article.removeChild(paragraphs[paragraphs.length-1]);
}

function addEventListenerH2(){
    var h2 = document.getElementsByTagName("h2")[0];
    h2.addEventListener("click", ()=> h2.style.backgroundColor = "red");
}

function addEventListenerH3(){
    var h3 = document.getElementsByTagName("h3")[0];
    h3.addEventListener("click", ()=> h3.style.display = "none");
}

function addButton(){
    var button = document.createElement("button");
    button.innerHTML = "Bold Paragraphs";
    button.addEventListener("click", ()=> {
        var paragraphs = document.getElementsByTagName("p");
        for(var paragraph of paragraphs){
            paragraph.style.fontWeight = "bold";
        }
    });
    document.body.appendChild(button);
}
function randomFontSize(){
    var h1 = document.getElementsByTagName("h1")[0];
    h1.addEventListener("mouseover", ()=> h1.style.fontSize = Math.floor(Math.random() *
    100) + "px");
    }
function fadeOutParagraph(){
    var paragraph = document.getElementsByTagName("p")[1];
    paragraph.addEventListener("mouseover", ()=> paragraph.style.opacity = "0");
    paragraph.addEventListener("mouseout", ()=> paragraph.style.opacity = "1");
    }

function exercise1(){
    consoleLogH1();
    removeLastParagraph();
    addEventListenerH2();
    addEventListenerH3();
    addButton();
    randomFontSize();
    fadeOutParagraph();
}
console.clear()