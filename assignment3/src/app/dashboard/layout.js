import Link from 'next/link';

export default function DashboardLayout({ children }) {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  };

  return (
    <section>
      <h2>Dashboard Section</h2>
      <nav style={navStyle}>
        <Link href="/dashboard">Dashboard Home</Link>
        <Link href="/dashboard/profile">Profile</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
      {children}
    </section>
  );
}