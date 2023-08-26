import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Anh0 from "./img/vang.jpg";
import Anh1 from "./img/vang1.jpg";
import Anh2 from "./img/dodo.jpg";
import Cart from "../Card/Cart";

import "./HomePage.css";

function HomePage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: Anh0,
      name: "FK310 LAⅢSport Sp",
      price: "50.000.000đ",
    },
    {
      id: 2,
      img: Anh1,
      name: "FK310 LAⅢclassic",
      price: "60.000.000đ",
    },
    {
      id: 3,
      img: Anh2,
      name: "FK310 LAⅢSportSp",
      price: "50.000.000đ",
    },
  ]);
  return (
    <div>
      <Navbar></Navbar>
      <Carousel />
      <div className="container">
        <br />
        <h1>Các sản phẩm bán chạy</h1>
        <div className="list-item">
          {products.map((e, i) => (
            <Cart key={i} item={e}></Cart>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
