import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./components/Admin/Admin";
import Product from "./components/HomePage/Product";
import RegisterForm from "./components/HomePage/RegisterForm";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/HomePage/LoginForm";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Pay from "./components/Pay/Pay";

function App() {
  const [cartItems, setCartItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const [product, setProduct] = useState([]);
  const [updateCart, setUpdateCart] = useState([]);
  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <div>
      <Navbar updateCart={updateCart} cart={cart} size={cart.length}></Navbar>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/product/:productId" element={<Product />} />
        <Route
          cart={cart}
          setCart={setCart}
          updateCart={updateCart}
          path="/product"
          element={<Product />}
        />
        <Route cart={cart} path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/pay" element={<Pay></Pay>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
