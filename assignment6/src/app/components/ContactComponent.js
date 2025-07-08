import Link from 'next/link'

export default function ContactComponent() {
  return (
    <div>
      <h1>Contact Page</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
      </nav>
      <p>This is the contact page. This component is dynamically loaded.</p>
    </div>
  )
}