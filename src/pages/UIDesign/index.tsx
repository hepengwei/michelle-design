/**
 * UI设计页
 */
import React from "react";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import MyImage from "components/MyImage";
import Footer from "components/Footer";
import bannerBg from "images/uiDesign/bannerBg.png";
import pcTerminal1 from "images/uiDesign/pcTerminal1.png";
import pcTerminal2 from "images/uiDesign/pcTerminal2.png";
import pcTerminal3 from "images/uiDesign/pcTerminal3.png";
import pcTerminal4 from "images/uiDesign/pcTerminal4.png";
import mobileTerminal1 from "images/uiDesign/mobileTerminal1.png";
import mobileTerminal2 from "images/uiDesign/mobileTerminal2.png";
import mobileTerminal3 from "images/uiDesign/mobileTerminal3.png";
import mobileTerminal4 from "images/uiDesign/mobileTerminal4.png";
import mobileTerminal5 from "images/uiDesign/mobileTerminal5.png";
import mobileTerminal6 from "images/uiDesign/mobileTerminal6.png";
import icons1 from "images/uiDesign/icons1.png";
import icons2 from "images/uiDesign/icons2.png";
import styles from "./index.module.scss";

const UIDesign = () => {
  return (
    <div className={styles.container}>
      <Banner
        bgUrl={bannerBg}
        backgroundColor="#E5F1EB"
        title="UI设计"
        englishTitle="UI DESIGN"
        des="PC端 / 移动端 / 图标"
      />
      <div className={styles.pcTerminal}>
        <div className={styles.content}>
          <ModuleTitle title="PC端" />
          <div className={styles.box}>
            <MyImage className={styles.imgBox} src={pcTerminal1} width={285} height={400} />
            <MyImage className={styles.imgBox} src={pcTerminal2} width={285} height={400} />
            <MyImage className={styles.imgBox} src={pcTerminal3} width={285} height={400} />
            <MyImage className={styles.imgBox} src={pcTerminal4} width={285} height={400} />
          </div>
        </div>
      </div>
      <div className={styles.mobileTerminal}>
        <div className={styles.content}>
          <ModuleTitle title="移动端" />
          <div className={styles.box}>
            <MyImage className={styles.imgBox} src={mobileTerminal1} width={175} height={280} />
            <MyImage className={styles.imgBox} src={mobileTerminal2} width={175} height={280} />
            <MyImage className={styles.imgBox} src={mobileTerminal3} width={175} height={280} />
            <MyImage className={styles.imgBox} src={mobileTerminal4} width={175} height={280} />
            <MyImage className={styles.imgBox} src={mobileTerminal5} width={175} height={280} />
            <MyImage className={styles.imgBox} src={mobileTerminal6} width={175} height={280} />
          </div>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.content}>
          <ModuleTitle title="图标" />
          <div className={styles.box}>
            <MyImage className={styles.imgBox} src={icons1} width={585} height={350} />
            <MyImage className={styles.imgBox} src={icons2} width={585} height={350} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UIDesign;
