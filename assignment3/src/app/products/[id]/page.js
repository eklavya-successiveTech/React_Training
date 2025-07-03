import GoBackButton from '../../components/GoBackButton';

const products = [
  { id: '1', name: 'Laptop', description: 'A powerful laptop.' },
  { id: '2', name: 'Smartphone', description: 'A smart mobile phone.' },
  { id: '3', name: 'Tablet', description: 'A portable tablet device.' },
];


export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <GoBackButton />
    </div>
  );
}