import styles from "../../../../styles/contentPage.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Staticlegend() {
  const router = useRouter();

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.breadCrumbList}>
          <a className={styles.breadCrumb} onClick={() => router.push("/")}>
            home
          </a>
          {" / "}
          <a className={styles.breadCrumb} onClick={() => router.push("/work")}>
            work
          </a>
          {" / "}
          <a className={styles.breadCrumb} onClick={() => router.push("/work")}>
            influxdata
          </a>
          {" / "}
          <a
            className={styles.breadCrumb}
            onClick={() => router.push("/work/influxdata/product-design")}
          >
            product-design
          </a>
          {" / "}
          <a>static-legend</a>
        </div>
        <section className={styles.heroImage}>
          <div className={styles.blur}>
            <Image
              src="/staticlegend__psd.gif"
              width={1440}
              height={900}
            ></Image>
          </div>
        </section>
        <h3>Coming Soon</h3>
      </div>
    </div>
  );
}
