import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";
import { Link } from "react-router-dom";

function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="wrapper">
        {/* Sidebar Holder */}
        <nav id="sidebar">
          <div className="sidebar-header" id="sidebar-title">
            <h3>
              <i className="bi bi-people-fill" /> Admin Page
            </h3>
            <strong>
              <i className="bi bi-list" />
            </strong>
          </div>
          <ul className="list-unstyled components">
            <li>
              <Link to="/">
                <i className="bi bi-house" />
                Home
              </Link>
            </li>
            <li className="">
              <a href="./admin/productManager.html">
                <i className="bi bi-pencil-square" />
                Product Manager
              </a>
            </li>
            <li className="">
              <a href="./admin/accountManager.html">
                <i className="bi bi-search" />
                Account Manager
              </a>
            </li>
            <li className="">
              <a href="./admin/buyHistory.html">
                <i className="bi bi-clock-history" />
                Buy History
              </a>
            </li>
          </ul>
        </nav>
        {/* Page Content Holder */}
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Product Management
              </a>
            </div>
          </nav>
          <div className="container" id="main">
            <div className="row justify-content-center align-items-center mt-4">
              <div className="col-lg-6 col-lg-offset-4">
                <form>
                  <div className="form-group row mb-3">
                    <label
                      htmlFor="input-id"
                      className="col-sm-3 col-form-label"
                    >
                      Product ID
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        className="form-control"
                        id="input-id"
                        placeholder="Input ID"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label
                      htmlFor="input-name"
                      className="col-sm-3 col-form-label"
                    >
                      Product Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="input-name"
                        placeholder="Input Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label
                      htmlFor="input-price"
                      className="col-sm-3 col-form-label"
                    >
                      Product Price
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        className="form-control"
                        id="input-price"
                        placeholder="Input Price"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label
                      htmlFor="input-price"
                      className="col-sm-3 col-form-label"
                    >
                      Product Image
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="file"
                        className="form-control"
                        id="input-image"
                        required=""
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="submit-btn"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="container" style={{ maxWidth: "90%" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody id="tbody" />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
