import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Anh0 from "./img/vang.jpg";
import Anh1 from "./img/vang1.jpg";
import Anh2 from "./img/dodo.jpg";
import Cart from "../Card/Cart";
import Product from "../HomePage/Product";
import { Cartcontext } from "../../context/Context";

import "./HomePage.css";

function HomePage(props) {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "http://www.fuki.co.jp/images/top-ryuusei26.jpg",
      name: "FK310 LAⅢSport Sp",
      price: "50.000.000đ",
    },
    {
      id: 2,
      img: "http://www.fuki.co.jp/images/sport02.jpg",
      name: "FK310 LAⅢclassic",
      price: "60.000.000đ",
    },
    {
      id: 3,
      img: "http://www.fuki.co.jp/images/sportsp2.jpg",
      name: "FK310 LAⅢSportSp",
      price: "50.000.000đ",
    },
    {
      id: 4,
      img: "http://www.fuki.co.jp/images/sportsp2.jpg",
      name: "FK310 LAⅢSportSp",
      price: "50.000.000đ",
    },
  ]);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Carousel />
      <div className="container">
        <br />
        <h1>Các sản phẩm bán chạy</h1>
        <div className="list-item">
          {products.map((e, i) => (
            <Cart key={i} item={e} cart={cart} setCart={setCart}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
