import Link from "next/link";
import styles from "../styles/header.module.scss";
export default function Header() {
  return (
    <header className={styles.header}>
        <nav> 
            <Link href="/">
                <a className={ styles.logo}>David Kim</a>
            </Link>
        </nav>
      <nav>
        <Link href="/">
          <a className={styles.subItem}>Work</a>
        </Link>
        <Link href="/about">
          <a className={styles.subItem}>About</a>
        </Link>
      </nav>
    </header>
  );
}
