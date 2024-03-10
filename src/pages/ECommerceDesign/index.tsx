/**
 * 电商设计页
 */
import React, { useState } from "react";
import Viewer from "react-viewer";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import BorderBox1 from "components/BorderBox1";
import Footer from "components/Footer";
import bannerBg from "images/eCommerceDesign/bannerBg.png";
import eCommerceDesign1 from "images/eCommerceDesign1.png";
import shopHomepage1 from "images/eCommerceDesign/shopHomepage1.jpg";
import styles from "./index.module.scss";

const ECommerceDesign = () => {
  const [viewerShow1, setViewerShow1] = useState(false);
  const [viewerShow2, setViewerShow2] = useState(false);
  const [viewerShow3, setViewerShow3] = useState(false);
  const [viewerShow4, setViewerShow4] = useState(false);

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
              <BorderBox1
                url={shopHomepage1}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow1(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow1(true)}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow1}
            onClose={() => setViewerShow1(false)}
            onMaskClick={() => setViewerShow1(false)}
            images={[
              { src: shopHomepage1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
            ]}
          />
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.content}>
          <ModuleTitle title="Banner" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1
                url={eCommerceDesign1}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={eCommerceDesign1}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={eCommerceDesign1}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow2}
            onClose={() => setViewerShow2(false)}
            onMaskClick={() => setViewerShow2(false)}
            images={[
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
            ]}
          />
        </div>
      </div>
      <div className={styles.masterMap}>
        <div className={styles.content}>
          <ModuleTitle title="主图" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow3}
            onClose={() => setViewerShow3(false)}
            onMaskClick={() => setViewerShow3(false)}
            images={[
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
            ]}
          />
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.content}>
          <ModuleTitle title="详情页" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow4(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow4(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow4(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow4(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow4(true)}
              />
              <BorderBox1
                url={eCommerceDesign1}
                width={380}
                height={500}
                onClick={() => setViewerShow4(true)}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow4}
            onClose={() => setViewerShow4(false)}
            onMaskClick={() => setViewerShow4(false)}
            images={[
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ECommerceDesign;
