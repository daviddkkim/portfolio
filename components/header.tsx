import Link from "next/link";
import styles from "../styles/header.module.scss";
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <nav className={styles.logo}>
          <a>David Kim</a>
          <div className={styles.logoAccent}></div>
        </nav>
      </Link>
      <nav>
        <Link href="/work">
          <a className={styles.subItem}>Work</a>
        </Link>
        <Link href="/about">
          <a className={styles.subItem}>About</a>
        </Link>
      </nav>
    </header>
  );
}
