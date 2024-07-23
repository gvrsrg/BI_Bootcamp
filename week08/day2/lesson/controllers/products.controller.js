const { _getAllProducts, _getProductById, _insertProduct } = require('../models/products.model.js')


const getAllProducts = async (req, res) => {
    const products = await _getAllProducts()
    res.json(products)
}

const getProductById = async (req, res) => {
    const { id } = req.params
    const products = await _getProductById(id)
    res.json(products)
}

const insertProduct = async (req, res) => {
    const { name, price } = req.body
    const product = await _insertProduct(name, price)
    res.json(product)
}



module.exports = {
    getAllProducts,
    getProductById,
    insertProduct
}
