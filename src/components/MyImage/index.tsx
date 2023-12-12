import React from "react";
import { Skeleton } from "antd";
import useImageSrc from "@/hooks/useImageSrc";

interface MyImageProps {
  src: string;
  width?: number;
  height?: number;
  showBgColor?: boolean;
  className?: string;
  style?: Record<string, any>;
}

const MyImage = (props: MyImageProps) => {
  const {
    src,
    width = 0,
    height = 0,
    showBgColor = false,
    className = "",
    style = {},
  } = props;
  const imageSrc = useImageSrc(src);

  return (
    <div
      className={className}
      style={
        width && height
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: showBgColor ? "#F0F0F0" : "noset",
              width: `${width}px`,
              height: `${height}px`,
              ...style,
            }
          : {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: showBgColor ? "#F0F0F0" : "noset",
              ...style,
            }
      }
    >
      {imageSrc ? (
        <img src={imageSrc} alt="" />
      ) : width && height ? (
        <Skeleton.Image
          active={true}
          style={{ width: `${width}px`, height: `${height}px` }}
        />
      ) : null}
    </div>
  );
};

export default MyImage;
