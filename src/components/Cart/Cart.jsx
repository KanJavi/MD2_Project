import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const [cart, setCart] = useState([]);
  let localCart = JSON.parse(localStorage.getItem("cart"));
  console.log("localCart", localCart);
  // setCart(savedCart);
  useEffect(() => {
    // Lấy giỏ hàng từ localStorage khi thành phần được tạo ra
    setCart(localCart);
  }, [localCart.length]);
  console.log("cart", cart);
  return (
    <div className="home">
      <div className="productContainer">
        {cart.length === 0 ? (
          <p>Giỏ hàng của bạn đang trống</p>
        ) : (
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.img} alt={item.name} />
                  </Col>
                  <Col md={2}>
                    <span>{item.name}</span>
                  </Col>
                  <Col md={2}>đ {item.price}</Col>
                  <Col md={2}>
                    <Form.Control as="select"></Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light">
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
      <div className="filters summary">
        <span className="title">Tổng </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Tổng: đ</span>
        <Button variant="dark" type="button">
          Thanh toán
        </Button>
      </div>
    </div>
  );
};

export default Cart;
