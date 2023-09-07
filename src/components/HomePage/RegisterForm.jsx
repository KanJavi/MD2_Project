import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function RegisterForm() {
  const navigate = useNavigate();
  const initialUser = { username: "", email: "", password: "", rePassword: "" };
  const [user, setUser] = useState(initialUser);
  const [formError, setFormError] = useState({});

  const validateForm = () => {
    const errors = {};

    if (isEmptyValue(user.username)) {
      errors.username = "Vui lòng nhập tên";
    }
    if (isEmptyValue(user.email)) {
      errors.email = "Vui lòng nhập email";
    }
    if (isEmptyValue(user.password)) {
      errors.password = "Vui lòng nhập mật khẩu";
    }
    if (isEmptyValue(user.rePassword)) {
      errors.rePassword = "Vui lòng nhập lại mật khẩu";
    } else if (user.rePassword !== user.password) {
      errors.rePassword = "Nhập lại mật khẩu không đúng";
    }

    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post("http://localhost:8000/users", {
          username: user.username,
          email: user.email,
          password: user.password,
          isLogin: false,
        })
        .then((response) => {
          console.log("Đăng ký thành công:", response.data);
          navigate("/login");
        })
        .catch((error) => {
          console.error("Đăng ký lỗi:", error);
        });
    }
  };

  return (
    <div id="body">
      <div id="container">
        <h1>Đăng Ký</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              className="form-control1"
              name="username"
              type="text"
              id="userNameRegister"
              placeholder="Tên người dùng"
              value={user.username}
              onChange={handleInputChange}
            />
            {formError.username && (
              <div className="error-message" id="usernameError">
                {formError.username}
              </div>
            )}
          </div>
          <div className="form-control">
            <input
              className="form-control1"
              name="email"
              type="email"
              id="emailRegister"
              placeholder="Email"
              value={user.email}
              onChange={handleInputChange}
            />
            {formError.email && (
              <div className="error-message" id="usernameError">
                {formError.email}
              </div>
            )}
          </div>
          <div className="form-control">
            <input
              className="form-control1"
              type="password"
              name="password"
              id="passwordRegister"
              placeholder="Mật khẩu"
              value={user.password}
              onChange={handleInputChange}
            />
            {formError.password && (
              <div className="error-message" id="usernameError">
                {formError.password}
              </div>
            )}
          </div>
          <div className="form-control">
            <input
              className="form-control1"
              type="password"
              name="rePassword"
              id="comfirmPasswordRegister"
              placeholder="Nhập lại mật khẩu"
              value={user.rePassword}
              onChange={handleInputChange}
            />
            {formError.rePassword && (
              <div className="error-message" id="usernameError">
                {formError.rePassword}
              </div>
            )}
          </div>
          <button type="submit" className="btn-submit">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
