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
            onClick={() => router.push("/work/influxdata/design-system")}
          >
            design-system
          </a>
          {" / "}
          <a>annotator</a>
        </div>
        <section className={styles.heroImage}>
          <Image src="/Annotate Plus.png" width={100} height={100}></Image>
        </section>
        <h3 className={styles.sectionalHeader}>
          Figma Plugin for design hand-off
        </h3>
        <h6 className={styles.sectionalHeader}> My role</h6>
        <ul>
          <li>
            Design System Lead - I own the design, engineering, vision, and
            evangelization of Clockface.{" "}
          </li>
          <li>In pursuit of evangelizing Clockface, I created this plugin.</li>
        </ul>
        <h6 className={styles.sectionalHeader}> Introduction</h6>
        <p>
          Annotator is a private Figma Plugin that bridges the gap in the design
          hand-off. It breaks down a design frame into the components that make
          up the frame, then it grabs the documentation link and displays it
          next to the components.
        </p>

        <section className={styles.heroImageMultiple}>
          <Image src="/plugin.gif" width={1440} height={900}></Image>
        </section>
        <h6 className={styles.sectionalHeader}> Why?</h6>
        <p>
          As the company entered a hyper-growth mode following our Series D
          funding, the engineering organization grew massively. With new
          engineers joining the company, I noticed that our UI codebase was
          seeing increased one-off components rather than using the design
          system components. This resulted in disjointed visual and interaction
          experiences through various parts of the application.
          <br />
          <br />
          My research showed the following problems:
          <ul>
            <li>
              Engineers were having a hard time with the discoverability of the
              various components in our design system.
            </li>
            <li>
              The documentation around the components in the design system were
              not robust.
            </li>
            <li>
              Designers, when handing-off the product designs, did not always
              annotate what components they used.
            </li>
          </ul>
          I decided to create a Figma Plugin to automate the annotation of the
          designs with direct links to the storybook documentation of the
          components so that Engineers had clear understanding of what
          components to use and how.
        </p>
        <h6 className={styles.sectionalHeader}> My contributions</h6>
        <p>
          I curated the research agenda to identify the gaps in our
          design/engineering practices. I executed on the research agenda and
          analyzed the findings. Then, I coded the Figma Plugin to solve some of
          the identified gaps.
          <br />
          <br />I am currently analyzing the usage of the plugin so that I can
          iterate on the next versions.
        </p>
      </div>
    </div>
  );
}
