import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <ul>
        <li><Link href="/question1">Question1</Link></li>
        <li><Link href="/question2">Question2</Link></li>
        <li><Link href="/question3">Question3</Link></li>
        <li><Link href="/question4">Question4</Link></li>
        <li><Link href="/question5">Question5</Link></li>
        <li><Link href="/question6">Question6</Link></li>
        <li><Link href="/question7">Question7</Link></li>
        <li><Link href="/question8">Question8</Link></li>
        <li><Link href="/question10">Question10</Link></li>
        <li><Link href="/question11">Question11</Link></li>
        <li><Link href="/question12">Question12</Link></li>
        <li><Link href="/question13">Question13</Link></li>
        <li><Link href="/question14">Question14</Link></li>

      </ul>
    </div>
  );
}
