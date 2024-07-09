// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like 
//"You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (numOfChildren, partner, location, title){
    var sentence = `You will be a ${title} in ${location} and married to ${partner} with ${numOfChildren} kids.`;
    document.getElementById('sentence').innerHTML = sentence;

})(3, "Catherine", "Cardiff", "Prince of Walles")