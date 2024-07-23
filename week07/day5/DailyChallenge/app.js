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
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];

    const topIndex = Math.min(randomIndex+2,emojis.length-1)
    const bottomIndex = Math.max(topIndex-4,0)


    const distractions = emojis.filter((item,index) => {
        return index !== randomIndex && index <= topIndex && index >= bottomIndex
    })


    if (!randomEmoji) return res.sendStatus(404);


    res.json({...randomEmoji, msg:"Guess who", distractions:distractions});
})
