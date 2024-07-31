import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function Product(props) {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const params = useParams()
  const {id} = params

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/api/products/${id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data)
      console.log(data)
      setLoading(false)
    })
  }, [])

  const navigate = useNavigate()

  const toShop = () => {
    navigate("/shop")
  }

  return (
    <>
      <h1>Product</h1>

      {loading ? <h1>Loading...</h1> : product.map(item => {
        return (<div>
                    <h1>{item.name}</h1>
                    <h4>{item.price}</h4>
                </div>)
                }) 
        }


      <div>
        <button onClick={() => toShop()}>Go to shop</button>
      </div>
    </>
  )
}
