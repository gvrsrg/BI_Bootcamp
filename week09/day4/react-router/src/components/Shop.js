import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Shop(props) {
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)


    const [loading, setLoading] = useState(true)


    const all = async () => {
        try {
            setLoading(true)
            const res = await fetch("http://127.0.0.1:3001/api/products")
            const data = await res.json()
            console.log("data after loading=>",data);
            setProducts(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        all();
    }, [])

    const add = async (e) => {
        e.preventDefault()

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, price})

        }
        
        try {
            //setLoading(true)
            const res = await fetch("http://127.0.0.1:3001/api/products", options)
            const data = await res.json()
            console.log("data after adding=>",data);
            setProducts(data)
            //setLoading(false)

        } catch (error) {
            console.log(error)
        }

    }


    if(loading) {
        return <h1>Loading...</h1>
    } else {
        return (
            <>
                <h1>Shop</h1>
                <h2></h2>
                    <form onSubmit={add}>
                        <input type="text" name="name" placeholder='Name...' onChange={(e)=>setName(e.target.value)}/>
                        <input type="number" name="price" placeholder='Price...' onChange={(e)=>setPrice(e.target.value)}/>
                        <input type='submit' value='Add' />

                    </form>
                
                {products &&
                    products.map((product) => {
                        return(
                        <div className="card" key={product.id}>
                            <h2>{product.name}</h2>
                            <h4>{product.price}</h4>
                            <Link to={`/product/${product.id}`}><button>Buy</button></Link>
                        </div>
                        )
                    }
                    )
                }


            </>
        )
    }
}
