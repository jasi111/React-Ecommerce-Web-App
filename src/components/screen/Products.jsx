import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../base/ProductCard";



function Products(props) {
  const [productList, setProductList] = useState([]);   

  function loadProducts() {
    console.log("loadProductsBySearchText");
        fetch("https://fakestoreapi.com/products").then((response) => {
      response.json().then((data) => {
        setProductList(data);
        console.log('gfgf',data)
      });
    });
  }

  useEffect(() => {
    loadProducts();
  }, []); 

  return (

    
    <div className="row gx-5 gy-3 mx-5 my-3">
        <h3 className="bg-blue text-light py-2 mt-5">PRODUCTS</h3>
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
  
  );
}

export default Products