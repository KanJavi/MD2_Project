import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Kết nối với chúng tôi trên các mạng xã hội</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset"></a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  Công ty trách nhiệm hữu hạn một thành viên
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Theo dõi</h6>
                <p>
                  <a href="#!" className="text-reset">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Line
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Zalo
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                <p>
                  <i className="fas fa-home me-3" />
                  Kanagawa, Kawasaki, Japan
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  kanjav34@hotmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> +81 70 4076 8283
                </p>
                <p>
                  <i className="fas fa-print me-3" /> +81 34 123 789
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Kan_Jav
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}

export default Footer;
