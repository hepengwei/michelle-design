import React, { ReactNode } from "react";
import MyImage from "components/MyImage";
import styles from "./index.module.scss";

const padding = 15;

interface BorderBoxProps {
  url: string;
  width: number;
  height: number;
  centerTop?: boolean;
  onClick?: () => void;
  className?: string;
}

const BorderBox1 = (props: BorderBoxProps) => {
  const { url, width, height, centerTop = false, className, onClick } = props;
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{ width, height, cursor: onClick ? "pointer" : "noset" }}
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
