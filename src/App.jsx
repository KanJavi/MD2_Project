import logo from "./logo.svg";
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
function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <div>
      <Navbar size={0}></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/product/:productId" element={<Product></Product>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
