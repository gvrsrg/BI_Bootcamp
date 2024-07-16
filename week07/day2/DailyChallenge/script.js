const getGif = async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let {category} = Object.fromEntries(formData.entries())
    const options = {
        method: 'GET',
        mode: 'cors',
        crossDomain: true,
        referrer: ""
      };
      

    const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    let gifSearch = `http://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${apiKey}&rating=g`;

    try {
        const res = await fetch(gifSearch,options);

        if(!res.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await res.json();
        showGif(data)
        return data
    } catch(error){
        console.error("Error retrieving giphy.", error);
        return
    }

};
const form = document.getElementById('form-gif');

form.addEventListener('submit', getGif);

let img_id = 0

const showGif = (responce) => {
    let imgPath = "https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif"
    if (!responce['data']){
        imgPath = "https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif"
    } else if (Array.isArray(responce.data) && responce.data.length > 0) {
        const gif = responce.data[0].images;
        imgPath = gif.fixed_height_still.url
    } else if (Array.isArray(responce.data) && responce.data.length == 0) {
        imgPath = "https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif"
    } else {
        const gif = responce.data.images;
        imgPath = gif.fixed_height_still.url
    }


    let gifs = document.getElementById("gifs")
    if (gifs == undefined) {
        gifs = document.createElement("div");
        gifs.setAttribute("id", "gifs");
        document.body.appendChild(gifs);
    }    
    let deleteAll = document.getElementById("deleteAll")
    if (deleteAll == undefined) {
        deleteAll = document.createElement("button");
        deleteAll.setAttribute("id", "deleteAll");
        deleteAll.innerHTML = "DELETE ALL";
        deleteAll.addEventListener("click", deleteGif);
        gifs.appendChild(deleteAll);
    }



    const new_gif = document.createElement("div");
    const new_img = document.createElement("img");
    const new_btn = document.createElement("button");

    new_img.setAttribute("class", "gif");
    new_img.setAttribute('src', imgPath)

    new_btn.setAttribute("class", "btn");
    new_btn.innerHTML = "DELETE"


    new_gif.setAttribute("class", "gif");
    new_gif.setAttribute("id", "gif_"+img_id);
    img_id++;

    new_btn.addEventListener("click", deleteGif);
    new_gif.appendChild(new_img);
    new_gif.appendChild(new_btn);

    gifs.appendChild(new_gif);

};

function deleteGif(event) {
    event.target.parentNode.remove();
}