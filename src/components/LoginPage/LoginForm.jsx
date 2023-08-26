import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function LoginForm() {
  const [userData, setUserData] = useState([]);
  const [loginData, setLoginData] = useState({
    username: "",
    passoword: "",
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
  console.log(userData);
  console.log(loginData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) =>
        user.username === loginData.username &&
        user.password === loginData.passoword
    );
    console.log(user);
    if (user.id) {
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
      console.log("dang nhap thanh cong", user);
      navigate("/");
    } else {
      console.log("sai thong tin dang nhap");
    }
  };

  return (
    <div id="body">
      <div id="container">
        <h1>Register Form</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              className="form-control1"
              name="email"
              type="email"
              id="emailRegister"
              placeholder="Email"
              onchange={handleInputChange}
            />
            <div className="error-message" id="emailError" />
          </div>
          <div className="form-control">
            <input
              className="form-control1"
              type="password"
              name="password"
              id="passwordRegister"
              placeholder="Password"
              onchange={handleInputChange}
            />
            <div className="error-message" id="passwordError" />
          </div>

          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
