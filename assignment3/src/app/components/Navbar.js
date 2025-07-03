import Link from 'next/link';

export default function Navbar() {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  };

  return (
    <nav style={navStyle}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
}