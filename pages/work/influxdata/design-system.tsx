import Banner from "../../../components/banner";
import styles from "../../../styles/workPage.module.scss";
import Card from "../../../components/card";
import { useRouter } from "next/router";

export default function DesignSystem() {
  const router = useRouter();

  function handleClick(href: string) {
    router.push(href);
  }
  return (
    <div className={styles.wrapper}>
      <Banner project="design-system" theme={"darkSwirl"}></Banner>
      <div className={styles.breadCrumbList}>
        <a className={styles.breadCrumb} onClick={() => router.push("/")}>
          home
        </a>
        {" / "}
        <a className={styles.breadCrumb} onClick={() => router.push("/work")}>
          work
        </a>
        {" / "}
        <a>influxdata</a>
        {" / "}
        <a>design-system</a>
      </div>
      <section className={styles.contents}>
        <Card
          theme="dark"
          onClick={() =>
            handleClick("/work/influxdata/design-system/clockface")
          }
        >
          {" "}
          <h6 className={styles.header}>Clockface</h6>{" "}
          <p>InfluxData's open-source design system for web products.</p>
          <span className={styles.more}>Learn More</span>
        </Card>
        <Card
          theme="dark"
          onClick={() =>
            handleClick("/work/influxdata/design-system/annotator")
          }
        >
          {" "}
          <h6 className={styles.header}>Annotator</h6>{" "}
          <p>A Figma plugin to bridge the gap in design hand-off. </p>
          <span className={styles.more}>Learn More</span>
        </Card>
      </section>
    </div>
  );
}
