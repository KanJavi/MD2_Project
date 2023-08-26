import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomePage from "../HomePage/HomePage";
import { Route, Routes, Link } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";

function CollapsibleExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
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
              <Link className="link" href="#pricing">
                FK310
              </Link>
              <Link className="link" href="#pricing">
                Sản phẩm bán chạy
              </Link>
            </Nav>
            <Nav>
              <Link className="link" href="#deets" to="/login">
                Đăng Nhập
              </Link>

              <Link eventKey={2} href="#memes" className="link" to="/register">
                Đăng Ký
              </Link>
              <Button id="cart" variant="primary" onClick={handleShow}>
                <i class="fa-solid fa-cart-shopping"></i>
              </Button>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
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
