/**
 * 平面设计页
 */
import React, { useState } from "react";
import Viewer from "react-viewer";
import Banner from "components/Banner";
import ModuleTitle from "components/ModuleTitle";
import BorderBox2 from "components/BorderBox2";
import Footer from "components/Footer";
import { IMG_PREFIX } from "constants/common";
import bannerBg from "images/graphicDesign/bannerBg.png";
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
import styles from "./index.module.scss";

const posterList = [
  `${IMG_PREFIX}graphicDeign/poster1.jpeg?q-sign-algorithm=sha1&q-ak=AKIDaD1d88NPvaDqrddrKzCBt8SEzgpUe4UP4aAiJdJAKdNdcd8vfr6L-M7VFSbxFzY3&q-sign-time=1710231733;1710235333&q-key-time=1710231733;1710235333&q-header-list=host&q-url-param-list=ci-process&q-signature=ae4d4d960d87f1e742701b36b812997a963664a0&x-cos-security-token=MJ7BsdLwBC5e6uGVOktfhEnH0pqXobMa873d59ce8aba9a273b3c48586cd571beHBRagxhkXFBRLV5LWuolkOMA-oDiL73B7yha4TBNJ_Jdenm_PAYs4_vnq9YCz3cGOW4t6vVpy5TdGbFisq-Dr-dqNEZhQ833i83Dg8RfX_rKMOQJSnDgvJ0PeT3XeCsDavdRl9Tn1gYcBKzwOIU9xj3-EnUzl0hOS6HdhMOwQSLghd8jyL9j3MzMSRa4zWOR&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster2.jpg?q-sign-algorithm=sha1&q-ak=AKIDvlEMVPDa4TpdwnETravZ0-G8MpnejLD3bdJjCUaQl88CMp-RYylVggGte1U5hpT5&q-sign-time=1710231825;1710235425&q-key-time=1710231825;1710235425&q-header-list=host&q-url-param-list=ci-process&q-signature=f070950bc1c14a34783d92133e746d5a8d4b3f49&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4ae85b184c0c652e367e895b5dd0682bbcXnQH-Qw59FJoTAyzLyC_sfujsHMh03hhZi7-8ABT7nQICH3ppupHEiTANAacAhjzV4bWz01_vwlk95xaVuZTmlzbyfKDgoZZJ7IX-OpIvwYJURS9zAvW_lo7QhZgg00DCYnk5HwKWHVKV1HMZvPIV68UvDFTcnpjvrd_UGm_k29_XvWN4zN17B5zjtowysgu&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster3.jpeg?q-sign-algorithm=sha1&q-ak=AKIDNXySF59KfD4JG9Z9IYkW5iw8QV17HcHWTgQmysNoF7U1IkVyk00jBWwTRe2uTb8G&q-sign-time=1710232163;1710235763&q-key-time=1710232163;1710235763&q-header-list=host&q-url-param-list=ci-process&q-signature=e507430092f5e3d15840a0fe3caf7b5fae40f98d&x-cos-security-token=MJ7BsdLwBC5e6uGVOktfhEnH0pqXobMacb5c14350aeade70f402299a5c2ab618HBRagxhkXFBRLV5LWuolkD0ysKqL5Gcv0R5Gx6idegtomvc1Tl_6wYj-aXUp7u-7Fvf9FKog6-_8vHPOYyBT1lnRZ-D58Vuk8WINZcaUnsaaCt_ssN2_CB038UqNB_3nqhsCpUywcJmqEye4gGbUPp_kqNIlj2QhbNz_880QzEC7H76vrqH2ydj_McpP7Jb6&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster4.jpeg?q-sign-algorithm=sha1&q-ak=AKIDJtrv5pUYY5_MBcMFhUj0_ZHBVS4ViNxhVQeGOXE9Hn3pCaAMBrGR85GMjirf9VmU&q-sign-time=1710232557;1710236157&q-key-time=1710232557;1710236157&q-header-list=host&q-url-param-list=ci-process&q-signature=9a2b98f293af0d640445fa8c8cbb26e921397161&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a975c3299e3cda123f5c6b4dd52792d30XnQH-Qw59FJoTAyzLyC_sTNnSBNabxIChDjpj71N5wE6eHhEtTEz8hR1o8fvi9bVNtINeV79F3ZIPkPmsMre9TaYVF35pWY-IgoJ12xDxYnv9jHSiSpFcPmwfTr_ZIoH-gFyIX8qKGM4-oxpGtNOdOgJaW1KvsYTaSRRhcpZglBU2CHDdDcJd9UVjhS8nimf&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster5.jpg?q-sign-algorithm=sha1&q-ak=AKID-Sqbv219HGPWqzBuHcpmpjwAQn-ycnghzSDdEbPMfF3vy5pPVxTLCvYFl8aiV_HM&q-sign-time=1710232666;1710236266&q-key-time=1710232666;1710236266&q-header-list=host&q-url-param-list=ci-process&q-signature=0b8978ec2a5f8e46a51fcd2f65107947b62b5fdd&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a21c1585a20e9b64d68bf7b1518d0a7c6XnQH-Qw59FJoTAyzLyC_sVhTGGqxJeEJCc2sJ-1erByZoikUSI_DLKduedDJpG_Y6C6RreJ5z2UlWE_9JdCkqwqWk3Tv7DRKZpksKUPNDvgU_R38M1XNy5cjtKBOgAtRGtddP8VrINax9hG7IkrY8adzR0KVGCiDeOhRu-duQXmmp7WD2WPdj4FwoUlqPnEa&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster6.jpeg?q-sign-algorithm=sha1&q-ak=AKIDUaIxxO824pO4XUDQwKJhEOePGNhETfJ6PWFmXj0g226OVM2OMNkjsNhGsA73m56t&q-sign-time=1710232702;1710236302&q-key-time=1710232702;1710236302&q-header-list=host&q-url-param-list=ci-process&q-signature=de7aaafcb12fb58d76860ec9f6afcd685e315f30&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a0df2420cc6bf451bae3bfbc70ddde124XnQH-Qw59FJoTAyzLyC_sfDpWLD6SspBmsXs3SsHUQyfbhN1N7CPo9ZwVr12BcTCBN-P3NkOrZM_F0N6aNkLX85lshu5N7LB9rAIMZnpr-_FxnQn73HKt0JVbNfuSauVyJwEsf-CNyhuCN-mQjiAVh2Xc3DJukjRIIpVK-vIedde62PPcFoTigjqYjbwoapO&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster7.jpg?q-sign-algorithm=sha1&q-ak=AKIDV6t0-c-aNUrGgEQGbknID10K6DHlMZjhNMGD5BLwEmWREjkKE5diPFvM8vpUvFB2&q-sign-time=1710232731;1710236331&q-key-time=1710232731;1710236331&q-header-list=host&q-url-param-list=ci-process&q-signature=b9d7ae8c783128e2d0378be9b16dc868bca883d9&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a2bfbd74a4da451ef370b82bc0c63648cXnQH-Qw59FJoTAyzLyC_scqpHIQoOFOYCLt2ZAUIXhGsvdqThl7cbLQVjzpwvs96fJ5jGCQFMaJ8t2LYQFvQm9Es6sFu1-P8F5mnl0sDPONjmPyHrR7tIskCDMP3giT29FrjFmYnpavpK501_TsV6X6Hn8rM2C56QCpIgl8b2i3X2paX4uZ5_a3jgpmpp_fu&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster8.jpg?q-sign-algorithm=sha1&q-ak=AKIDNGWZuFOA05OllsD-fhUqfQHzUS6sC8jszkPfHSwZoEHT8xXJsGeBFnoPUKaOCo4W&q-sign-time=1710232779;1710236379&q-key-time=1710232779;1710236379&q-header-list=host&q-url-param-list=ci-process&q-signature=b908facbab367fa6a5128465aef0c8eb45835a66&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a3e4fbb9214dcb6024fa91aaff71500b6XnQH-Qw59FJoTAyzLyC_sbeuO5VqzcjDhH-rxVn2p8MgF7JLpJekei0NQlkNZ07IW6b_yqNOaPRDz48Q_DRHyRGeytLlXzbBaJeHUHpR9sihFGmxj1-wvJEHbGtVfKNvzx_jhlg8PlxS76xZO6YgpEH-SRRUoqSANOrgifKGIf0Ry54pQAr4xJFUwg_Hua2D&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster9.jpg?q-sign-algorithm=sha1&q-ak=AKID0c-Q-gilKvM8KTSkbrXDOazBrEoz7g8OlHuq7lfsbs-k-jRFD1gC9kGFP4TFITP9&q-sign-time=1710232806;1710236406&q-key-time=1710232806;1710236406&q-header-list=host&q-url-param-list=ci-process&q-signature=7c441bf086a4cd008d2663280e4e1781fe0a2ab6&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4ae421ec4d53ebe7854cb13d0173140942XnQH-Qw59FJoTAyzLyC_sd1Vg2_3gcdx0wpsbXjyz1wiK6Fdc6U2igv_RAQlxs7jeouZ64GyvUicecAowAC0rl0RuKJegnW6IihqjxqS7Ih6hZd8E8K3eYEpxNMbAo8UGb3zI9e5kvgpkyXNFPWmjoDrDeoIzK6sg6H2rBSZcTCRJOz2HO_EHKO3VhfP8z5i&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster10.jpg?q-sign-algorithm=sha1&q-ak=AKIDKvCS6TQJWiBHfWihYgRPKMbbzuNl8hJ8VsSEg5am3RtpTBa08n4pLyO2ahasEQpn&q-sign-time=1710233020;1710236620&q-key-time=1710233020;1710236620&q-header-list=host&q-url-param-list=ci-process&q-signature=743dc4e1def15d4bab82d2259bf91b82e31ee833&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4ab9972ba339d7d9a9f889a2c749e6d78cXnQH-Qw59FJoTAyzLyC_sZBudUMSdoyNxyI30goEUP_UvNsPK0kZY4_MGIWlNgxJ10hzZQ62BUqb_eo-kM65AbUE1OxHAWjqvCMUElfWFwCp5bzIkCRFQtyrrQfjFwJMk3qAau5qJETPHbUCqBGGfOydx-OGyn-oXKpuoFKEeMk11bAm45oeQoi77WsbTKWX&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster11.jpg?q-sign-algorithm=sha1&q-ak=AKID8Su8mDKsLbGc6_37AOE8Xu-mzJTZ8shHgu_G2dREHtmfESaCzAmdSxknPdJVHv14&q-sign-time=1710233048;1710236648&q-key-time=1710233048;1710236648&q-header-list=host&q-url-param-list=ci-process&q-signature=65f9e88155a96c1fcb0dfd9a8d076e5010deecd6&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a11194d2829a0183f69e0a9c49a6bf3adXnQH-Qw59FJoTAyzLyC_sQpz3Gf3heLPDplzKnPyNkjAJFXTDHxF2Ha8uB-ISlAEmZYyDb0gozHOfCPl4QY2q5M7Yu6C4HKZC3UdSK67Iy7_k3RqtzpXAGWUruxbctSxlnxt3vy9G_T-KtIDWE9Hk74telG52tS2lGydy6iJW46mV98um7qQ1owMsCn-aJIM&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster12.jpg?q-sign-algorithm=sha1&q-ak=AKIDjMDkIqMGH_9zIjWEUeB2-cwG9QzsLigpH8cAXrcVQNzHeheE2fQq8ij_Tbz4rS5H&q-sign-time=1710233077;1710236677&q-key-time=1710233077;1710236677&q-header-list=host&q-url-param-list=ci-process&q-signature=c4bf792b14da02a62cac474f9a42ea42f7430abf&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4aeb5af789e197a48d13a4fa003a07e389XnQH-Qw59FJoTAyzLyC_sQ6JccRO5pU4OTTPOWN6D4L2wSnBZiDY5v5_m0lta6ccnFMOzgJamMKkTghaIhU3U5AVU97oe2Bhn65fqH733lA2euR3THm2ZHCNJAtn2F9_bHn8AuHnVkO6f19jPCv_plKDUTX7akfQhPQ5jlfIgRFGZMWlhSPdl5o1yznzau9S&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster13.jpg?q-sign-algorithm=sha1&q-ak=AKIDEhG53OJ_Xxoj7b4AtbWH9axRbGWoBoPe15Kqt1-Ct6x-TDTvqkCC2-cpLBNeYWPi&q-sign-time=1710233104;1710236704&q-key-time=1710233104;1710236704&q-header-list=host&q-url-param-list=ci-process&q-signature=9b0e23450aec42b26296ea90293deb625ff0bb9e&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4af5b3203a151eff226b93a44ab14a43f1XnQH-Qw59FJoTAyzLyC_sXVDE8uJR6yT3v0iv4aNmuiEyclwieL7w_qvbwnLKa178A95UoEZCkls390e1e6fI6dVtoyVnsCPwHKFBDqtgib92bu6G__jFvcIIN90IJ0rBH66ed-mu3O7XoUiAKmBCC_Q_70dp923upCo47jL_-mivM3JRUBFmsbLcl0FiBaX&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster14.jpg?q-sign-algorithm=sha1&q-ak=AKIDhKLPXS_YU2uJQs4cIlfyixy4q7_rebgpNLZUMSGL2lXhk2_w9bTZIhuBmycUIMa8&q-sign-time=1710233124;1710236724&q-key-time=1710233124;1710236724&q-header-list=host&q-url-param-list=ci-process&q-signature=95eee572ee65656f03de322780234faeafd2eaf2&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a98f43b9f6bf14c5fa5557dcb20b0a2ebXnQH-Qw59FJoTAyzLyC_sT7W_B4IzPk9zyg1fh_-7JYYFq39jhXdU0skchkiSu8gSxRAx0Bdy34MFQlxX81Gd-brSnxCbxHnAyyL2smuS6qPyuWDIYLG67nYqh1_TBi7cQH3APQlRttvi9YeLi5G0yiKcXlhFJs1-fL3Pz5GpNJWo8i1qVX1ANxG4-FiKL1q&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster15.jpg?q-sign-algorithm=sha1&q-ak=AKIDVtGhYiDG-xHfL0oz4AiszHmFDF_-NM42CuRk2TC4fp87RBiEtOF27OMdRqkMXZCw&q-sign-time=1710233151;1710236751&q-key-time=1710233151;1710236751&q-header-list=host&q-url-param-list=ci-process&q-signature=246311f667714d64428aa3727e3d069d6f1d858c&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a39689f057a44fdb1e19f1204240cf12cXnQH-Qw59FJoTAyzLyC_sRi1ZaxoCQ2jlCNPUaHsYfaulaAZ8OT2JNR-VtP7BBMKtQ-SehXjinTL9wkNz8ppk4cq-Cgq5RiXAp8bJbA2-eP4kwE5EcH7VKe-eigKa9_K4ijAgBW0HJUXxGFIVIAnyUKDIT4GAriu_6FbrAv_-wdfBXKmC4srn9O30R2ooAM9&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster16.jpg?q-sign-algorithm=sha1&q-ak=AKID5XAeHRrmPV4B58L9WcZf3a8-mTIcfjob5kRJaNYo_uJ9kv3oygC-a7BLtUpolfZT&q-sign-time=1710233184;1710236784&q-key-time=1710233184;1710236784&q-header-list=host&q-url-param-list=ci-process&q-signature=53a3f6db00de0fd025d5339001c23255afcd7a80&x-cos-security-token=MJ7BsdLwBC5e6uGVOktfhEnH0pqXobMad30290be9eb943f45709cae4664d4ae8HBRagxhkXFBRLV5LWuolkAudHxfKA1UKNpkXtDCWsmoudYu-I2rZTD-HOoCb-fKjebdtaYNhhfupFQJWq9Q6jnFfbl6JYupev_3Wbsg8z8kwGN9WSmpYfZMd5IYAporYZG-ANE-5ZWDk07xoD5u3sbjISF9aYgpmxtcQqYWSkvduFA8eXSvv0tmojM3NkigM&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster17.jpg?q-sign-algorithm=sha1&q-ak=AKIDQtIKzxhpKprrekEJwBgP2q2RAh1shGJ0Yu-EbAfP6IdlfFIQnC4uZ46dWaeeregR&q-sign-time=1710233220;1710236820&q-key-time=1710233220;1710236820&q-header-list=host&q-url-param-list=ci-process&q-signature=f8d53ff7c223cf95957fd45c067a8c10ad8779cc&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a87d34df42ff5f14d178b35c45b0afc99XnQH-Qw59FJoTAyzLyC_sd4ReDDZfvI6uiFX0zEIfWF8PJY4B_5cuPHDrnu-ISb_vIAYIXCs3G4jTSxDJijg2G1Q759b-4NmZBemF_OqLWdMQB0sf7JnrT3DMK1L9uTiJqjUURPmIRSfqqMOCQyuNSEwdSTs74KIr_Mqohr-qvfr9VUfTRvviNb0x3EypAo9&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster18.jpg?q-sign-algorithm=sha1&q-ak=AKIDbWJeOH-CrwElkomlA4Gm-g9Ha_dK0HRgVSAxkng3rmFbK3GhdnKu3gQ-I5xZECHJ&q-sign-time=1710233244;1710236844&q-key-time=1710233244;1710236844&q-header-list=host&q-url-param-list=ci-process&q-signature=25f54519c690b89c67c561258383d5faca832cb6&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a2dca0a669e962f5e2b78b9dc236b0fb6XnQH-Qw59FJoTAyzLyC_sdZ-I1E0n3lGnZN5ja4HZTdo53TlS_qEZO7Zew6Ed_yKCfvlt2DUKZEPpidTNMjmGN_Zp4gcRSURXHHlAyB8R8yv78YhmfursJ-tQAi07MAjxOkHvAgbviKJrM95e6HE0ntZ8OOFaZ7uzSS4U2_ie5vWojEHvWMnqOt22u5SoBd-&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster19.jpeg?q-sign-algorithm=sha1&q-ak=AKIDJQyvxAkLddhvefRDhGuF6a9ADjuxGgnbTCziZovO6DwgLqMSbr-gGYw7wnHjcIr_&q-sign-time=1710233268;1710236868&q-key-time=1710233268;1710236868&q-header-list=host&q-url-param-list=ci-process&q-signature=ba17df6e01b840e919449092325a46e6806976cb&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a6fc7c09724075f3cae594e2b0fa8ce2aXnQH-Qw59FJoTAyzLyC_sYuuia2mCrSzCjBRbpzEWZbjyMQD7fB8gaNDSxguash6pFfKBm_9uwTJY49NNUQCDwsfO3Cs1qEP1GhiGRhRb0UDpNRoi5_e8B8mQjYEuxLmb0BSu__-MYvdnKWRmSJ2wwRMp40DXvsb8N1B_TzX3jg1w7QVG67LvbB_fFsIEQKQ&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster20.jpg?q-sign-algorithm=sha1&q-ak=AKID35wykcFoYyKpFA4v_JfVwqTgF10ewJ9rbU_I7bqgB2KOtfQFcaTyS3QXgJqNVhl2&q-sign-time=1710233295;1710236895&q-key-time=1710233295;1710236895&q-header-list=host&q-url-param-list=ci-process&q-signature=138a3330bb1d0c323b42725116728116e0d731dc&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a152dd8959a8b1d2e4d44c796aa1c77f0XnQH-Qw59FJoTAyzLyC_saUxMCt8A-JhqsJfvz8WWzj1Z0nK-Dnx4sU8SzGIbJsaDbNx3xdks3KIdaqagYSOdezDEEvjN9ewag7AZggF60rf1l-f88UZiBdATj4BDVbFU5dQ0UzrBrT8IAQoiC0tPBJlNGyU00kTvz5pDbsplSAPGHqM0jgF4ygfsecglfmU&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster21.jpg?q-sign-algorithm=sha1&q-ak=AKIDdhRtmx_ESoXRWpjUGL5SYIj1D81Kj4pSfW_Sev9dcGYbF4dlb4T46h2oLHDGCYba&q-sign-time=1710233321;1710236921&q-key-time=1710233321;1710236921&q-header-list=host&q-url-param-list=ci-process&q-signature=ef5cb67738909f79d42ea0e431bbf548296693c8&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4a6e2fda7fbe0ed063a8798660746affc6XnQH-Qw59FJoTAyzLyC_sQQ539jiQnmHyyW8dnLnD1ttzBv0no65Jq6rGa0b26olIPw8EoYdhym13In3CzjbOdWtHj8YCsGl9biJH_YGaK3uYsCRHYfWw_6jtWN5Dh0odf4owzKgZ3lFax6bSPbknLzS7kXfDv5h6VveeGC6bWBMP40OCmfV4Bue66s63tAG&ci-process=originImage`,
  `${IMG_PREFIX}graphicDeign/poster22.jpg?q-sign-algorithm=sha1&q-ak=AKIDUNYdbT-TjFwvrnHxTDTc6ViaLUxIJLQpSBWhHxjvn1z3_Ys-WtcbjOniajWzoIEK&q-sign-time=1710233351;1710236951&q-key-time=1710233351;1710236951&q-header-list=host&q-url-param-list=ci-process&q-signature=86e59eebab349b49091d4257c8af2b885f15c288&x-cos-security-token=31WxAjH9yQ4PvKdakCO6n42f9kNVuK4acd9f6435cfd3f2f5e443c853e3cc35aaXnQH-Qw59FJoTAyzLyC_sXkNjdZE7CaS8TskbnPwo-TqnMQar6Ea_B9Ca7WrVv3Xd-O7HKoPkwTccFvsW6u5mOohm3vhXJ446r4_wAZ6tgUsimHmfJMZlfqZWNuupRjOAwuRzKdcUJNPAIwERilCFj3p8LsskjBF-5Q0BnfAE52BNwxHJkwZ0FBtSyOwH-Ku&ci-process=originImage`,
];

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
                url={posterList[6]}
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
                url={posterList[7]}
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
                url={posterList[8]}
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
                url={posterList[9]}
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
                url={posterList[10]}
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
                url={posterList[11]}
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
                url={posterList[12]}
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
                url={posterList[13]}
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
                url={posterList[14]}
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
                url={posterList[15]}
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
                url={posterList[16]}
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
                url={posterList[17]}
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
              { src: posterList[0], alt: "" },
              { src: posterList[1], alt: "" },
              { src: posterList[2], alt: "" },
              { src: posterList[3], alt: "" },
              { src: posterList[4], alt: "" },
              { src: posterList[5], alt: "" },
              { src: posterList[18], alt: "" },
              { src: posterList[6], alt: "" },
              { src: posterList[7], alt: "" },
              { src: posterList[8], alt: "" },
              { src: posterList[9], alt: "" },
              { src: posterList[10], alt: "" },
              { src: posterList[11], alt: "" },
              { src: posterList[12], alt: "" },
              { src: posterList[13], alt: "" },
              { src: posterList[14], alt: "" },
              { src: posterList[15], alt: "" },
              { src: posterList[16], alt: "" },
              { src: posterList[17], alt: "" },
              { src: posterList[19], alt: "" },
              { src: posterList[20], alt: "" },
              { src: posterList[21], alt: "" },
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
