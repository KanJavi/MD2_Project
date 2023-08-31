import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userData, setUserData] = useState([]);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (isEmptyValue(loginData.email)) {
      newErrors.email = "Vui lòng nhập email";
      isValid = false;
    }
    if (isEmptyValue(loginData.password)) {
      newErrors.password = "Vui lòng nhập mật khẩu";
      isValid = false;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    console.log(user);
    if (validateForm(user && user.id)) {
      axios
        .patch(`http://localhost:8000/users/${user.id}`, {
          isLogin: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      localStorage.setItem("isLoginId", user.id);
      console.log("Đăng nhập thành công", user);
      navigate("/");
    } else {
      console.log("Sai thông tin đăng nhập");
    }
  };

  return (
    <div id="body">
      <div id="container">
        <h1>Login Form</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              className="form-control1"
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleInputChange}
            />

            {errors.email && (
              <div className="error-message" id="emailError">
                {errors.email}
              </div>
            )}
          </div>
          <div className="form-control">
            <input
              className="form-control1"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
            {errors.password && (
              <div className="error-message" id="passwordError">
                {errors.password}
              </div>
            )}
          </div>

          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
