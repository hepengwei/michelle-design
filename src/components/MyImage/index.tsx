import React from "react";
import { Skeleton } from "antd";
import useImageSrc from "@/hooks/useImageSrc";

interface MyImageProps {
  src: string;
  width?: number;
  height?: number;
  showBgColor?: boolean;
  noCover?: boolean;
  centerTop?: boolean; // 图片整体位置左右居中，从上到下，默认为false，上下左右都居中
  onClick?: () => void;
  className?: string;
  style?: Record<string, any>;
}

const MyImage = (props: MyImageProps) => {
  const {
    src,
    width = 0,
    height = 0,
    showBgColor = false,
    noCover = false,
    centerTop = false,
    className = "",
    style = {},
    onClick,
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
              alignItems: centerTop ? "flex-start" : "center",
              backgroundColor: showBgColor ? "#F0F0F0" : "noset",
              width: `${width}px`,
              height: `${height}px`,
              overflow: "hidden",
              cursor: onClick ? "pointer" : "noset",
              ...style,
            }
          : {
              display: "flex",
              justifyContent: "center",
              alignItems: centerTop ? "flex-start" : "center",
              backgroundColor: showBgColor ? "#F0F0F0" : "noset",
              cursor: onClick ? "pointer" : "noset",
              ...style,
            }
      }
      onClick={() => onClick?.()}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          style={
            !noCover && width && height
              ? centerTop
                ? { width: `${width}px`, height: "auto" }
                : {
                    width: `${width}px`,
                    height: `${height}px`,
                    objectFit: "cover",
                  }
              : {}
          }
        />
      ) : width && height ? (
        <Skeleton.Image
          active
          style={{ width: `${width}px`, height: `${height}px` }}
        />
      ) : null}
    </div>
  );
};

export default MyImage;
