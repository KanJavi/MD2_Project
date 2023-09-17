import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Navbar.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  let localCart = JSON.parse(localStorage.getItem("cart"));
  console.log("localCart", localCart);
  // setCart(savedCart);
  useEffect(() => {
    // Lấy giỏ hàng từ localStorage khi thành phần được tạo ra
    setCart(localCart);
  }, [localCart.length]);
  console.log("cart", cart);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="navbar-home">
      <div class="container1">
        {" "}
        <Link className="link" to="/" id="logo" href="#home">
          KanJav
        </Link>
        <p>Tel: +81 70 4076 8283</p>
      </div>
      <Navbar
        id="container-navbar"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container id="navbar">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/">
                Trang chủ
              </Link>
              <Link className="link" href="#pricing">
                Giới thiệu
              </Link>
              <Link className="link" to="/product">
                FK310
              </Link>
              <Link className="link" href="#pricing">
                Sản phẩm bán chạy
              </Link>
            </Nav>
            <Nav>
              {isLoggedIn ? (
                // Nếu đã đăng nhập, hiển thị nút "Đăng xuất"
                <Link className="link" to="#" onClick={handleLogout}>
                  <i class="fa-solid fa-right-from-bracket"></i>
                </Link>
              ) : (
                // Nếu chưa đăng nhập, hiển thị nút "Đăng nhập" và "Đăng ký"
                <>
                  <Link className="link" to="/login">
                    Đăng Nhập
                  </Link>
                  <Link eventKey={2} className="link" to="/register">
                    Đăng Ký
                  </Link>
                </>
              )}
              <div id="cart" variant="primary" onClick={handleShow}>
                {" "}
                <i class="fa-solid fa-cart-shopping"></i>
                <span id="count">{cart.length}</span>
              </div>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {cart.length === 0 ? (
                    <p>Giỏ hàng của bạn đang trống.</p>
                  ) : (
                    <ul>
                      {cart.map((item) => (
                        <li key={item.id}>
                          <img src={item.img} />
                          <p>{item.name}</p>
                          <p>Giá: {item.price}</p>
                          <p>Số lượng: {item.amount}</p>
                          <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                          ></AiFillDelete>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to="/cart">
                    {" "}
                    <Button
                      variant="dark"
                      style={{ width: "95%", margin: "0 10px" }}
                    >
                      Go To Cart
                    </Button>
                  </Link>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
