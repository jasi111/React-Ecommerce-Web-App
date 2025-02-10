import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function ProductCard(props) {
  var product = props.product;
 
  const {addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState("");

  const handleAddToCart = (prod) => {    
    addToCart(prod);
    
};

  return (
    <div className="h-100 d-flex flex-column">
      <Link to={"/products/" + product.id + "?price=" + product.price}>
      <img
        src={product.image}
        className="card-img-top object-fit-contain w-50 mx-auto"
        alt="..."
      />
      </Link>
      <div className="card-body d-flex flex-column">
               <div>
          <Link to={"/products/" + product.id + "?price=" + product.price} className='fw-semibold text-center text-decoration-none text-dark'>
            {product.title}
          </Link>
        </div>
        <h5 className="mt-2 fw-bold">${product.price}</h5>

       
        <Link
          
          className="btn bg-blue text-light mt-auto" style={{hover:'none'}}
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </Link>        
      </div>

      
    </div>
     
  );
}

export default ProductCard;
