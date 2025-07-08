"use client"
import AddCartButton from "./AddCartButton";
const Products = () => {
  const productList = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            {product}
            <AddCartButton value={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Products;