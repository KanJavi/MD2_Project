import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage/LoginPage";
import Register from "./components/RegisterPage/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
}

export default App;
