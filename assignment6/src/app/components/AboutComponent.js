import Link from 'next/link'

export default function AboutComponent() {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <p>This is the about page. This component is dynamically loaded.</p>
    </div>
  )
}