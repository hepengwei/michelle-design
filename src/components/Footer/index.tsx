import React from "react";
import { IMG_PREFIX } from "constants/common";
import useImageSrc from "hooks/useImageSrc";
import logo2 from "images/logo2.png";
// import footerBg from "images/footerBg.png";
import styles from "./index.module.scss";

const footerBg = `${IMG_PREFIX}main/footerBg.png`;

const Footer = () => {
  const footerBgSrc = useImageSrc(footerBg);

  return (
    <div
      className={styles.container}
      style={
        footerBgSrc
          ? {
              backgroundImage: `url(${footerBgSrc})`,
              backgroundSize: "100% 100%",
            }
          : {}
      }
    >
      <div className={styles.content}>
        <img src={logo2} alt="" />
        <div className={styles.rightBox}>
          <div className={styles.text}>用眼看世界，用心做设计</div>
          <div className={styles.statement}>
            声明：本站所有素材版权均为作者本人所有，未经作者授权一律不得商用，违者必究。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
