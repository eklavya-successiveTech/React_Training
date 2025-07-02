import Link from 'next/link';

export default function HomePage() {
  const linkStyle = {
    textDecoration: 'underline',
    color: 'blue',
  };
  
  return (
    <div>
      <ul>
        <li>
          <Link href="/demo-q1" style={linkStyle}>
            Question 1: Basic Context
          </Link>
        </li>
        <li>
          <Link href="/demo-q2" style={linkStyle}>
            Question 2: Nested Contexts
          </Link>
        </li>
        <li>
          <strong>Question 3: File Routing</strong>
          <p>
            <Link href="/" style={linkStyle}>Home</Link> and{' '}
            <Link href="/about" style={linkStyle}>About</Link> using the main navigation. Try visiting a{' '}
            <Link href="/invalid-page" style={linkStyle}>non-existent page</Link> to see the 404 page.
          </p>
        </li>
        <li>
          <strong>Question 4: Protected Routes</strong>
          <p>
            The <Link href="/about" style={linkStyle}>About</Link> page is protected. If you are not logged in, you will be redirected to the{' '}
            <Link href="/login" style={linkStyle}>Login</Link> page. (Use username: "user", password: "pass")
          </p>
        </li>
        <li>
          <Link href="/dashboard" style={linkStyle}>
            Question 5: Nested Routes
          </Link>
          <p>
            Click the link to visit the Dashboard, which has its own layout and sub-pages (Profile, Settings).
          </p>
        </li>
        <li>
          <Link href="/products" style={linkStyle}>
            Question 6: Dynamic Routes
          </Link>
          <p>
            Click the link to see a list of products. Clicking a product will take you to its own dynamically generated page.
          </p>
        </li>
      </ul>
    </div>
  );
}