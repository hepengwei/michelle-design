/**
 * UI设计页
 */
import React from "react";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import MyImage from "components/MyImage";
import Footer from "components/Footer";
import bannerBg from "images/uiDesign/bannerBg.png";
import eCommerceDesign1 from "images/eCommerceDesign1.png";
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
            <MyImage src={eCommerceDesign1} width={285} height={400} />
            <MyImage src={eCommerceDesign1} width={285} height={400} />
            <MyImage src={eCommerceDesign1} width={285} height={400} />
            <MyImage src={eCommerceDesign1} width={285} height={400} />
          </div>
        </div>
      </div>
      <div className={styles.mobileTerminal}>
        <div className={styles.content}>
          <ModuleTitle title="移动端" />
          <div className={styles.box}>
            <MyImage src={eCommerceDesign1} width={175} height={280} />
            <MyImage src={eCommerceDesign1} width={175} height={280} />
            <MyImage src={eCommerceDesign1} width={175} height={280} />
            <MyImage src={eCommerceDesign1} width={175} height={280} />
            <MyImage src={eCommerceDesign1} width={175} height={280} />
            <MyImage src={eCommerceDesign1} width={175} height={280} />
          </div>
        </div>
      </div>
      <div className={styles.icon}>
        <div className={styles.content}>
          <ModuleTitle title="图标" />
          <div className={styles.box}>
            <MyImage src={eCommerceDesign1} width={585} height={350} />
            <MyImage src={eCommerceDesign1} width={585} height={350} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UIDesign;
