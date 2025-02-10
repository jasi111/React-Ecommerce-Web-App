import React from "react";
import { useContext } from "react";
import { CartContext } from "../base/CartContext";
import { Link } from "react-router-dom";

function TestCart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // const {addToCart } = useContext(CartContext);

  const handleAddToCart = (prod) => {
    addToCart(prod);
  };

  const handleRemoveFromCart = (prod) => {
    removeFromCart(prod);
  };

  const cartTotalPrice = (cartItems) => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      total += item.price * item.quantity;
    }
    return total;
  };
  const totalPrice = cartTotalPrice(cartItems);
  // console.log('trtrt', totalPrice)

  const cartTotalProducts = (cartItems) => {
    let totalProducts = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      totalProducts = item.quantity;
    }
    return totalProducts;
  };
  const totalItems = cartTotalProducts(cartItems);

  return (
    <>
      <h2 className="mt-4 sticky-top">Your Cart</h2>
      <div className="container-fluid my-5  d-flex">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No items in the cart
                </td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <tr key={item.id}>
                  <th scope="row" className="w-25">
                    <img
                      src={item.image}
                      style={{ width: "100px", marginBottom: "-30px" }}
                      className="card-img-top object-fit-contain"
                      alt={item.title}
                    />
                    <br />
                    {item.title}
                  </th>
                  <td>${item.price}</td>
                  <td>
                    <div className="d-inline-flex align-items-center">
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        className="btn bg-green btn-light fs-3 py-0 fw-bold"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        className="form-control "
                        style={{ width: "50px" }}
                      />
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="btn bg-green btn-light fs-5 fw-bold"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div
          className="sticky-top border bg-blue text-light  pt-2 w-50 d-flex flex-column"
          style={{ height: "35vh" }}
        >
          <h4 className="fw-bold">Cart Summary</h4>
          <p className="fs-5 fw-bold mt-5">Total Items: {totalItems}</p>
          <p className="fs-5 fw-bold mt-4">Total Price: ${totalPrice}</p>
          <button className="btn rounded-5 bg-green text-dark text-light fw-semibold px-1 mx-5 mb-2 mt-auto">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default TestCart;
