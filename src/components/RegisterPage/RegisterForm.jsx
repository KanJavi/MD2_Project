import React from "react";

function RegisterForm() {
  return (
    <div id="body">
      <div id="container">
        <h1>Register Form</h1>
        <form id="form">
          <div className="form-control">
            <input
              className="form-control1"
              name="username"
              type="text"
              id="userNameRegister"
              placeholder="Username"
            />
            <div className="error-message" id="usernameError" />
          </div>
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
          <div className="form-control">
            <input
              className="form-control1"
              type="password"
              name="confirmPassword"
              id="comfirmPasswordRegister"
              placeholder="Confirm password"
            />
            <div className="error-message" id="passwordConfirmError" />
          </div>
          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
