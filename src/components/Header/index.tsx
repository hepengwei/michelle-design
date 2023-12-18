import React from "react";
import InteractionEyes from "components/InteractionEyes";
import HeaderButton from "components/HeaderButton";
import { THAT_PAGE_URL } from "constants/common";
import logo1 from "images/logo1.png";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img
            src={logo1}
            alt=""
            onClick={() => {
              const isDev =
                !process.env.NODE_ENV || process.env.NODE_ENV === "development";
              if (isDev) {
                window.open(THAT_PAGE_URL, "_blank", "top=200,left=100");
              } else {
                window.open(
                  "https://michellez.cn",
                  "_blank",
                  "top=200,left=100"
                );
              }
            }}
          />
          <InteractionEyes />
        </div>
        <div className={styles.right}>
          <HeaderButton text="首页" actived />
          <HeaderButton text="电商设计" toUrl="/login" />
          <HeaderButton text="平面设计" toUrl="/login" />
          <HeaderButton text="UI设计" toUrl="/login" />
          <HeaderButton text="视频制作" toUrl="/login" />
        </div>
      </div>
    </div>
  );
};

export default Header;
