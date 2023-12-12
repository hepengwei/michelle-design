/**
 * 预加载图片，未加载或加载失败返回''，加载成功后返回图片地址
 */
import { useState, useRef, useEffect, useCallback } from "react";

const useImageSrc = (src: string) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const imgUrlRef = useRef<string>("");

  const onLoad = useCallback(() => {
    imgUrlRef.current = src;
    setImgUrl(src);
  }, [src]);

  useEffect(() => {
    if (imgUrlRef.current) {
      imgUrlRef.current = "";
      setImgUrl("");
    }
    if (src) {
      const image = new Image();
      image.onload = onLoad;
      image.src = src;
    }
  }, [src]);

  return imgUrl;
};

export default useImageSrc;
