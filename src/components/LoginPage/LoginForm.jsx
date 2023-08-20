import React from "react";
import "./LoginForm.css";
function LoginForm() {
  return (
    <div id="body">
      <div id="container">
        <h1>Register Form</h1>
        <form id="form">
          <div className="form-control">
            <input
              className="form-control1"
              name="email"
              type="email"
              id="emailRegister"
              placeholder="Email"
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
