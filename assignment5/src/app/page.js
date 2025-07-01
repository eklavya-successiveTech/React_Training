import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <ul>
        <li><Link href="/question1">Question1</Link></li>
        <li><Link href="/question2">Question2</Link></li>
        <li><Link href="/question3">Question3</Link></li>
        

      </ul>
    </div>
  );
}
