import styles from "../styles/banner.module.scss";
import Image from "next/image";
import classNames from "classnames/bind";

type BannerProps = {
  project?: string;
  theme?: string;
};

const className = classNames.bind(styles);

export default function Banner(props: BannerProps) {
  const popStyles = className("pop", {
    [`gradient-${props.theme}`]: props.theme,
  });

  const backgroundStyles = className("gradientBackground", {
    [`gradient-${props.theme}`]: props.theme,
  });
  return (
    <div className={styles.banner}>
      <div className={popStyles}> </div>
      <div className={backgroundStyles}> </div>
      <div className={styles.static}> </div>
      {props.project === "design-system" && (
        <Image src={"/DesignSystem.png"} width={250} height={250} />
      )}
      {props.project === "product-design" && (
        <Image src={"/ProductDesign.png"} width={250} height={250} />
      )}
    </div>
  );
}
