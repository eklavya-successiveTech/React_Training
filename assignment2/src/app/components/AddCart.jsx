"use client"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const AddCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items:</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <p>Total Items: {cart.length}</p>
    </div>
  );
};

export default AddCart;