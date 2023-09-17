import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  let localCart = JSON.parse(localStorage.getItem("cart"));
  console.log("localCart", localCart);
  useEffect(() => {
    if (localCart) {
      // Khởi tạo object để lưu trữ số lượng cho từng sản phẩm trong giỏ hàng
      const quantities = {};
      localCart.forEach((item) => {
        quantities[item.id] = item.amount;
      });

      setCart(localCart);
      setProductQuantities(quantities);
    }
  }, []);

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    // Xóa số lượng sản phẩm khỏi lưu trữ
    setProductQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[productId];
      return newQuantities;
    });

    updateLocalStorage(updatedCart);
  };

  // Cập nhật số lượng cho sản phẩm trong giỏ hàng
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity !== productQuantities[productId]) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: newQuantity,
      }));

      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, amount: newQuantity } : item
      );

      setCart(updatedCart);
      updateLocalStorage(updatedCart);
    }
  };

  // Tính tổng giá trị của giỏ hàng
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * productQuantities[item.id];
    });
    console.log("total", total);
    return total;
  };

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const calculateTotalItems = () => {
    let totalItems = 0;
    cart.forEach((item) => {
      totalItems += productQuantities[item.id];
    });
    return totalItems;
  };

  // Cập nhật localStorage sau khi thay đổi giỏ hàng
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col md={2}>
                  <Image src={item.img} alt={item.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{item.name}</span>
                </Col>
                <Col md={2}>{item.price} VNĐ</Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={productQuantities[item.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  >
                    {Array.from({ length: 10 }, (_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Tổng {calculateTotalItems()} Sản phẩm</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          Tổng giá tiền: {calculateTotal()} VNĐ
        </span>{" "}
        <Link to="pay">
          {" "}
          <Button variant="light" type="button">
            Thanh Toán
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
