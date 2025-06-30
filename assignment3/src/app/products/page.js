import Link from 'next/link';

const products = [
  { id: '1', name: 'Laptop' },
  { id: '2', name: 'Smartphone' },
  { id: '3', name: 'Tablet' },
];

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}