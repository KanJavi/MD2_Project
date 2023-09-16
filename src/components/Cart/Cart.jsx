import React, { useContext } from "react";
import { ShopContext } from "../../context/Context";
import axios from "axios";
import { CartItems } from "./CartItems";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { CartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const naivgate = useNavigate();

  return <div></div>;
}

export default Cart;
