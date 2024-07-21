const express = require("express");

const { emojis } = require("./config/emojis.js");

const app = express();
app.use(express.json())
app.use("/", express.static(__dirname + '/public'))

const PORT = 5000
app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});


app.get("/emojis", (req, res) => {
    res.json(emojis);
})

app.get("/random-emoji", (req, res) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    res.json(randomEmoji);
})
