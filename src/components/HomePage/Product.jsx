import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const param = useParams();
  console.log(param); //productID2

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        console.log(response.data);
        let dataProduct = response.data;
        let findProduct = dataProduct.find(
          (e) => e.id === Number(param.productId)
        );
        console.log(findProduct);
        setProduct(findProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/carts")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Ham Buy
  const handleBuy = () => {
    console.log("product", cart);
  };
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <div className="container">
        <div className="product-img">
          <img src={product.img} alt="" />
        </div>
        <div className="product-content">
          <h3>{product.name}</h3>
          <br />
          <h4>{product.price}</h4>
          <br />
          <button className="check-out" onClick={handleBuy}>
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
