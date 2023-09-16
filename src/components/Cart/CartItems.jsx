import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/Context";
import axios from "axios";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, updateCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(cartItems[id]);

  const handleRemoveFromCart = () => {
    // Make an Axios DELETE request to remove the item from the cart
    axios
      .delete(`http://localhost:8000/cart/${id}`)
      .then((response) => {
        // Update the cart in the context with the updated data
        updateCart(response.data);
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };

  const handleUpdateQuantity = (newQuantity) => {
    // Make an Axios PUT request to update the item quantity in the cart
    axios
      .put(`http://localhost:8000/cart/${id}`, { quantity: newQuantity })
      .then((response) => {
        // Update the cart in the context with the updated data
        updateCart(response.data);
        setQuantity(newQuantity); // Update the local quantity state
      })
      .catch((error) => {
        console.error("Error updating item quantity:", error);
      });
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={handleRemoveFromCart}>-</button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => handleUpdateQuantity(Number(e.target.value))}
          />
          <button onClick={() => handleUpdateQuantity(quantity + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};
