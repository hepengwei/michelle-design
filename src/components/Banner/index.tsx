import React from "react";
import useImageSrc from "hooks/useImageSrc";
import styles from "./index.module.scss";

interface BannerProps {
  bgUrl: string;
  title: string;
  des: string;
  englishTitle?: string;
  backgroundColor?: string;
}

const Banner = (props: BannerProps) => {
  const { bgUrl, title, des, englishTitle, backgroundColor } = props;
  const bgSrc = useImageSrc(bgUrl);

  return (
    <div
      className={styles.container}
      style={
        bgSrc
          ? {
              backgroundImage: `url(${bgSrc})`,
              backgroundSize: "100% 100%",
            }
          : { backgroundColor }
      }
      data-englishtitle={englishTitle}
    >
      <div className={styles.box}>
        <span className={styles.title}>{title}</span>
        <span className={styles.des}>{des}</span>
      </div>
    </div>
  );
};

export default Banner;
