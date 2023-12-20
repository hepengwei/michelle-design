/**
 * 平面设计页
 */
import React from "react";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import BorderBox2 from "components/BorderBox2";
import Footer from "components/Footer";
import bannerBg from "images/graphicDesign/bannerBg.png";
import poster1 from "images/graphicDesign/poster1.png";
import poster2 from "images/graphicDesign/poster2.png";
import poster3 from "images/graphicDesign/poster3.png";
import poster4 from "images/graphicDesign/poster4.png";
import poster5 from "images/graphicDesign/poster5.png";
import poster6 from "images/graphicDesign/poster6.png";
import poster7 from "images/graphicDesign/poster7.png";
import poster8 from "images/graphicDesign/poster8.png";
import cultureWall1 from "images/graphicDesign/cultureWall1.png";
import cultureWall2 from "images/graphicDesign/cultureWall2.png";
import eCommerceDesign1 from "images/eCommerceDesign1.png";
import styles from "./index.module.scss";

const GraphicDesign = () => {
  return (
    <div className={styles.container}>
      <Banner
        bgUrl={bannerBg}
        backgroundColor="#C8D3CA"
        title="平面设计"
        englishTitle="GRAPHIC DESIGN"
        des="海报 / 产品画册 / 易拉宝 / 文化墙"
      />
      <div className={styles.poster}>
        <div className={styles.content}>
          <ModuleTitle title="海报" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2 url={poster1} width={585} height={400} />
              <BorderBox2 url={poster2} width={280} height={400} />
              <BorderBox2 url={poster3} width={280} height={400} />
            </div>
            <div className={styles.row}>
              <BorderBox2 url={poster4} width={280} height={400} />
              <BorderBox2 url={poster5} width={280} height={400} />
              <BorderBox2 url={poster6} width={585} height={400} />
            </div>
            <div className={styles.row}>
              <BorderBox2 url={poster7} width={175} height={260} />
              <BorderBox2 url={poster8} width={175} height={260} />
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
            </div>
            <div className={styles.row}>
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
              <BorderBox2 url={eCommerceDesign1} width={175} height={260} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productBrochure}>
        <div className={styles.content}>
          <ModuleTitle title="产品画册" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2 url={eCommerceDesign1} width={585} height={400} />
              <div className={styles.col} style={{ width: 585, height: 400 }}>
                <BorderBox2 url={eCommerceDesign1} width={585} height={185} />
                <BorderBox2 url={eCommerceDesign1} width={585} height={185} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col} style={{ width: 585, height: 400 }}>
                <BorderBox2 url={eCommerceDesign1} width={585} height={185} />
                <BorderBox2 url={eCommerceDesign1} width={585} height={185} />
              </div>
              <BorderBox2 url={eCommerceDesign1} width={585} height={400} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rollUpBanner}>
        <div className={styles.content}>
          <ModuleTitle title="易拉宝" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2 url={eCommerceDesign1} width={280} height={500} />
              <BorderBox2 url={eCommerceDesign1} width={280} height={500} />
              <BorderBox2 url={eCommerceDesign1} width={280} height={500} />
              <BorderBox2 url={eCommerceDesign1} width={280} height={500} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cultureWall}>
        <div className={styles.content}>
          <ModuleTitle title="文化墙" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2 url={cultureWall1} width={585} height={400} />
              <BorderBox2 url={cultureWall2} width={585} height={400} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GraphicDesign;
