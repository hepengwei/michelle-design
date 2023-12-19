import React from "react";
import { useLocation } from "react-router-dom";
import InteractionEyes from "components/InteractionEyes";
import HeaderButton from "components/HeaderButton";
import { THAT_PAGE_URL } from "constants/common";
import logo1 from "images/logo1.png";
import styles from "./index.module.scss";

const Header = () => {
  const location = useLocation();
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
          <HeaderButton
            text="首页"
            toUrl="/main"
            actived={["/", "/main"].includes(location.pathname)}
          />
          <HeaderButton
            text="电商设计"
            toUrl="/eCommerceDesign"
            actived={location.pathname === "/eCommerceDesign"}
          />
          <HeaderButton
            text="平面设计"
            toUrl="/graphicDesign"
            actived={location.pathname === "/graphicDesign"}
          />
          <HeaderButton
            text="UI设计"
            toUrl="/uiDesign"
            actived={location.pathname === "/uiDesign"}
          />
          <HeaderButton text="视频制作" toUrl="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
