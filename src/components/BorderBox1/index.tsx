import React, { useMemo } from "react";
import MyImage from "components/MyImage";
import borderImg11 from "images/borderImg11.png";
import borderImg12 from "images/borderImg12.png";
import borderImg13 from "images/borderImg13.png";
import styles from "./index.module.scss";

const padding = 15;

interface BorderBoxProps {
  url: string;
  borderType: number;
  width: number;
  height: number;
  centerTop?: boolean;
  onClick?: () => void;
  className?: string;
}

const BorderBox1 = (props: BorderBoxProps) => {
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
        return borderImg11;
      case 2:
        return borderImg12;
      case 3:
        return borderImg13;
      default:
        return borderImg11;
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

export default BorderBox1;
