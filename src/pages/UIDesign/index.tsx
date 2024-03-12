/**
 * UI设计页
 */
import React, { useState } from "react";
import Viewer from "react-viewer";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import MyImage from "components/MyImage";
import Footer from "components/Footer";
import { IMG_PREFIX } from "constants/common";
import bannerBg from "images/uiDesign/bannerBg.png";
// import pcTerminal1 from "images/uiDesign/pcTerminal1.jpg";
// import pcTerminal2 from "images/uiDesign/pcTerminal2.png";
// import pcTerminal3 from "images/uiDesign/pcTerminal3.png";
// import pcTerminal4 from "images/uiDesign/pcTerminal4.jpg";
// import pcTerminal5 from "images/uiDesign/pcTerminal5.png";
// import pcTerminal6 from "images/uiDesign/pcTerminal6.jpg";
// import pcTerminal7 from "images/uiDesign/pcTerminal7.jpg";
// import pcTerminal8 from "images/uiDesign/pcTerminal8.png";
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

const pcTerminalList = [
  `${IMG_PREFIX}uiDesign/pcTerminal1.jpg?q-sign-algorithm=sha1&q-ak=AKID4QtrP_KOfXhy7soTXoBWdpFJbBhnhsuGwtOjIF2-MPAeYxX_wTulvzp9Nm5O5w5W&q-sign-time=1710233865;1710237465&q-key-time=1710233865;1710237465&q-header-list=host&q-url-param-list=ci-process&q-signature=97f9d6f77a2bbb0307f030da99d6decfd1894d3b&x-cos-security-token=MJ7BsdLwBC5e6uGVOktfhEnH0pqXobMa545a361a67ed68da5d9d52cb4eb909f0HBRagxhkXFBRLV5LWuolkMuIrj4ni3p4rKne1uk-q9tllWQ0fCNuD7mZlXBvCeznrAwdSK0loVaOgXjkHkERow6QKhZgw5iGMytbW5hNEM-QywlWxAPGBdSrJQdZyL62Jd8J484Os5732Hwd-Tby0PpHQ4R0WyVthtMwoLHR-1fLy6Nf8oETxYkXNEgzF5h3&ci-process=originImage`,
  `${IMG_PREFIX}uiDesign/pcTerminal2.png?q-sign-algorithm=sha1&q-ak=AKIDJWNqo8NPG6WQ0fVVIJK0IcwPrAMxZNtt6AN7QPOvVAZA0aHGXHmPNhQBmZ-hKHv4&q-sign-time=1710233914;1710237514&q-key-time=1710233914;1710237514&q-header-list=host&q-url-param-list=ci-process&q-signature=d0294a19b1b3a9ead225fe36482517d708045f3e&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a7996d0e68b21e1e4476169d1bd762d4bXnQH-Qw59FJoTAyzLyC_sXdnc3pglkfObGftJ50-5A4JH6FYMVab081Bh0SGmBRFr8lLJiF5C2nOfe1rVCX-u8b9geGRljph0rSuukFTX_g3f3Ophyethi89zUP2f8Ld052WxobUnBiJ0J-runL1QGCpuAyzsiQtRNgN7BcoEGYn0qLAkEJVHHdhUZDJbEHj&ci-process=originImage`,
  `${IMG_PREFIX}uiDesign/pcTerminal3.png?q-sign-algorithm=sha1&q-ak=AKIDOr6vHb6GrWHYpY_7VWJEeXy2SyFm-QPJVSVNEDLFgRg7eR5igPMFAUHc_wM1ee0C&q-sign-time=1710233942;1710237542&q-key-time=1710233942;1710237542&q-header-list=host&q-url-param-list=ci-process&q-signature=4b488265b879eed7e8b4e6ef3f058bd428cae8ff&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a687bf13e943b90befe2d4d52993363a6XnQH-Qw59FJoTAyzLyC_sWCzqkFTEM6c-xUOaXAzxt5X_64jK6Cw9YeY4mpzfjxV0dpK3vzmmEiv73aSzpMxO_7toBvjVBiYXfeKIAALz4bUzYUyeDRpaIPfVNLXxdQDIXsFwWWhtoXTzUHF9LSmHXDzAaWLbCb6DE1kwRNyny0uzYaZwZTgfPkQ8ElGBhZp&ci-process=originImage`,
  `${IMG_PREFIX}uiDesign/pcTerminal4.jpg?q-sign-algorithm=sha1&q-ak=AKIDj_2r9INFInqK09rTVKctMDWVkD9iQTBqe4DxL8hFqswAEebYrwldRMbKYZjbIjnw&q-sign-time=1710233964;1710237564&q-key-time=1710233964;1710237564&q-header-list=host&q-url-param-list=ci-process&q-signature=431a5d982b49222c5900aeef75f1a2846704e929&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a70e67702ea5a05a4453aa46fde9a7b9cXnQH-Qw59FJoTAyzLyC_sbkLvusYiGV09P6kGhTBwb_z4YZ_wriQhaVbysZRMo659CtUOqlZwjO5mhkOYw4QBMegONrn3vbyyI0eaFzL1sma-aG8JY1rb3LB28z7-tAml785sTu5pGxYaaC95SyljNQK6Wroe5Ju24YW6kWqRRKg5yGkLNbdl7WX9xoz4Qtu&ci-process=originImage`,
  `${IMG_PREFIX}uiDesign/pcTerminal5.png?q-sign-algorithm=sha1&q-ak=AKID3Ds6-5QvjCuZwu7p-PgYaPos5HDVAGmEVZYxWSVcPTGbuC-FhzFrepn34nY2xXZr&q-sign-time=1710233984;1710237584&q-key-time=1710233984;1710237584&q-header-list=host&q-url-param-list=ci-process&q-signature=45637bb9c0fd4c3ed242fd77a5653a43246e83ca&x-cos-security-token=MJ7BsdLwBC5e6uGVOktfhEnH0pqXobMa479034b9649c519d311bbb5dce6a23ccHBRagxhkXFBRLV5LWuolkHsoEEJPKvKMx5v1lryI57tygzPX5Am2T98NzLjHMqVeUzvzHRoX6uvreNuTt9KYFt-ppveILvfXIBUtG9PdSE1P24bBKqWQPxrJmYI93783CELNcctQFY1-anQed9_NtuTNnG9bvAFOHoY2MUAEMxVAaOMd6PRTyI4_CVNUZi9s&ci-process=originImage`,
  `${IMG_PREFIX}uiDesign/pcTerminal6.jpg?q-sign-algorithm=sha1&q-ak=AKIDvh-ilQsZE3QPkgZOqL8A5r9A0e1j2tLvwnbj794ffNZrtKnpilp8OngqG5dm64xT&q-sign-time=1710234008;1710237608&q-key-time=1710234008;1710237608&q-header-list=host&q-url-param-list=ci-process&q-signature=b3d6869fdbf0c6b5573a042876d39374c7b2338c&x-cos-security-token=MJ7BsdLwBC5e6uGVOktfhEnH0pqXobMa8725f5e09742b0bcc03fcdc0f3efcabaHBRagxhkXFBRLV5LWuolkJe_i2xwZttaL8BGwVZfsxh8AP2KO-JsK3SCE_pFbb3vHg_YW5y6or0s0YX_5jO4Q35RcB5wlXbxew0mLEzdMaDYHCR_X2dS-Krw3iVVDM4pCkKDhREd3cUI2o3DtcyxUNy-slE1-dPb2ZklQf2JwDc0MnnUkRGAtJBXs8chewL_&ci-process=originImage`,
  `${IMG_PREFIX}uiDesign/pcTerminal7.jpg?q-sign-algorithm=sha1&q-ak=AKID3w2z2VRr8S3cPKVPJ5OlqseOOg0GENxZmTGRy4zeHCi5gexQDsDoi2JzKpKZI4d8&q-sign-time=1710234029;1710237629&q-key-time=1710234029;1710237629&q-header-list=host&q-url-param-list=ci-process&q-signature=44960f634464c2fe78a1f3f548e5d62ba963d2ba&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a33bf29c888dda176e95b35209e2f4319XnQH-Qw59FJoTAyzLyC_scVR047N2y8CQsTLWKDfWZ9JIxA_dJXQCqewBXlyMJ_bFo0l-wxacvraKrs1UVVXsWatdf_rx1RNUZqpcgQdrvVr9dBsQwZfW7rwW8ljm7CcHEkE2JsxBz3oXrc9VKN_ew2zegsgxBby0PoC1qui53JkFitfnJpsq0HiggdQ5GWn&ci-process=originImage`,
  `${IMG_PREFIX}uiDesign/pcTerminal8.png?q-sign-algorithm=sha1&q-ak=AKIDjC39RJeKwFFO6GMUu4NGz531WF78ZTSoFSbY9DCfSAkBSgz6_bpqAmpaMB1q_Wi7&q-sign-time=1710234051;1710237651&q-key-time=1710234051;1710237651&q-header-list=host&q-url-param-list=ci-process&q-signature=9a8d9d834591edd2a290b51ce50ddcffbfe603c4&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4aca1372a5433fb348fac87cb1402cf0fcXnQH-Qw59FJoTAyzLyC_sVxYWWzRNCI7tvGV5vkMEoYeDEz-NrnShs0kZz-ORL0FMNJnnaM9gNY8ySr8009gJ1UXRt5IaDkNwtncsm875LNzuqxsxRaDGCZk6XgOOgIi1JEta5-k_PAD1z1mzZkHTnWlQeHPtvgEpjxV9pgXqv4kJzZFxwuEtLbpMCW95Z1a&ci-process=originImage`,
];

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
            zoomSpeed={0.1}
            onClose={() => setViewerShow1(false)}
            onMaskClick={() => setViewerShow1(false)}
            images={[
              { src: pcTerminalList[0], alt: "" },
              { src: pcTerminalList[1], alt: "" },
              { src: pcTerminalList[2], alt: "" },
              { src: pcTerminalList[3], alt: "" },
              { src: pcTerminalList[4], alt: "" },
              { src: pcTerminalList[5], alt: "" },
              { src: pcTerminalList[6], alt: "" },
              { src: pcTerminalList[7], alt: "" },
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
