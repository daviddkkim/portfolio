import styles from "../styles/workPage.module.scss";
import Card from "../components/card";
import { useRouter } from "next/router";
import Badge from "../components/badge"
export default function Work() {
  const router = useRouter();

  function handleClick(href: string) {
    router.push(href);
  }
  return (
    <div className={styles.wrapper}>
      <section className= {styles.topBlock}>
      </section>
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
          <div className={styles.badgeList}>
          <Badge>InfluxData</Badge>
          <Badge>Design System</Badge>
          </div>
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
          <div className={styles.badgeList}>
          <Badge>InfluxData</Badge>
          <Badge>Design System</Badge>
          </div>
        </Card>
      </section>
      <section className={styles.contents}>
        <Card
          theme="dark"
          onClick={() =>
            handleClick("/work/influxdata/product-design/annotations")
          }
        >
          {" "}
          <h6 className={styles.header}>Annotations</h6>{" "}
          <p>Empowering teams to collaborate and share data insights.</p>
          <span className={styles.more}>Learn More</span>
          <div className={styles.badgeList}>
          <Badge>InfluxData</Badge>
          <Badge>Product Design</Badge>
          </div>
        </Card>
        <Card
          theme="dark"
          onClick={() =>
            handleClick("/work/influxdata/product-design/annotations")
          }
        >
          {" "}
          <h6 className={styles.header}>Static Legend</h6>{" "}
          <p>
            Enabling teams to better understand data vizualizations. *Not
            shipped yet.
          </p>
          <span className={styles.more}>Learn More</span>
          <div className={styles.badgeList}>
          <Badge>InfluxData</Badge>
          <Badge>Product Design</Badge>
          </div>
        </Card>
      </section>
    </div>
  );
}
