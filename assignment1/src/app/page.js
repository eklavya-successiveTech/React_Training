import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>React Assignment 1</h1>
    <ul>
      <li><Link href="/greeting">Greeting Component</Link></li>
      <li><Link href="/usercard">Usercard Component</Link></li>
      <li><Link href="/weather">Weather Component</Link></li>
      <li><Link href="/counter">Counter Component</Link></li>
      <li><Link href="/tasklist">Tasklist Component</Link></li>
      <li><Link href="/button">Button Component</Link></li>
    </ul>
   </div>
  );
}
