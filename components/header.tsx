import Link from "next/link";
import styles from "../styles/header.module.scss";
export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a>Work</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
      </nav>
    </header>
  );
}
