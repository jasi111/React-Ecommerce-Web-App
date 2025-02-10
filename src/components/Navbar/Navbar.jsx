import React, { useContext, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo3.png";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../base/CartContext";

function Navbar() {
  const { setSearchText } = useContext(CartContext);
  const [inputText, setInputText] = useState("");
  const { items, setItems, notification } = useContext(CartContext);
 
  const onSearchChange = (event) => {
    setInputText(event.target.value); 
  };
  
  const handleSearch = (event) => {
    event.preventDefault(); 
    setSearchText(inputText); 
  };

  return (
    <>
      <div
        className="navbar navbar-expand-lg nav-bg border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={Logo}
              alt=""
              className="img-fluid"
              style={{ width: "150px", height: "100px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <form className="nav-link d-flex w-100 " role="search">
                  <input
                    onChange={onSearchChange}
                    className="form-control bg-light text-dark rounded"
                    style={{ width: "400px" }}
                    type="search"
                    placeholder="Search Amazon.ae"
                    aria-label="Search"
                  />
                  <button className="btn bg-light" type="submit">
                    <i className="fa-solid fa-magnifying-glass text-dark"></i>
                  </button>
                </form>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4 mt-4">
                <NavLink
                  className="nav-link text-light fw-semibold"
                  to="/"
                  role="button"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-4 mt-4 mt-4">
                <NavLink
                  to="/products"
                  className="nav-link text-light fw-semibold"
                  role="button"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item me-4 mt-4">
                <NavLink
                  className="nav-link text-light fw-semibold"
                  to="/about"
                  role="button"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item me-4 mt-4">
                <NavLink
                  to="/contact"
                  className="nav-link text-light fw-semibold"
                  role="button"
                >
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item me-4 mt-4">
                <NavLink
                  to="/contact"
                  className="nav-link text-light fw-semibold"
                  role="button"
                >
                  Login
                </NavLink>
              </li>

              <li className=" nav-item me-4">
                <NavLink to="/cart" className=" mt-2 nav-link text-light">
                  {" "}
                  {items}
                  <br></br>
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ fontSize: "30px" }}
                  ></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* For AddtoCart Notification  -{notification} from cartContext */}
      {notification && (
        <div className="alert alert-success mt-2 sticky-top">
          {notification}
        </div>
      )}
    </>
  );
}

export default Navbar;
