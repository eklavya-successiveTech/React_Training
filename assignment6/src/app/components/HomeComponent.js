import Link from 'next/link'

export default function HomeComponent() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <p>Welcome to the home page. This component is dynamically loaded.</p>
    </div>
  )
}