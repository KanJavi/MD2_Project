import React, { useEffect, useState } from "react";
import { Card, Button, Offcanvas } from "react-bootstrap";
import axios from "axios";
import "./Product.css";
import Navbar from "../Navbar/Navbar";

const Product = ({}) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        console.log("API response:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });

    // Lấy giỏ hàng từ localStorage khi thành phần được tạo ra
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleBuy = (product) => {
    const newCart = [...cart];
    const existingCartItem = newCart.find((item) => item.id === product.id);

    if (existingCartItem) {
      existingCartItem.amount += 1;
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm vào giỏ hàng với số lượng là 1
      newCart.push({ ...product, amount: 1 });
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);
    console.log("Giỏ hàng:", newCart);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="cart-item" key={product.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Button variant="dark" onClick={() => handleBuy(product)}>
                Thêm vào giỏ hàng
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Product;
