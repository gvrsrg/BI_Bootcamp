const express = require('express')
let {products} = require('./config/data.js')


const app = express()

app.use(express.json()) // to parse json data
app.use("/", express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true})) // to parse urlencoded data




// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })



app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(item => item.id == id)
    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})

app.get('/api/search', (req, res) => {
    const { name } = req.query
    const results = products.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
    if (!results.length === 0) {
        return res.status(404).send('Product not found')
    }
    res.json(results)
})

app.post('/api/products', (req, res) => {
    const { name, price } = req.body
    if (!name || !price) return res.sendStatus(400)
    const newProduct = {
        id: products.length + 1,
        name,
        price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})


app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((item) => item.id == id);
    if (productIndex == -1) return res.sendStatus(404);
    products.splice(productIndex, 1);
    res.sendStatus(204);
})



app.listen(5000, () => {
    console.log('server on port 5000');
})

