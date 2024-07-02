const allBooks = [
    {
        title: "Das Parfum. Die Geschichte eines Mörders",
        author: "Patrick Süskind",
        alreadyRead: true,
        image: "https://upload.wikimedia.org/wikipedia/ru/4/4b/Perfume_cover.jpg"
    },
    {
        title: "To kill a mockingbird",
        author: "Harper Lee",
        alreadyRead: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/274px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
    },
]

function exercise7(){
    for (let book of allBooks){
        let newDiv = document.createElement('div')
        newDiv.classList.add('book')
        let newTitle = document.createElement('h3')
        newTitle.textContent = `${book.title} written by ${book.author}`
        let newImg = document.createElement('img')
        newImg.src = book.image
        newImg.alt = book.title
        newImg.width = 100
        if (book.alreadyRead){
            newDiv.style.color = "red"
        }
        newDiv.append(newTitle, newImg)
        document.querySelector('.listBooks').append(newDiv)
    }


}

