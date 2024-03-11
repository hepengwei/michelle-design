/**
 * 平面设计页
 */
import React, { useState } from "react";
import Viewer from "react-viewer";
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
import albumOfPainting1 from "images/graphicDesign/albumOfPainting1.jpg";
import albumOfPainting2 from "images/graphicDesign/albumOfPainting2.jpg";
import albumOfPainting3 from "images/graphicDesign/albumOfPainting3.jpg";
import albumOfPainting4 from "images/graphicDesign/albumOfPainting4.jpg";
import albumOfPainting5 from "images/graphicDesign/albumOfPainting5.jpg";
import albumOfPainting6 from "images/graphicDesign/albumOfPainting6.jpg";
import albumOfPainting7 from "images/graphicDesign/albumOfPainting7.jpg";
import albumOfPainting8 from "images/graphicDesign/albumOfPainting8.jpg";
import rollUpBanner1 from "images/graphicDesign/rollUpBanner1.jpeg";
import rollUpBanner2 from "images/graphicDesign/rollUpBanner2.jpg";
import rollUpBanner3 from "images/graphicDesign/rollUpBanner3.jpg";
import rollUpBanner4 from "images/graphicDesign/rollUpBanner4.jpeg";
import rollUpBanner5 from "images/graphicDesign/rollUpBanner5.jpeg";
import cultureWall1 from "images/graphicDesign/cultureWall1.png";
import cultureWall2 from "images/graphicDesign/cultureWall2.png";
import cultureWall3 from "images/graphicDesign/cultureWall3.png";
import cultureWall4 from "images/graphicDesign/cultureWall4.jpeg";
import cultureWall5 from "images/graphicDesign/cultureWall5.jpeg";
import cultureWall6 from "images/graphicDesign/cultureWall6.jpeg";
import eCommerceDesign1 from "images/eCommerceDesign1.png";
import styles from "./index.module.scss";

const GraphicDesign = () => {
  const [viewerShow1, setViewerShow1] = useState(false);
  const [viewerShow2, setViewerShow2] = useState(false);
  const [viewerShow3, setViewerShow3] = useState(false);
  const [viewerShow4, setViewerShow4] = useState(false);

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
              <BorderBox2
                url={poster1}
                width={585}
                height={400}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={poster2}
                width={280}
                height={400}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={poster3}
                width={280}
                height={400}
                onClick={() => setViewerShow1(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox2
                url={poster4}
                width={280}
                height={400}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={poster5}
                width={280}
                height={400}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={poster6}
                width={585}
                height={400}
                onClick={() => setViewerShow1(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox2
                url={poster7}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={poster8}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
            </div>
            <div className={styles.row}>
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
              <BorderBox2
                url={eCommerceDesign1}
                width={175}
                height={260}
                onClick={() => setViewerShow1(true)}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow1}
            onClose={() => setViewerShow1(false)}
            onMaskClick={() => setViewerShow1(false)}
            images={[
              { src: poster1, alt: "" },
              { src: poster2, alt: "" },
              { src: poster3, alt: "" },
              { src: poster4, alt: "" },
              { src: poster5, alt: "" },
              { src: poster6, alt: "" },
              { src: poster7, alt: "" },
              { src: poster8, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
              { src: eCommerceDesign1, alt: "" },
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
      <div className={styles.productBrochure}>
        <div className={styles.content}>
          <ModuleTitle title="产品画册" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2
                url={albumOfPainting1}
                width={585}
                height={400}
                centerTop
                onClick={() => setViewerShow2(true)}
              />
              <div className={styles.col} style={{ width: 585, height: 400 }}>
                <BorderBox2
                  url={albumOfPainting2}
                  width={585}
                  height={185}
                  centerTop
                  onClick={() => setViewerShow2(true)}
                />
                <BorderBox2
                  url={albumOfPainting3}
                  width={585}
                  height={185}
                  centerTop
                  onClick={() => setViewerShow2(true)}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col} style={{ width: 585, height: 400 }}>
                <BorderBox2
                  url={albumOfPainting4}
                  width={585}
                  height={185}
                  centerTop
                  onClick={() => setViewerShow2(true)}
                />
                <BorderBox2
                  url={albumOfPainting5}
                  width={585}
                  height={185}
                  centerTop
                  onClick={() => setViewerShow2(true)}
                />
              </div>
              <BorderBox2
                url={albumOfPainting6}
                width={585}
                height={400}
                centerTop
                onClick={() => setViewerShow2(true)}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow2}
            onClose={() => setViewerShow2(false)}
            onMaskClick={() => setViewerShow2(false)}
            images={[
              { src: albumOfPainting1, alt: "" },
              { src: albumOfPainting2, alt: "" },
              { src: albumOfPainting3, alt: "" },
              { src: albumOfPainting4, alt: "" },
              { src: albumOfPainting5, alt: "" },
              { src: albumOfPainting6, alt: "" },
              { src: albumOfPainting7, alt: "" },
              { src: albumOfPainting8, alt: "" },
            ]}
          />
        </div>
      </div>
      <div className={styles.rollUpBanner}>
        <div className={styles.content}>
          <ModuleTitle title="易拉宝" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2
                url={rollUpBanner1}
                width={280}
                height={500}
                centerTop
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox2
                url={rollUpBanner2}
                width={280}
                height={500}
                centerTop
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox2
                url={rollUpBanner4}
                width={280}
                height={500}
                centerTop
                onClick={() => setViewerShow3(true)}
              />
              <BorderBox2
                url={rollUpBanner5}
                width={280}
                height={500}
                centerTop
                onClick={() => setViewerShow3(true)}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow3}
            onClose={() => setViewerShow3(false)}
            onMaskClick={() => setViewerShow3(false)}
            images={[
              { src: rollUpBanner1, alt: "" },
              { src: rollUpBanner2, alt: "" },
              { src: rollUpBanner3, alt: "" },
              { src: rollUpBanner4, alt: "" },
              { src: rollUpBanner5, alt: "" },
            ]}
          />
        </div>
      </div>
      <div className={styles.cultureWall}>
        <div className={styles.content}>
          <ModuleTitle title="文化墙" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2
                url={cultureWall1}
                width={585}
                height={400}
                onClick={() => setViewerShow4(true)}
              />
              <BorderBox2
                url={cultureWall2}
                width={585}
                height={400}
                onClick={() => setViewerShow4(true)}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow4}
            onClose={() => setViewerShow4(false)}
            onMaskClick={() => setViewerShow4(false)}
            images={[
              { src: cultureWall1, alt: "" },
              { src: cultureWall2, alt: "" },
              { src: cultureWall3, alt: "" },
              { src: cultureWall4, alt: "" },
              { src: cultureWall5, alt: "" },
              { src: cultureWall6, alt: "" },
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GraphicDesign;
