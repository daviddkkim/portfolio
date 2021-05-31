import styles from "../../../../styles/contentPage.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Annotator() {
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
          <a>annotations</a>
        </div>
        <section className={styles.heroImage}>
          <Image
            src="/Annotations.gif"
            width={1440}
            height={900}
            priority={true}
          ></Image>
        </section>
        <h3 className={styles.sectionalHeader}>
          Empowering teams to collaborate and share data insights
        </h3>
        <h6 className={styles.sectionalHeader}> My role</h6>
        <ul>
          <li>
            Product Designer - I led the design and growth hacking of this
            feature.{" "}
          </li>
        </ul>
        <h6 className={styles.sectionalHeader}> Introduction</h6>
        <p>
          Annotations are notes of explanation or comments added to graph views.
          Annotations allow teams to share useful contextual information about a
          point in time or time ranges. Users can use annotations to correlate
          the effects of important events, such as system changes or outages
          across multiple metrics.
        </p>
        <h6 className={styles.sectionalHeader}> Why?</h6>
        <p>
          One of the major usecases for a time-series database is monitoring.
          Our customers monitor wide variety of things ranging from simple API's
          to plant growth to locations of stars in space.
          <br />
          <br />
          A common need among these usecases are the need for a team to come
          together with a shared understanding of data. The larger the org,
          data, and the more specific the expertise gets, this becomes a hard
          task.
          <br />
          <br />
          What we also found in our product's usage data is that when teams
          collaborate, the rate of usage goes up exponentially and also the
          likelihood for the customers to convert to paying customers.
          <br />
          <br />
          We saw an opportunity to provide a feature that would help teams reach
          a shared understanding of data, promote collaboration, and thus our
          product usage.
        </p>

        <h6 className={styles.sectionalHeader}> My contributions</h6>
        <p>
          I collaborated with two engineers and a product manager as the sole
          product designer on this feature. I curated a growth agenda around the
          feature by setting up product metrics through Google Analytics,
          partnering with the marketing team to set up a campaign, and hacking
          together an in-app guidance to help users discover this feature.
          <br />
          <br />I am currently analyzing the usage of this feature so that I can
          iterate on the next versions.
        </p>
        <section className={styles.heroImageMultiple}>
          <Image src="/Showme1.gif" width={1440} height={900}></Image>
        </section>
        <h6 className={styles.sectionalHeader}> Relevant Links</h6>
        <ul className={styles.socialMediaList}>
          <a
            href="https://docs.influxdata.com/influxdb/cloud/visualize-data/annotations/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <li>Documentation</li>
          </a>
          <a
            href="https://www.youtube.com/watch?v=5NEplCesNAc"
            rel="noopener noreferrer"
            target="_blank"
          >
            <li>Youtube Video</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
