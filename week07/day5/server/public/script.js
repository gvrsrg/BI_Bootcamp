const url = 'http://127.0.0.1:5000/api/products'
const searchUrl = 'http://127.0.0.1:5000/api/search?'

const productsDiv = document.getElementById('products')

const products = () => {
    fetch(url)
        .then(response => response.json())
        .then(products => {
            render(products)
        })
        .catch(error => console.log(error))
}

products()

const render = (arr) => {
    const html = arr.map((item) => {
        return `<div>${item.name} - ${item.price}</div>`
    })

    productsDiv.innerHTML = html.join('')

}

const search = (event) =>{
    event.preventDefault()
    const name = event.target.name.value //document.getElementById('name').value
    const url = `${searchUrl}name=${name}`
    fetch(url)
        .then(response => response.json())
        .then(products => {
            render(products)
        })
        .catch(error => console.log(error))
}

const addProduct = (event) =>{
    event.preventDefault()
    const name = event.target.name.value
    const price = event.target.price.value
    const product = {
        name,
        price
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(products => {
            products()
        })
        .catch(error => console.log(error))
    products()
}
 