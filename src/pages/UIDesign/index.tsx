/**
 * UI设计页
 */
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Viewer from "react-viewer";
import { useGlobalContext } from "hooks/useGlobalContext";
import { IMG_PREFIX } from "constants/common";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import MyImage from "components/MyImage";
import Footer from "components/Footer";
import styles from "./index.module.scss";

const prefix = `${IMG_PREFIX}uiDesign/`;
const bannerBg = `${prefix}bannerBg.png`;
const pcTerminalList = [
  `${prefix}pcTerminal1.jpg`,
  `${prefix}pcTerminal2.png`,
  `${prefix}pcTerminal3.png`,
  `${prefix}pcTerminal4.jpg`,
  `${prefix}pcTerminal5.png`,
  `${prefix}pcTerminal6.jpg`,
  `${prefix}pcTerminal7.jpg`,
  `${prefix}pcTerminal8.png`,
];
const pcTerminalImages = pcTerminalList.map((url: string) => ({
  src: url,
  alt: "",
}));
const mobileTerminalList = [
  `${prefix}mobileTerminal1.jpg`,
  `${prefix}mobileTerminal2.jpg`,
  `${prefix}mobileTerminal3.jpg`,
  `${prefix}mobileTerminal4.jpg`,
  `${prefix}mobileTerminal5.jpg`,
  `${prefix}mobileTerminal6.jpg`,
  `${prefix}mobileTerminal7.jpg`,
];
const mobileTerminalImages = mobileTerminalList.map((url: string) => ({
  src: url,
  alt: "",
}));
const iconsList = [`${prefix}icons1.png`, `${prefix}icons2.png`];
const iconsImages = iconsList.map((url: string) => ({
  src: url,
  alt: "",
}));

const UIDesign = () => {
  const [search] = useSearchParams();
  const { setScrollTop } = useGlobalContext();
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [viewerShow1, setViewerShow1] = useState(false);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [viewerShow2, setViewerShow2] = useState(false);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [viewerShow3, setViewerShow3] = useState(false);

  useEffect(() => {
    if (search && search.get("scrollTo")) {
      switch (search.get("scrollTo")) {
        case "pcTerminal":
          setScrollTop(300);
          break;
        case "mobileTerminal":
          setScrollTop(860);
          break;
        case "icons":
          setScrollTop(1220);
          break;
        default:
          setScrollTop(0);
      }
    } else {
      setScrollTop(0);
    }
  }, []);

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
              src={pcTerminalList[0]}
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
              src={pcTerminalList[1]}
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
              src={pcTerminalList[2]}
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
              src={pcTerminalList[3]}
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
            zoomSpeed={0.2}
            onClose={() => setViewerShow1(false)}
            onMaskClick={() => setViewerShow1(false)}
            images={pcTerminalImages}
          />
        </div>
      </div>
      <div className={styles.mobileTerminal}>
        <div className={styles.content}>
          <ModuleTitle title="移动端" />
          <div className={styles.box}>
            <MyImage
              className={styles.imgBox}
              src={mobileTerminalList[0]}
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
              src={mobileTerminalList[1]}
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
              src={mobileTerminalList[2]}
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
              src={mobileTerminalList[3]}
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
              src={mobileTerminalList[4]}
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
              src={mobileTerminalList[5]}
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
            images={mobileTerminalImages}
          />
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.content}>
          <ModuleTitle title="图标" />
          <div className={styles.box}>
            <MyImage
              className={styles.imgBox}
              src={iconsList[0]}
              width={585}
              height={350}
              onClick={() => {
                setActiveIndex3(0);
                setViewerShow3(true);
              }}
            />
            <MyImage
              className={styles.imgBox}
              src={iconsList[1]}
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
            images={iconsImages}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UIDesign;
