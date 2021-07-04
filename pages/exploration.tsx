import styles from "../styles/workPage.module.scss";
import Card from "../components/card";
import { useRouter } from "next/router";
import Badge from "../components/badge";
import classNames from "classnames/bind";

const className = classNames.bind(styles);

export default function Work() {
  const router = useRouter();

  function handleClick(href: string) {
    router.push(href);
  }
  return (
    <div className={styles.wrapper}>
      <section className={styles.topBlock}></section>
      <div className={styles.breadCrumbList}>
        <a className={styles.breadCrumb} onClick={() => router.push("/")}>
          home
        </a>
        {" / "}
        <a>exploration</a>
      </div>
      <section className={styles.contents}>
        <Card theme="dark" onClick={() => {}}>
          <a
            href="https://gen-art-simulator.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <h6 className={styles.header}>Generative Art Simulator</h6>{" "}
            <p>A utility tool to experiment with randomly generating 3D art.</p>
            <span className={styles.more}>Learn More</span>
            <div className={styles.badgeList}>
              <Badge>ThreeJS</Badge>
              <Badge>Generative Art</Badge>
            </div>
          </a>
        </Card>
        <Card
          theme="dark"
          onClick={() => handleClick("/exploration/generativeart")}
        >
          {" "}
          <h6 className={styles.header}>Collection of Generative Art</h6>{" "}
          <p>Collection of generatie art I liked enough to save. </p>
          <span className={styles.more}>Learn More</span>
          <div className={styles.badgeList}>
            <Badge>ThreeJS</Badge>
            <Badge>GLSL</Badge>
            <Badge>Generative Art</Badge>
          </div>
        </Card>
      </section>
    </div>
  );
}
