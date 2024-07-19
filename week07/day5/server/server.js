const express = require('express')
const {products} = require('./config/data.js')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})



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



app.listen(5000, () => {
    console.log('server on port 5000');
})

