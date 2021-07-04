import styles from "../../styles/workPage.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import Image from "next/image";

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
        <a
          className={styles.breadCrumb}
          onClick={() => router.push("/exploration")}
        >
          exploration
        </a>
        {" / "}
        <a>collection of generative art</a>
      </div>
      <section className={styles.contents}>
        <Image src={"/shader.gif"} width={500} height={500} />
        <Image src={"/blocks.gif"} width={500} height={500} />
      </section>
    </div>
  );
}
