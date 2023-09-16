import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]); // State lưu trữ giỏ hàng

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/products/${id}`)

        .then((response) => {
          console.log("API response:", response.data);
          console.log(response.data);
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    }
  }, [id]);
  console.log("Product state:", product);

  // Hàm xử lý khi người dùng nhấn vào nút "Thêm vào giỏ hàng"
  const handleBuy = () => {
    // Tạo một bản sao mới của giỏ hàng
    const newCart = [...cart];

    // Thêm sản phẩm vào giỏ hàng
    newCart.push(product);

    setCart(newCart);

    console.log("Giỏ hàng:", newCart);
  };

  return (
    <div className="cart-item">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="dark" onClick={handleBuy}>
            Thêm vào giỏ hàng
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
