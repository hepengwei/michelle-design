import React, { useCallback, useEffect, useRef } from "react";
import styles from "./index.module.scss";

interface SkillCircleProps {
  text: string;
  description: string;
  textColor?: string;
  bgColor?: string;
  delay?: number;
}

const outerCircleSize = 100; // 外边框的宽高
const speed = 0.8; // 动画速度

const SkillCircle = (props: SkillCircleProps) => {
  const {
    text,
    description,
    textColor = "#fff",
    bgColor = "#000",
    delay = 0,
  } = props;
  const outerCircleRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number>(0);
  const height = useRef<number>(10);
  const direction = useRef<"toTop" | "toBottom">("toTop");

  const animation = useCallback(() => {
    if (outerCircleRef.current) {
      let newHeight = height.current;
      if (direction.current === "toTop") {
        if (height.current >= outerCircleSize - 10) {
          direction.current = "toBottom";
          newHeight -= speed;
        } else {
          newHeight += speed;
        }
      } else {
        if (height.current <= 10) {
          direction.current = "toTop";
          newHeight += speed;
        } else {
          newHeight -= speed;
        }
      }
      outerCircleRef.current.style.setProperty("--height", `${newHeight}px`);
      height.current = newHeight;
      frameId.current = window.requestAnimationFrame(animation);
    }
  }, []);

  useEffect(() => {
    if (outerCircleRef.current) {
      outerCircleRef.current.style.setProperty("--height", `${height.current}px`);
    }
    window.setTimeout(() => {
      frameId.current = window.requestAnimationFrame(animation);
    }, delay);

    return () => {
      frameId.current && window.cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{ color: textColor, backgroundColor: bgColor }}
      >
        {text}
        <div className={styles.outerCircle} ref={outerCircleRef} />
      </div>
      <span>{description}</span>
    </div>
  );
};

export default SkillCircle;
