import React, { useMemo } from "react";
import MyImage from "components/MyImage";
import borderImg1 from "images/borderImg1.png";
import borderImg2 from "images/borderImg2.png";
import borderImg3 from "images/borderImg3.png";
import borderImg4 from "images/borderImg4.png";
import borderImg5 from "images/borderImg5.png";
import styles from "./index.module.scss";

const padding = 30;

interface BorderBoxProps {
  url: string;
  borderType: number;
  width: number;
  height: number;
  centerTop?: boolean;
  onClick?: () => void;
  className?: string;
}

const BorderBox2 = (props: BorderBoxProps) => {
  const {
    url,
    borderType,
    width,
    height,
    centerTop = false,
    className,
    onClick,
  } = props;

  const borderImg = useMemo(() => {
    switch (borderType) {
      case 1:
        return borderImg1;
      case 2:
        return borderImg2;
      case 3:
        return borderImg3;
      case 4:
        return borderImg4;
      case 5:
        return borderImg5;
      default:
        return borderImg1;
    }
  }, [borderType]);

  return (
    <div
      className={`${styles.container} ${className}`}
      style={{
        backgroundImage: `url("${borderImg}")`,
        backgroundSize: "cover",
        width,
        height,
        cursor: onClick ? "pointer" : "noset",
      }}
      onClick={() => onClick?.()}
    >
      <MyImage
        src={url}
        width={width - padding * 2}
        height={height - padding * 2}
        centerTop={centerTop}
      />
    </div>
  );
};

export default BorderBox2;
