import React from "react";
import { useNavigate } from "react-router-dom";
import { DoubleRightOutlined, PlayCircleFilled } from "@ant-design/icons";
import useAuth from "hooks/useAuth";
import useImageSrc from "hooks/useImageSrc";
import MyImage from "components/MyImage";
import InteractionEyes from "components/InteractionEyes";
import HeaderButton from "components/HeaderButton";
import ModuleTitle from "components/ModuleTitle";
import SkillCircle from "components/SkillCircle";
import { PHONE_NUMBER, THAT_PAGE_URL } from "constants/common";
import bg from "images/bg.png";
import logo1 from "images/logo1.png";
import logo2 from "images/logo2.png";
import phone from "images/phone.png";
import bannerBg from "images/bannerBg.png";
import slogan from "images/slogan.png";
import profession from "images/profession.png";
import doubleRight from "images/doubleRight.png";
import contactInformation from "images/contactInformation.png";
import author1 from "images/author1.png";
import author2 from "images/author2.png";
import author3 from "images/author3.png";
import star from "images/star.png";
import eCommerceDesign1 from "images/eCommerceDesign1.png";
import eCommerceDesign2 from "images/eCommerceDesign2.png";
import eCommerceDesign3 from "images/eCommerceDesign3.png";
import eCommerceDesign4 from "images/eCommerceDesign4.png";
import graphicDesign1 from "images/graphicDesign1.png";
import graphicDesign2 from "images/graphicDesign2.png";
import graphicDesign3 from "images/graphicDesign3.png";
import graphicDesign4 from "images/graphicDesign4.png";
import pin from "images/pin.png";
import uiDesign1 from "images/uiDesign1.png";
import uiDesign2 from "images/uiDesign2.png";
import uiDesign3 from "images/uiDesign3.png";
import videoProduction1 from "images/videoProduction1.png";
import videoProduction2 from "images/videoProduction2.png";
import videoProduction3 from "images/videoProduction3.png";
import footerBg from "images/footerBg.png";
import styles from "./index.module.scss";

const Main = () => {
  useAuth();
  const bannerBgSrc = useImageSrc(bannerBg);
  const footerBgSrc = useImageSrc(footerBg);
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% 100px",
      }}
    >
      {/* header模块 */}
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img
              src={logo1}
              alt=""
              onClick={() => {
                window.open(THAT_PAGE_URL, "_blank", "top=200,left=100");
              }}
            />
            <InteractionEyes />
          </div>
          <div className={styles.right}>
            <HeaderButton text="首页" actived />
            <HeaderButton text="电商设计" toUrl="/login" />
            <HeaderButton text="平面设计" toUrl="/login" />
            <HeaderButton text="UI设计" toUrl="/login" />
            <HeaderButton text="视频制作" toUrl="/login" />
            <div className={styles.phoneBox}>
              <img src={phone} alt="" />
              +86&nbsp;{PHONE_NUMBER}
            </div>
          </div>
        </div>
      </div>
      {/* banner模块 */}
      <div
        className={styles.banner}
        style={
          bannerBgSrc
            ? {
                backgroundImage: `url(${bannerBgSrc})`,
                backgroundSize: "100% 100%",
              }
            : {}
        }
      >
        <div className={styles.content}>
          <div className={styles.left}>
            <img src={slogan} alt="" className={styles.slogan} />
            <div className={styles.profession}>
              <img src={doubleRight} alt="" />
              <img src={profession} alt="" />
            </div>

            <img
              src={contactInformation}
              alt=""
              className={styles.contactInformation}
            />
          </div>
          <div className={styles.imgBox}>
            <MyImage
              src={author1}
              width={120}
              height={430}
              className={styles.leftImg}
            />
            <MyImage
              src={author2}
              width={220}
              height={480}
              className={styles.middleImg}
            />
            <MyImage
              src={author3}
              width={120}
              height={430}
              className={styles.rightImg}
            />
          </div>
        </div>
      </div>
      {/* 专业技能模块 */}
      <div className={styles.skill}>
        <div className={styles.content}>
          <div className={styles.title} data-englishtext="PROFESSIONAL SKILLS">
            <img src={star} alt="" />
            <span>专业技能</span>
            <img src={star} alt="" />
          </div>
          <div className={styles.list}>
            <SkillCircle
              text="PS"
              description="Photoshop"
              textColor="#00C8F9"
              bgColor="#001D26"
            />
            <SkillCircle
              text="AI"
              description="Illustrator"
              textColor="#FD7900"
              bgColor="#261300"
              delay={400}
            />
            <SkillCircle
              text="PR"
              description="Premiere"
              textColor="#9999FF"
              bgColor="#00005B"
              delay={800}
            />
            <SkillCircle
              text="CDR"
              description="CorelDRAW"
              textColor="#E5F3D2"
              bgColor="#61A706"
              delay={1200}
            />
            <SkillCircle
              text="JY"
              description="剪映"
              textColor="#EDEDED"
              bgColor="#000000"
              delay={1600}
            />
            <SkillCircle
              text="GD"
              description="更多技能"
              textColor="#EDEDED"
              bgColor="#4B805A"
              delay={2000}
            />
          </div>
        </div>
      </div>
      {/* 电商设计模块 */}
      <div className={styles.eCommerceDesign}>
        <div className={styles.content}>
          <ModuleTitle
            title="电商设计"
            englishTitle="E-COMMERCE DESIGN"
            toUrl=""
          />
          <div className={styles.box}>
            <div className={styles.left}>
              <div className={styles.topFloor}>
                <MyImage src={eCommerceDesign1} width={340} height={420} />
                <span className={styles.bottomText}>
                  <DoubleRightOutlined />
                  店铺首页
                </span>
              </div>
            </div>
            <div className={styles.middle}>
              <div className={styles.topOrBottom}>
                <div className={styles.topFloor}>
                  <MyImage src={eCommerceDesign2} width={400} height={170} />
                  <span className={styles.bottomText}>
                    <DoubleRightOutlined />
                    Banner
                  </span>
                </div>
              </div>
              <div className={styles.topOrBottom}>
                <div className={styles.topFloor}>
                  <MyImage src={eCommerceDesign3} width={400} height={170} />
                  <span className={styles.bottomText}>
                    <DoubleRightOutlined />
                    主图
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.topFloor}>
                <MyImage src={eCommerceDesign4} width={340} height={420} />
                <span className={styles.bottomText}>
                  <DoubleRightOutlined />
                  详情页
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 平面设计模块 */}
      <div className={styles.graphicDesign}>
        <div className={styles.content}>
          <ModuleTitle
            title="平面设计"
            englishTitle="GRAPHIC DESIGN"
            toUrl=""
          />
          <div className={styles.box}>
            <div className={styles.left}>
              <div className={styles.imgBox}>
                <div className={styles.shadowBox}>
                  <MyImage src={graphicDesign1} width={440} height={450} />
                </div>
                <span>海报</span>
              </div>
              <img src={pin} alt="" className={styles.pin} />
            </div>
            <div className={styles.right}>
              <div className={styles.top}>
                <div className={styles.imgBox}>
                  <div className={styles.shadowBox}>
                    <MyImage src={graphicDesign2} width={610} height={190} />
                  </div>
                  <span>产品画册</span>
                </div>
                <img src={pin} alt="" className={styles.pin} />
              </div>
              <div className={styles.bottom}>
                <div className={styles.left}>
                  <div className={styles.imgBox}>
                    <div className={styles.shadowBox}>
                      <MyImage src={graphicDesign3} width={265} height={190} />
                    </div>
                    <span>易拉宝</span>
                  </div>
                  <img src={pin} alt="" className={styles.pin} />
                </div>
                <div className={styles.right}>
                  <div className={styles.imgBox}>
                    <div className={styles.shadowBox}>
                      <MyImage src={graphicDesign4} width={265} height={190} />
                    </div>
                    <span>文化墙</span>
                  </div>
                  <img src={pin} alt="" className={styles.pin} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UI设计模块 */}
      <div className={styles.uiDesign}>
        <div className={styles.content}>
          <ModuleTitle title="UI设计" englishTitle="UI DESIGN" toUrl="" />
          <div className={styles.box}>
            <div className={styles.itemBox}>
              <div className={styles.topBox}>
                <div className={styles.bottomImgBox}>
                  <MyImage src={uiDesign1} width={372} height={470} />
                </div>
                <div className={styles.topImgBox}>
                  <MyImage src={uiDesign1} width={372} height={470} />
                </div>
              </div>
              <span className={styles.bottomText}>PC端</span>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.topBox}>
                <div className={styles.bottomImgBox}>
                  <MyImage src={uiDesign2} width={372} height={470} />
                </div>
                <div className={styles.topImgBox}>
                  <MyImage src={uiDesign2} width={372} height={470} />
                </div>
              </div>
              <span className={styles.bottomText}>移动端</span>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.topBox}>
                <div className={styles.bottomImgBox}>
                  <MyImage src={uiDesign3} width={372} height={470} />
                </div>
                <div className={styles.topImgBox}>
                  <MyImage src={uiDesign3} width={372} height={470} />
                </div>
              </div>
              <span className={styles.bottomText}>图标</span>
            </div>
          </div>
        </div>
      </div>
      {/* 视频制作模块 */}
      <div className={styles.videoProduction}>
        <div className={styles.content}>
          <ModuleTitle
            title="视频制作"
            englishTitle="VIDEO PRODUCTION"
            toUrl=""
          />
          <div className={styles.box}>
            <div className={styles.itemBox}>
              <MyImage
                src={videoProduction1}
                width={380}
                height={280}
                showBgColor
              />
              <PlayCircleFilled />
            </div>
            <div className={styles.itemBox}>
              <MyImage
                src={videoProduction2}
                width={380}
                height={280}
                showBgColor
              />
              <PlayCircleFilled />
            </div>
            <div className={styles.itemBox}>
              <MyImage
                src={videoProduction3}
                width={380}
                height={280}
                showBgColor
              />
              <PlayCircleFilled />
            </div>
          </div>
        </div>
      </div>
      {/* footer模块 */}
      <div
        className={styles.footer}
        style={
          footerBgSrc
            ? {
                backgroundImage: `url(${footerBgSrc})`,
                backgroundSize: "100% 100%",
              }
            : {}
        }
      >
        <div className={styles.content}>
          <img src={logo2} alt="" />
          <div className={styles.rightBox}>
            <div className={styles.text}>用眼看世界，用心做设计</div>
            <div className={styles.statement}>
              声明：本站所有素材版权均为作者本人所有，未经作者授权一律不得商用，违者必究。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
