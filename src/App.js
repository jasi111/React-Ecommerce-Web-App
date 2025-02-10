import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BannerCarrousel from "./components/banner/BannerCarrousel";
import { Routes, Route } from "react-router-dom";
import About from "./components/screen/About.jsx";
import Home from "./components/screen/Home.jsx";
import Contact from "./components/screen/Contact.jsx";
import Products from "./components/screen/Products.jsx";
import ProductDetail from "./components/screen/ProductDetail.jsx";
import Cart from "./components/screen/Cart.jsx";


function App() {
  return (
 
    <div className="App">
      <Navbar />
      <BannerCarrousel />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>} />

        
      </Routes>
    </div>

  );
}

export default App;
