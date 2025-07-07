import Link from 'next/link'

export default function ServicesComponent() {
  return (
    <div>
      <h1>Services Page</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <p>This is the services page. This component is dynamically loaded.</p>
    </div>
  )
}