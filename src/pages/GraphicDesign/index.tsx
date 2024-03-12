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
import poster1 from "images/graphicDesign/poster1.jpeg";
import poster2 from "images/graphicDesign/poster2.jpg";
import poster3 from "images/graphicDesign/poster3.jpeg";
import poster4 from "images/graphicDesign/poster4.jpeg";
import poster5 from "images/graphicDesign/poster5.jpg";
import poster6 from "images/graphicDesign/poster6.jpeg";
import poster7 from "images/graphicDesign/poster7.jpg";
import poster8 from "images/graphicDesign/poster8.jpg";
import poster9 from "images/graphicDesign/poster9.jpg";
import poster10 from "images/graphicDesign/poster10.jpg";
import poster11 from "images/graphicDesign/poster11.jpg";
import poster12 from "images/graphicDesign/poster12.jpg";
import poster13 from "images/graphicDesign/poster13.jpg";
import poster14 from "images/graphicDesign/poster14.jpg";
import poster15 from "images/graphicDesign/poster15.jpg";
import poster16 from "images/graphicDesign/poster16.jpg";
import poster17 from "images/graphicDesign/poster17.jpg";
import poster18 from "images/graphicDesign/poster18.jpg";
import poster19 from "images/graphicDesign/poster19.jpeg";
import poster20 from "images/graphicDesign/poster20.jpg";
import poster21 from "images/graphicDesign/poster21.jpg";
import poster22 from "images/graphicDesign/poster22.jpg";
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
import cultureWall1 from "images/graphicDesign/cultureWall1.jpg";
import cultureWall2 from "images/graphicDesign/cultureWall2.jpg";
import cultureWall3 from "images/graphicDesign/cultureWall3.jpg";
import cultureWall4 from "images/graphicDesign/cultureWall4.jpeg";
import cultureWall5 from "images/graphicDesign/cultureWall5.jpg";
import cultureWall6 from "images/graphicDesign/cultureWall6.jpg";
import eCommerceDesign1 from "images/eCommerceDesign1.png";
import styles from "./index.module.scss";

const GraphicDesign = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [viewerShow1, setViewerShow1] = useState(false);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [viewerShow2, setViewerShow2] = useState(false);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [viewerShow3, setViewerShow3] = useState(false);
  const [activeIndex4, setActiveIndex4] = useState(0);
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
                borderType={1}
                width={585}
                height={400}
                centerTop
                onClick={() => {
                  setActiveIndex1(0);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster2}
                borderType={2}
                width={280}
                height={400}
                centerTop
                onClick={() => {
                  setActiveIndex1(1);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster3}
                borderType={2}
                width={280}
                height={400}
                centerTop
                onClick={() => {
                  setActiveIndex1(2);
                  setViewerShow1(true);
                }}
              />
            </div>
            <div className={styles.row}>
              <BorderBox2
                url={poster4}
                borderType={2}
                width={280}
                height={400}
                centerTop
                onClick={() => {
                  setActiveIndex1(3);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster5}
                borderType={2}
                width={280}
                height={400}
                centerTop
                onClick={() => {
                  setActiveIndex1(4);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster6}
                borderType={1}
                width={585}
                height={400}
                centerTop
                onClick={() => {
                  setActiveIndex1(5);
                  setViewerShow1(true);
                }}
              />
            </div>
            <div className={styles.row}>
              <BorderBox2
                url={poster7}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(7);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster8}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(8);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster9}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(9);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster10}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(10);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster11}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(11);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster12}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(12);
                  setViewerShow1(true);
                }}
              />
            </div>
            <div className={styles.row}>
              <BorderBox2
                url={poster13}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(13);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster14}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(14);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster15}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(15);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster16}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(16);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster17}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(17);
                  setViewerShow1(true);
                }}
              />
              <BorderBox2
                url={poster18}
                borderType={3}
                width={175}
                height={260}
                centerTop
                onClick={() => {
                  setActiveIndex1(18);
                  setViewerShow1(true);
                }}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow1}
            activeIndex={activeIndex1}
            zoomSpeed={0.1}
            onClose={() => setViewerShow1(false)}
            onMaskClick={() => setViewerShow1(false)}
            images={[
              { src: poster1, alt: "" },
              { src: poster2, alt: "" },
              { src: poster3, alt: "" },
              { src: poster4, alt: "" },
              { src: poster5, alt: "" },
              { src: poster6, alt: "" },
              { src: poster19, alt: "" },
              { src: poster7, alt: "" },
              { src: poster8, alt: "" },
              { src: poster9, alt: "" },
              { src: poster10, alt: "" },
              { src: poster11, alt: "" },
              { src: poster12, alt: "" },
              { src: poster13, alt: "" },
              { src: poster14, alt: "" },
              { src: poster15, alt: "" },
              { src: poster16, alt: "" },
              { src: poster17, alt: "" },
              { src: poster18, alt: "" },
              { src: poster20, alt: "" },
              { src: poster21, alt: "" },
              { src: poster22, alt: "" },
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
                borderType={1}
                width={585}
                height={400}
                centerTop
                onClick={() => {
                  setActiveIndex2(0);
                  setViewerShow2(true);
                }}
              />
              <div className={styles.col} style={{ width: 585, height: 400 }}>
                <BorderBox2
                  url={albumOfPainting2}
                  borderType={4}
                  width={585}
                  height={185}
                  centerTop
                  onClick={() => {
                    setActiveIndex2(1);
                    setViewerShow2(true);
                  }}
                />
                <BorderBox2
                  url={albumOfPainting3}
                  borderType={4}
                  width={585}
                  height={185}
                  centerTop
                  onClick={() => {
                    setActiveIndex2(2);
                    setViewerShow2(true);
                  }}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col} style={{ width: 585, height: 400 }}>
                <BorderBox2
                  url={albumOfPainting4}
                  borderType={4}
                  width={585}
                  height={185}
                  centerTop
                  onClick={() => {
                    setActiveIndex2(3);
                    setViewerShow2(true);
                  }}
                />
                <BorderBox2
                  url={albumOfPainting5}
                  borderType={4}
                  width={585}
                  height={185}
                  centerTop
                  onClick={() => {
                    setActiveIndex2(4);
                    setViewerShow2(true);
                  }}
                />
              </div>
              <BorderBox2
                url={albumOfPainting6}
                borderType={1}
                width={585}
                height={400}
                centerTop
                onClick={() => {
                  setActiveIndex2(5);
                  setViewerShow2(true);
                }}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow2}
            activeIndex={activeIndex2}
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
                borderType={5}
                width={280}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex3(0);
                  setViewerShow3(true);
                }}
              />
              <BorderBox2
                url={rollUpBanner2}
                borderType={5}
                width={280}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex3(1);
                  setViewerShow3(true);
                }}
              />
              <BorderBox2
                url={rollUpBanner4}
                borderType={5}
                width={280}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex3(2);
                  setViewerShow3(true);
                }}
              />
              <BorderBox2
                url={rollUpBanner5}
                borderType={5}
                width={280}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex3(3);
                  setViewerShow3(true);
                }}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow3}
            activeIndex={activeIndex3}
            zoomSpeed={0.1}
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
                borderType={1}
                width={585}
                height={400}
                onClick={() => {
                  setActiveIndex4(0);
                  setViewerShow4(true);
                }}
              />
              <BorderBox2
                url={cultureWall2}
                borderType={1}
                width={585}
                height={400}
                onClick={() => {
                  setActiveIndex4(1);
                  setViewerShow4(true);
                }}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow4}
            activeIndex={activeIndex4}
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
