import React, { ReactNode } from "react";
import MyImage from "components/MyImage";
import styles from "./index.module.scss";

const padding = 30;

interface BorderBoxProps {
  url: string;
  width: number;
  height: number;
  className?: string;
}

const BorderBox2 = (props: BorderBoxProps) => {
  const { url, width, height, className } = props;
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{ width, height }}
    >
      <MyImage
        src={url}
        width={width - padding * 2}
        height={height - padding * 2}
      />
    </div>
  );
};

export default BorderBox2;