/**
 * 电商设计页
 */
import React from "react";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import BorderBox1 from "components/BorderBox1";
import Footer from "components/Footer";
import bannerBg from "images/eCommerceDesign/bannerBg.png";
import eCommerceDesign1 from "images/eCommerceDesign1.png";
import styles from "./index.module.scss";

const ECommerceDesign = () => {
  return (
    <div className={styles.container}>
      <Banner
        bgUrl={bannerBg}
        backgroundColor="#e6ddd6"
        title="电商设计"
        englishTitle="E-COMMERCE DESIGN"
        des="首页 / Banner / 主图 / 详情"
      />
      <div className={styles.shopHomepage}>
        <div className={styles.content}>
          <ModuleTitle title="店铺首页" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
            </div>
            <div className={styles.row}>
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.content}>
          <ModuleTitle title="Banner" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1 url={eCommerceDesign1} width={585} height={200} />
              <BorderBox1 url={eCommerceDesign1} width={585} height={200} />
            </div>
            <div className={styles.row}>
              <BorderBox1 url={eCommerceDesign1} width={585} height={200} />
              <BorderBox1 url={eCommerceDesign1} width={585} height={200} />
            </div>
            <div className={styles.row}>
              <BorderBox1 url={eCommerceDesign1} width={585} height={200} />
              <BorderBox1 url={eCommerceDesign1} width={585} height={200} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.masterMap}>
        <div className={styles.content}>
          <ModuleTitle title="主图" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1 url={eCommerceDesign1} width={380} height={380} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={380} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={380} />
            </div>
            <div className={styles.row}>
              <BorderBox1 url={eCommerceDesign1} width={380} height={380} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={380} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={380} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.content}>
          <ModuleTitle title="详情页" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
            </div>
            <div className={styles.row}>
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
              <BorderBox1 url={eCommerceDesign1} width={380} height={500} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ECommerceDesign;
