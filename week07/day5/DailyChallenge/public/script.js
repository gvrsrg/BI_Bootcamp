const url = 'http://127.0.0.1:5000/random-emoji'

const randomEmoji = document.getElementById('emoji')
const nameElement = document.getElementById('name')

const emojis = () => {
    fetch(url)
        .then(response => response.json())
        .then(emojis => {
            const emoji = emojis.emoji
            const name = emojis.name
            randomEmoji.innerHTML = emoji
            nameElement.innerHTML = name
        })
        .catch(error => console.log(error))
}

emojis()
