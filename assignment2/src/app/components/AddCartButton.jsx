"use client"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const AddCartButton = ({ value }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(value);
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};
export default AddCartButton;