const { db } = require('../config/db.js')


const _getAllProducts = async () => {
    const products = await db('products')
    .select("id", "name", "price")
    .orderBy("id")
    return products
}

const _getProductById = async (id) => {
    const products = await db('products')
    .select("id", "name", "price")
    .where("id", id)
    .orderBy("id")
    return products
}

const _insertProduct = async (name, price) => {
    const product = await db('products')
    .insert([
        {name:name,
        price: price
        },
    ], ['id', 'name', 'price']
    )
    return product
}



module.exports = {
    _getAllProducts,
    _getProductById,
    _insertProduct
}
