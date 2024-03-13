/**
 * UI设计页
 */
import React, { useState } from "react";
import Viewer from "react-viewer";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import MyImage from "components/MyImage";
import Footer from "components/Footer";
import bannerBg from "images/uiDesign/bannerBg.png";
import pcTerminal1 from "images/uiDesign/pcTerminal1.jpg";
import pcTerminal2 from "images/uiDesign/pcTerminal2.png";
import pcTerminal3 from "images/uiDesign/pcTerminal3.png";
import pcTerminal4 from "images/uiDesign/pcTerminal4.jpg";
import pcTerminal5 from "images/uiDesign/pcTerminal5.png";
import pcTerminal6 from "images/uiDesign/pcTerminal6.jpg";
import pcTerminal7 from "images/uiDesign/pcTerminal7.jpg";
import pcTerminal8 from "images/uiDesign/pcTerminal8.png";
import mobileTerminal1 from "images/uiDesign/mobileTerminal1.jpg";
import mobileTerminal2 from "images/uiDesign/mobileTerminal2.jpg";
import mobileTerminal3 from "images/uiDesign/mobileTerminal3.jpg";
import mobileTerminal4 from "images/uiDesign/mobileTerminal4.jpg";
import mobileTerminal5 from "images/uiDesign/mobileTerminal5.jpg";
import mobileTerminal6 from "images/uiDesign/mobileTerminal6.jpg";
import mobileTerminal7 from "images/uiDesign/mobileTerminal7.jpg";
import icons1 from "images/uiDesign/icons1.png";
import icons2 from "images/uiDesign/icons2.png";
import styles from "./index.module.scss";

const UIDesign = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [viewerShow1, setViewerShow1] = useState(false);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [viewerShow2, setViewerShow2] = useState(false);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [viewerShow3, setViewerShow3] = useState(false);

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
            <MyImage
              className={styles.imgBox}
              src={pcTerminal1}
              width={285}
              height={400}
              centerTop
              onClick={() => {
                setActiveIndex1(0);
                setViewerShow1(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={pcTerminal2}
              width={285}
              height={400}
              centerTop
              onClick={() => {
                setActiveIndex1(1);
                setViewerShow1(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={pcTerminal3}
              width={285}
              height={400}
              centerTop
              onClick={() => {
                setActiveIndex1(2);
                setViewerShow1(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={pcTerminal4}
              width={285}
              height={400}
              centerTop
              onClick={() => {
                setActiveIndex1(3);
                setViewerShow1(true);
              }}
            />
          </div>
          <Viewer
            visible={viewerShow1}
            activeIndex={activeIndex1}
            zoomSpeed={0.1}
            onClose={() => setViewerShow1(false)}
            onMaskClick={() => setViewerShow1(false)}
            images={[
              { src: pcTerminal1, alt: "" },
              { src: pcTerminal2, alt: "" },
              { src: pcTerminal3, alt: "" },
              { src: pcTerminal4, alt: "" },
              { src: pcTerminal5, alt: "" },
              { src: pcTerminal6, alt: "" },
              { src: pcTerminal7, alt: "" },
              { src: pcTerminal8, alt: "" },
            ]}
          />
        </div>
      </div>
      <div className={styles.mobileTerminal}>
        <div className={styles.content}>
          <ModuleTitle title="移动端" />
          <div className={styles.box}>
            <MyImage
              className={styles.imgBox}
              src={mobileTerminal1}
              width={175}
              height={280}
              centerTop
              onClick={() => {
                setActiveIndex2(0);
                setViewerShow2(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={mobileTerminal2}
              width={175}
              height={280}
              centerTop
              onClick={() => {
                setActiveIndex2(1);
                setViewerShow2(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={mobileTerminal3}
              width={175}
              height={280}
              centerTop
              onClick={() => {
                setActiveIndex2(2);
                setViewerShow2(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={mobileTerminal4}
              width={175}
              height={280}
              centerTop
              onClick={() => {
                setActiveIndex2(3);
                setViewerShow2(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={mobileTerminal5}
              width={175}
              height={280}
              centerTop
              onClick={() => {
                setActiveIndex2(4);
                setViewerShow2(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={mobileTerminal6}
              width={175}
              height={280}
              centerTop
              onClick={() => {
                setActiveIndex2(5);
                setViewerShow2(true);
              }}
            />
          </div>
          <Viewer
            visible={viewerShow2}
            activeIndex={activeIndex2}
            zoomSpeed={0.5}
            onClose={() => setViewerShow2(false)}
            onMaskClick={() => setViewerShow2(false)}
            images={[
              { src: mobileTerminal1, alt: "" },
              { src: mobileTerminal2, alt: "" },
              { src: mobileTerminal3, alt: "" },
              { src: mobileTerminal4, alt: "" },
              { src: mobileTerminal5, alt: "" },
              { src: mobileTerminal6, alt: "" },
              { src: mobileTerminal7, alt: "" },
            ]}
          />
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.content}>
          <ModuleTitle title="图标" />
          <div className={styles.box}>
            <MyImage
              className={styles.imgBox}
              src={icons1}
              width={585}
              height={350}
              onClick={() => {
                setActiveIndex3(0);
                setViewerShow3(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={icons2}
              width={585}
              height={350}
              onClick={() => {
                setActiveIndex3(1);
                setViewerShow3(true);
              }}
            />
          </div>
          <Viewer
            visible={viewerShow3}
            activeIndex={activeIndex3}
            onClose={() => setViewerShow3(false)}
            onMaskClick={() => setViewerShow3(false)}
            images={[
              { src: icons1, alt: "" },
              { src: icons2, alt: "" },
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UIDesign;
