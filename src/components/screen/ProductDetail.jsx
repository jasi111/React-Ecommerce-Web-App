import React, { useEffect, useState, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { CartContext } from "../base/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "../base/ProductCard";


function ProductDetail() {

  const [productList, setProductList] = useState([]);   

  const params = useParams();
  const prodId = params.productId;

  const [product, setProduct] = useState({});
  const [queryParams] = useSearchParams();
  const price = queryParams.get("price");

  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (prod) => {
    addToCart(prod);
  };

  function loadProductById() {
    console.log("loadProductsBySearchText");
    fetch("https://fakestoreapi.com/products/" + prodId)
      .then((response) => {
        response
          .json()
          .then((data) => {
            setProduct(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function loadViewedProducts() {
    console.log("loadProductsBySearchText");
        fetch("https://fakestoreapi.com/products?limit=4").then((response) => {
      response.json().then((data) => {
        setProductList(data);
        console.log('gfgf',productList)
      });
    });
  }

  useEffect(() => {
    loadViewedProducts()
    loadProductById();
  }, [prodId]);
  return (
    <div>
      <div className="d-flex justify-content-around">
        <div className="border w-50 p-5">
          <img src={product.image} alt="" height={300} />
        </div>
        <div className="w-50 border">
          <h3 className="mt-5 mb-3 ">{[product.title]}</h3>

          <p className="p-3 fw-semibold text-capitalize lh-lg" style={{ textAlign: "justify" }}>
            {product.description}
          </p>
          <h4>Price: ${price}</h4>

          <div>
            <a href="" class="text-nowrap text-decoration-none">
              <i
                class="bi bi-star-fill text-warning"
                style={{ fontSize: "1.1rem" }}
              ></i>
              <i
                class="bi bi-star-fill text-warning"
                style={{ fontSize: "1.1rem" }}
              ></i>
              <i
                class="bi bi-star-fill text-warning"
                style={{ fontSize: "1.1rem" }}
              ></i>
              <i
                class="bi bi-star-fill text-warning"
                style={{ fontSize: "1.1rem" }}
              ></i>
              <i
                class="bi bi-star-fill text-warning"
                style={{ fontSize: "1.1rem" }}
              ></i>
            </a>
          </div>

          <Link
            className="btn bg-blue text-light mt-5 px-4 mb-5"
            style={{ hover: "none" }}
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </Link>

          <Link
          to='/cart'
            className="btn bg-blue text-light ms-5 mt-5 mb-5 px-4"
            style={{ hover: "none" }}
            onClick={() => handleAddToCart(product)}
          >
            Buy Now
          </Link>
        </div>
      </div>

      <div className="row gx-5 gy-3 mx-5 my-3">
      
      <h3 className="bg-blue text-light py-2 mt-5">Customer Also Viewed</h3>
      {productList.map((p) => {
        
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
            <div className="card">
            
              <ProductCard product={p} />
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default ProductDetail;
