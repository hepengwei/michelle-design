import React from "react";
import { Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import useImageSrc from "@/hooks/useImageSrc";

interface MyImageProps {
  src: string;
  width?: number;
  height?: number;
  showBgColor?: boolean;
  noCover?: boolean;
  toUrl?: string;
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
    toUrl,
    className = "",
    style = {},
  } = props;
  const imageSrc = useImageSrc(src);
  const navigate = useNavigate();

  const onclick = () => {
    toUrl && navigate(toUrl);
  };

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
              cursor: toUrl ? "pointer" : "noset",
              ...style,
            }
          : {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: showBgColor ? "#F0F0F0" : "noset",
              cursor: toUrl ? "pointer" : "noset",
              ...style,
            }
      }
      onClick={onclick}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          style={
            !noCover && width && height
              ? {
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
