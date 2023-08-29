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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) =>
        user.username === loginData.username &&
        user.password === loginData.password
    );

    console.log(user);
    if (user && user.id) {
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
              name="username"
              type="text"
              id="username"
              placeholder="Username"
              onChange={handleInputChange}
            />
            <div className="error-message" id="usernameError" />{" "}
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
            <div className="error-message" id="passwordError" />
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
