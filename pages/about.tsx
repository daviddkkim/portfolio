import Image from "next/image";
import Link from "next/link";
import styles from "../styles/about.module.scss";

export default function About() {
  return (
    <div className={styles.heroSection}>
      <section>
        <Image src={"/BlurredMe.png"} width={150} height={150} />
      </section>
      <section>
        <h6 className={styles.headerText}> Hi, I'm David 👋</h6>
        <p>
          {" "}
          I'm a product designer at InfluxData where{" "}
          <span>
            I lead the design systems and data visualization features.
          </span>
        </p>
        <p>
          In my previous lives, I was a product manager building a
          conversational AI platform and a senior software engineer building an
          internal finance platform at Capital One.
        </p>
        <p>
          I'm based in Los Angeles/Virginia but I'm originally from South Korea.
          I'm a competitive olympic weightlifter. I care deeply about making the
          world a more equitable space.
        </p>
        <p>Thanks for checking out my portfolio.</p>
        <ul className={styles.socialMediaList}>
          <a
            href="https://www.linkedin.com/in/david-kim-b21156108/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <li>Linkedin</li>
          </a>
          <a
            href="https://github.com/daviddkkim"
            rel="noopener noreferrer"
            target="_blank"
          >
            <li>Github</li>
          </a>
        </ul>
      </section>
    </div>
  );
}
