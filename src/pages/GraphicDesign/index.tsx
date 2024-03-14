/**
 * 平面设计页
 */
import React, { useState } from "react";
import Viewer from "react-viewer";
import useImageSrc from "hooks/useImageSrc";
import { IMG_PREFIX } from "constants/common";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import BorderBox2 from "components/BorderBox2";
import Footer from "components/Footer";
// import bg from "images/bg.png";
// import bannerBg from "images/graphicDesign/bannerBg.png";
// import poster1 from "images/graphicDesign/poster1.jpeg";
// import poster2 from "images/graphicDesign/poster2.jpg";
// import poster3 from "images/graphicDesign/poster3.jpeg";
// import poster4 from "images/graphicDesign/poster4.jpeg";
// import poster5 from "images/graphicDesign/poster5.jpg";
// import poster6 from "images/graphicDesign/poster6.jpeg";
// import poster7 from "images/graphicDesign/poster7.jpg";
// import poster8 from "images/graphicDesign/poster8.jpg";
// import poster9 from "images/graphicDesign/poster9.jpg";
// import poster10 from "images/graphicDesign/poster10.jpg";
// import poster11 from "images/graphicDesign/poster11.jpg";
// import poster12 from "images/graphicDesign/poster12.jpg";
// import poster13 from "images/graphicDesign/poster13.jpg";
// import poster14 from "images/graphicDesign/poster14.jpg";
// import poster15 from "images/graphicDesign/poster15.jpg";
// import poster16 from "images/graphicDesign/poster16.jpg";
// import poster17 from "images/graphicDesign/poster17.jpg";
// import poster18 from "images/graphicDesign/poster18.jpg";
// import poster19 from "images/graphicDesign/poster19.jpeg";
// import poster20 from "images/graphicDesign/poster20.jpg";
// import poster21 from "images/graphicDesign/poster21.jpg";
// import poster22 from "images/graphicDesign/poster22.jpg";
// import albumOfPainting1 from "images/graphicDesign/albumOfPainting1.jpg";
// import albumOfPainting2 from "images/graphicDesign/albumOfPainting2.jpg";
// import albumOfPainting3 from "images/graphicDesign/albumOfPainting3.jpg";
// import albumOfPainting4 from "images/graphicDesign/albumOfPainting4.jpg";
// import albumOfPainting5 from "images/graphicDesign/albumOfPainting5.jpg";
// import albumOfPainting6 from "images/graphicDesign/albumOfPainting6.jpg";
// import albumOfPainting7 from "images/graphicDesign/albumOfPainting7.jpg";
// import albumOfPainting8 from "images/graphicDesign/albumOfPainting8.jpg";
// import rollUpBanner1 from "images/graphicDesign/rollUpBanner1.jpeg";
// import rollUpBanner2 from "images/graphicDesign/rollUpBanner2.jpg";
// import rollUpBanner3 from "images/graphicDesign/rollUpBanner3.jpg";
// import rollUpBanner4 from "images/graphicDesign/rollUpBanner4.jpeg";
// import rollUpBanner5 from "images/graphicDesign/rollUpBanner5.jpeg";
// import cultureWall1 from "images/graphicDesign/cultureWall1.jpg";
// import cultureWall2 from "images/graphicDesign/cultureWall2.jpg";
// import cultureWall3 from "images/graphicDesign/cultureWall3.jpg";
// import cultureWall4 from "images/graphicDesign/cultureWall4.jpeg";
// import cultureWall5 from "images/graphicDesign/cultureWall5.jpg";
// import cultureWall6 from "images/graphicDesign/cultureWall6.jpg";
import styles from "./index.module.scss";

const bg = `${IMG_PREFIX}main/bg.png`;
const prefix = `${IMG_PREFIX}graphicDesign/`;
const bannerBg = `${prefix}bannerBg.png`;
const posterList = [
  `${prefix}poster1.jpeg`,
  `${prefix}poster2.jpg`,
  `${prefix}poster3.jpeg`,
  `${prefix}poster4.jpeg`,
  `${prefix}poster5.jpg`,
  `${prefix}poster6.jpeg`,
  `${prefix}poster19.jpeg`,
  `${prefix}poster7.jpg`,
  `${prefix}poster8.jpg`,
  `${prefix}poster9.jpg`,
  `${prefix}poster10.jpg`,
  `${prefix}poster11.jpg`,
  `${prefix}poster12.jpg`,
  `${prefix}poster13.jpg`,
  `${prefix}poster14.jpg`,
  `${prefix}poster15.jpg`,
  `${prefix}poster16.jpg`,
  `${prefix}poster17.jpg`,
  `${prefix}poster18.jpg`,
  `${prefix}poster20.jpg`,
  `${prefix}poster21.jpg`,
  `${prefix}poster22.jpg`,
];
const posterImages = posterList.map((url: string) => ({
  src: url,
  alt: "",
}));
const albumOfPaintingList = [
  `${prefix}albumOfPainting1.jpg`,
  `${prefix}albumOfPainting2.jpg`,
  `${prefix}albumOfPainting3.jpg`,
  `${prefix}albumOfPainting4.jpg`,
  `${prefix}albumOfPainting5.jpg`,
  `${prefix}albumOfPainting6.jpg`,
  `${prefix}albumOfPainting7.jpg`,
  `${prefix}albumOfPainting8.jpg`,
];
const albumOfPaintingImages = albumOfPaintingList.map((url: string) => ({
  src: url,
  alt: "",
}));
const rollUpBannerList = [
  `${prefix}rollUpBanner1.jpeg`,
  `${prefix}rollUpBanner2.jpg`,
  `${prefix}rollUpBanner3.jpg`,
  `${prefix}rollUpBanner4.jpeg`,
  `${prefix}rollUpBanner5.jpeg`,
];
const rollUpBannerImages = rollUpBannerList.map((url: string) => ({
  src: url,
  alt: "",
}));
const cultureWallList = [
  `${prefix}cultureWall1.jpg`,
  `${prefix}cultureWall2.jpg`,
  `${prefix}cultureWall3.jpg`,
  `${prefix}cultureWall4.jpeg`,
  `${prefix}cultureWall5.jpg`,
  `${prefix}cultureWall6.jpg`,
];
const cultureWallImages = cultureWallList.map((url: string) => ({
  src: url,
  alt: "",
}));

const GraphicDesign = () => {
  const bgSrc = useImageSrc(bg);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [viewerShow1, setViewerShow1] = useState(false);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [viewerShow2, setViewerShow2] = useState(false);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [viewerShow3, setViewerShow3] = useState(false);
  const [activeIndex4, setActiveIndex4] = useState(0);
  const [viewerShow4, setViewerShow4] = useState(false);

  return (
    <div
      className={styles.container}
      style={
        bgSrc
          ? {
              backgroundImage: `url(${bg})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "100% 100px",
            }
          : {}
      }
    >
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
                url={posterList[0]}
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
                url={posterList[1]}
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
                url={posterList[2]}
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
                url={posterList[3]}
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
                url={posterList[4]}
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
                url={posterList[5]}
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
                url={posterList[7]}
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
                url={posterList[8]}
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
                url={posterList[9]}
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
                url={posterList[10]}
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
                url={posterList[11]}
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
                url={posterList[12]}
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
                url={posterList[13]}
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
                url={posterList[14]}
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
                url={posterList[15]}
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
                url={posterList[16]}
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
                url={posterList[17]}
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
                url={posterList[18]}
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
            images={posterImages}
          />
        </div>
      </div>
      <div className={styles.productBrochure}>
        <div className={styles.content}>
          <ModuleTitle title="产品画册" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2
                url={albumOfPaintingList[0]}
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
                  url={albumOfPaintingList[1]}
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
                  url={albumOfPaintingList[2]}
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
                  url={albumOfPaintingList[3]}
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
                  url={albumOfPaintingList[4]}
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
                url={albumOfPaintingList[5]}
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
            images={albumOfPaintingImages}
          />
        </div>
      </div>
      <div className={styles.rollUpBanner}>
        <div className={styles.content}>
          <ModuleTitle title="易拉宝" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2
                url={rollUpBannerList[0]}
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
                url={rollUpBannerList[1]}
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
                url={rollUpBannerList[2]}
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
                url={rollUpBannerList[3]}
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
            images={rollUpBannerImages}
          />
        </div>
      </div>
      <div className={styles.cultureWall}>
        <div className={styles.content}>
          <ModuleTitle title="文化墙" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox2
                url={cultureWallList[0]}
                borderType={1}
                width={585}
                height={400}
                onClick={() => {
                  setActiveIndex4(0);
                  setViewerShow4(true);
                }}
              />
              <BorderBox2
                url={cultureWallList[1]}
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
            images={cultureWallImages}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GraphicDesign;
