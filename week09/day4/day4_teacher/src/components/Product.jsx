import { useParams, Link, useNavigate } from "react-router-dom";

const Product = (props) => {
  const params = useParams();
  console.log("params=>", params);
  const navigate = useNavigate()

  const toShop = () => {
    navigate('/shop')
  }

  return (
    <>
      <h2>Product {params.id}</h2>
      <Link to='/shop'>Back To Shop</Link>
      <div>
        <button onClick={()=>toShop()}>Navigate to shop</button>
      </div>
    </>
  );
};
export default Product;
