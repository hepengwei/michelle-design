/**
 * 电商设计页
 */
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Viewer from "react-viewer";
import { useGlobalContext } from "hooks/useGlobalContext";
import useImageSrc from "hooks/useImageSrc";
import { IMG_PREFIX } from "constants/common";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import BorderBox1 from "components/BorderBox1";
import Footer from "components/Footer";
import styles from "./index.module.scss";

const bg = `${IMG_PREFIX}main/bg.png`;
const prefix = `${IMG_PREFIX}eCommerceDesign/`;
const bannerBg = `${prefix}bannerBg.png`;
const shopHomepageList = [
  `${prefix}shopHomepage1.jpg`,
  `${prefix}shopHomepage2.jpg`,
  `${prefix}shopHomepage3.jpeg`,
  `${prefix}shopHomepage4.jpeg`,
  `${prefix}shopHomepage5.jpg`,
  `${prefix}shopHomepage6.jpg`,
  `${prefix}shopHomepage7.jpg`,
  `${prefix}shopHomepage8.jpeg`,
];
const shopHomepageImages = shopHomepageList.map((url: string) => ({
  src: url,
  alt: "",
}));
const bannerList = [
  `${prefix}banner1.jpg`,
  `${prefix}banner2.jpg`,
  `${prefix}banner3.jpg`,
  `${prefix}banner4.jpg`,
  `${prefix}banner5.jpg`,
  `${prefix}banner6.jpg`,
  `${prefix}banner7.jpg`,
  `${prefix}banner8.jpg`,
  `${prefix}banner9.jpg`,
  `${prefix}banner10.jpg`,
  `${prefix}banner11.jpg`,
  `${prefix}banner12.jpg`,
];
const bannerImages = bannerList.map((url: string) => ({
  src: url,
  alt: "",
}));
const masterImageList = [
  `${prefix}masterImage1.jpg`,
  `${prefix}masterImage2.jpg`,
  `${prefix}masterImage3.jpg`,
  `${prefix}masterImage4.jpg`,
  `${prefix}masterImage5.jpg`,
  `${prefix}masterImage6.jpg`,
  `${prefix}masterImage7.jpg`,
  `${prefix}masterImage8.jpg`,
  `${prefix}masterImage9.jpg`,
  `${prefix}masterImage10.jpg`,
];
const masterImageImages = masterImageList.map((url: string) => ({
  src: url,
  alt: "",
}));
const detailList = [
  `${prefix}detail1.jpg`,
  `${prefix}detail2.jpg`,
  `${prefix}detail3.jpg`,
  `${prefix}detail4.jpg`,
  `${prefix}detail5.jpg`,
  `${prefix}detail6.jpg`,
  `${prefix}detail7.jpg`,
  `${prefix}detail8.jpg`,
];
const detailImages = detailList.map((url: string) => ({
  src: url,
  alt: "",
}));

const ECommerceDesign = () => {
  const bgSrc = useImageSrc(bg);
  const [search] = useSearchParams();
  const { setScrollTop } = useGlobalContext();
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [viewerShow1, setViewerShow1] = useState(false);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [viewerShow2, setViewerShow2] = useState(false);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [viewerShow3, setViewerShow3] = useState(false);
  const [activeIndex4, setActiveIndex4] = useState(0);
  const [viewerShow4, setViewerShow4] = useState(false);

  useEffect(() => {
    if (search && search.get("scrollTo")) {
      switch (search.get("scrollTo")) {
        case "shopHomepage":
          setScrollTop(300);
          break;
        case "banner":
          setScrollTop(1450);
          break;
        case "masterMap":
          setScrollTop(2220);
          break;
        case "detail":
          setScrollTop(3120);
          break;
        default:
          setScrollTop(0);
      }
    } else {
      setScrollTop(0);
    }
  }, []);

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
                url={shopHomepageList[0]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex1(0);
                  setViewerShow1(true);
                }}
              />
              <BorderBox1
                url={shopHomepageList[1]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex1(1);
                  setViewerShow1(true);
                }}
              />
              <BorderBox1
                url={shopHomepageList[2]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex1(2);
                  setViewerShow1(true);
                }}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={shopHomepageList[3]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex1(3);
                  setViewerShow1(true);
                }}
              />
              <BorderBox1
                url={shopHomepageList[4]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex1(4);
                  setViewerShow1(true);
                }}
              />
              <BorderBox1
                url={shopHomepageList[5]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex1(5);
                  setViewerShow1(true);
                }}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow1}
            activeIndex={activeIndex1}
            zoomSpeed={0.5}
            onClose={() => setViewerShow1(false)}
            onMaskClick={() => setViewerShow1(false)}
            images={shopHomepageImages}
          />
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.content}>
          <ModuleTitle title="Banner" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1
                url={bannerList[0]}
                borderType={2}
                width={585}
                height={200}
                onClick={() => {
                  setActiveIndex2(0);
                  setViewerShow2(true);
                }}
              />
              <BorderBox1
                url={bannerList[1]}
                borderType={2}
                width={585}
                height={200}
                onClick={() => {
                  setActiveIndex2(1);
                  setViewerShow2(true);
                }}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={bannerList[2]}
                borderType={2}
                width={585}
                height={200}
                onClick={() => {
                  setActiveIndex2(2);
                  setViewerShow2(true);
                }}
              />
              <BorderBox1
                url={bannerList[3]}
                borderType={2}
                width={585}
                height={200}
                onClick={() => {
                  setActiveIndex2(3);
                  setViewerShow2(true);
                }}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={bannerList[4]}
                borderType={2}
                width={585}
                height={200}
                onClick={() => {
                  setActiveIndex2(4);
                  setViewerShow2(true);
                }}
              />
              <BorderBox1
                url={bannerList[5]}
                borderType={2}
                width={585}
                height={200}
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
            images={bannerImages}
          />
        </div>
      </div>
      <div className={styles.masterMap}>
        <div className={styles.content}>
          <ModuleTitle title="主图" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1
                url={masterImageList[0]}
                borderType={3}
                width={380}
                height={380}
                onClick={() => {
                  setActiveIndex3(0);
                  setViewerShow3(true);
                }}
              />
              <BorderBox1
                url={masterImageList[1]}
                borderType={3}
                width={380}
                height={380}
                onClick={() => {
                  setActiveIndex3(1);
                  setViewerShow3(true);
                }}
              />
              <BorderBox1
                url={masterImageList[2]}
                borderType={3}
                width={380}
                height={380}
                onClick={() => {
                  setActiveIndex3(2);
                  setViewerShow3(true);
                }}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={masterImageList[3]}
                borderType={3}
                width={380}
                height={380}
                onClick={() => {
                  setActiveIndex3(3);
                  setViewerShow3(true);
                }}
              />
              <BorderBox1
                url={masterImageList[4]}
                borderType={3}
                width={380}
                height={380}
                onClick={() => {
                  setActiveIndex3(4);
                  setViewerShow3(true);
                }}
              />
              <BorderBox1
                url={masterImageList[5]}
                borderType={3}
                width={380}
                height={380}
                onClick={() => {
                  setActiveIndex3(5);
                  setViewerShow3(true);
                }}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow3}
            activeIndex={activeIndex3}
            onClose={() => setViewerShow3(false)}
            onMaskClick={() => setViewerShow3(false)}
            images={masterImageImages}
          />
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.content}>
          <ModuleTitle title="详情页" />
          <div className={styles.box}>
            <div className={styles.row}>
              <BorderBox1
                url={detailList[0]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex4(0);
                  setViewerShow4(true);
                }}
              />
              <BorderBox1
                url={detailList[1]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex4(1);
                  setViewerShow4(true);
                }}
              />
              <BorderBox1
                url={detailList[2]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex4(2);
                  setViewerShow4(true);
                }}
              />
            </div>
            <div className={styles.row}>
              <BorderBox1
                url={detailList[3]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex4(3);
                  setViewerShow4(true);
                }}
              />
              <BorderBox1
                url={detailList[4]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex4(4);
                  setViewerShow4(true);
                }}
              />
              <BorderBox1
                url={detailList[5]}
                borderType={1}
                width={380}
                height={500}
                centerTop
                onClick={() => {
                  setActiveIndex4(5);
                  setViewerShow4(true);
                }}
              />
            </div>
          </div>
          <Viewer
            visible={viewerShow4}
            activeIndex={activeIndex4}
            zoomSpeed={0.5}
            onClose={() => setViewerShow4(false)}
            onMaskClick={() => setViewerShow4(false)}
            images={detailImages}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ECommerceDesign;
