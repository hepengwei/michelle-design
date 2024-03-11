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
import shopHomepage1 from "images/eCommerceDesign/shopHomepage1.jpg";
import shopHomepage2 from "images/eCommerceDesign/shopHomepage2.jpg";
import shopHomepage3 from "images/eCommerceDesign/shopHomepage3.jpeg";
import shopHomepage4 from "images/eCommerceDesign/shopHomepage4.jpeg";
import shopHomepage5 from "images/eCommerceDesign/shopHomepage5.jpg";
import shopHomepage6 from "images/eCommerceDesign/shopHomepage6.jpg";
import shopHomepage7 from "images/eCommerceDesign/shopHomepage7.jpg";
import shopHomepage8 from "images/eCommerceDesign/shopHomepage8.jpeg";
import banner1 from "images/eCommerceDesign/banner1.jpg";
import banner2 from "images/eCommerceDesign/banner2.jpg";
import banner3 from "images/eCommerceDesign/banner3.jpg";
import banner4 from "images/eCommerceDesign/banner4.jpg";
import banner5 from "images/eCommerceDesign/banner5.jpg";
import banner6 from "images/eCommerceDesign/banner6.jpg";
import banner7 from "images/eCommerceDesign/banner7.jpg";
import banner8 from "images/eCommerceDesign/banner8.jpg";
import banner9 from "images/eCommerceDesign/banner9.jpg";
import banner10 from "images/eCommerceDesign/banner10.jpg";
import banner11 from "images/eCommerceDesign/banner11.jpg";
import banner12 from "images/eCommerceDesign/banner12.jpg";
import masterImage1 from "images/eCommerceDesign/masterImage1.jpg";
import masterImage2 from "images/eCommerceDesign/masterImage2.jpg";
import masterImage3 from "images/eCommerceDesign/masterImage3.jpg";
import masterImage4 from "images/eCommerceDesign/masterImage4.jpg";
import masterImage5 from "images/eCommerceDesign/masterImage5.jpg";
import masterImage6 from "images/eCommerceDesign/masterImage6.jpg";
import masterImage7 from "images/eCommerceDesign/masterImage7.jpg";
import masterImage8 from "images/eCommerceDesign/masterImage8.jpg";
import masterImage9 from "images/eCommerceDesign/masterImage9.jpg";
import masterImage10 from "images/eCommerceDesign/masterImage10.jpg";
import detail1 from "images/eCommerceDesign/detail1.jpg";
import detail2 from "images/eCommerceDesign/detail2.jpg";
import detail3 from "images/eCommerceDesign/detail3.jpg";
import detail4 from "images/eCommerceDesign/detail4.jpg";
import detail5 from "images/eCommerceDesign/detail5.jpg";
import detail6 from "images/eCommerceDesign/detail6.jpg";
import detail7 from "images/eCommerceDesign/detail7.jpg";
import detail8 from "images/eCommerceDesign/detail8.jpg";
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
                url={shopHomepage2}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox1
                url={shopHomepage3}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow1(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={shopHomepage4}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox1
                url={shopHomepage5}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox1
                url={shopHomepage6}
                width={380}
                height={500}
                centerTop
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
              { src: shopHomepage2, alt: "" },
              { src: shopHomepage3, alt: "" },
              { src: shopHomepage4, alt: "" },
              { src: shopHomepage5, alt: "" },
              { src: shopHomepage6, alt: "" },
              { src: shopHomepage7, alt: "" },
              { src: shopHomepage8, alt: "" },
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
                url={banner1}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
              <BorderBox1
                url={banner2}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={banner3}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
              <BorderBox1
                url={banner4}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={banner5}
                width={585}
                height={200}
                onClick={() => setViewerShow2(true)}
              />
              <BorderBox1
                url={banner6}
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
              { src: banner1, alt: "" },
              { src: banner2, alt: "" },
              { src: banner3, alt: "" },
              { src: banner4, alt: "" },
              { src: banner5, alt: "" },
              { src: banner6, alt: "" },
              { src: banner7, alt: "" },
              { src: banner8, alt: "" },
              { src: banner9, alt: "" },
              { src: banner10, alt: "" },
              { src: banner11, alt: "" },
              { src: banner12, alt: "" },
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
                url={masterImage1}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox1
                url={masterImage2}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox1
                url={masterImage3}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={masterImage4}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox1
                url={masterImage5}
                width={380}
                height={380}
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox1
                url={masterImage6}
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
              { src: masterImage1, alt: "" },
              { src: masterImage2, alt: "" },
              { src: masterImage3, alt: "" },
              { src: masterImage4, alt: "" },
              { src: masterImage5, alt: "" },
              { src: masterImage6, alt: "" },
              { src: masterImage7, alt: "" },
              { src: masterImage8, alt: "" },
              { src: masterImage9, alt: "" },
              { src: masterImage10, alt: "" },
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
                url={detail1}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow4(true)}
              />
              <BorderBox1
                url={detail2}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow4(true)}
              />
              <BorderBox1
                url={detail3}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow4(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={detail4}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow4(true)}
              />
              <BorderBox1
                url={detail5}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow4(true)}
              />
              <BorderBox1
                url={detail6}
                width={380}
                height={500}
                centerTop
                onClick={() => setViewerShow4(true)}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow4}
            onClose={() => setViewerShow4(false)}
            onMaskClick={() => setViewerShow4(false)}
            images={[
              { src: detail1, alt: "" },
              { src: detail2, alt: "" },
              { src: detail3, alt: "" },
              { src: detail4, alt: "" },
              { src: detail5, alt: "" },
              { src: detail6, alt: "" },
              { src: detail7, alt: "" },
              { src: detail8, alt: "" },
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ECommerceDesign;
