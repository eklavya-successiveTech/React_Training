"use client"
import { CartProvider } from "../context/CartContext";
import Products from "../components/Products";
import AddCart from "../components/AddCart";
const Shopping = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Page</h1>
        <Products />
        <AddCart />
      </div>
    </CartProvider>
  );
};
export default Shopping;