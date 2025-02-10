import React from 'react'
import { useEffect, useState, useContext } from "react";
import ProductCard from "../base/ProductCard";
import { CartContext } from '../base/CartContext';


function Home() {
  const { searchText } = useContext(CartContext);
  const [productList, setProductList] = useState([]);   
  
  function loadOfferProducts() {
    console.log("loadProductsBySearchText");
        fetch("https://fakestoreapi.com/products?limit=16").then((response) => {
      response.json().then((data) => {
        setProductList(data);
        console.log('gfgf',productList)
      });
    });
  }

  const loadProducts = () => {
    const apiURL = searchText
      ? `https://fakestoreapi.com/products?search=${searchText}`
      : "https://fakestoreapi.com/products?limit=16";

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      });
  };

  useEffect(() => {
    loadOfferProducts();
    loadProducts();
  }, [searchText]); 

  return (

    
    <div className="row gx-5 gy-3 mx-5 my-3">
      
      <h3 className="bg-blue text-light py-2 mt-5">PRODUCTS ON DEAL</h3>
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
export default Home