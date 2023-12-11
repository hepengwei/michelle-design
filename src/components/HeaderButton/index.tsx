import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

interface HeaderButtonProps {
  text: string;
  actived?: boolean;
  toUrl?: string;
  style?: Record<string, any>;
}

const HeaderButton = (props: HeaderButtonProps) => {
  const { text, actived = false, toUrl = "", style = {} } = props;
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLDivElement>(null);

  const onMouse = (e: any) => {
    if (buttonRef.current) {
      const { left, top } = buttonRef.current.getBoundingClientRect();
      const x = e.pageX - left;
      const y = e.pageY - top;
      buttonRef.current.style.setProperty("--xPos", `${x}px`);
      buttonRef.current.style.setProperty("--yPos", `${y}px`);
    }
  };

  const onclick = () => {
    // navigate(toUrl);
  };

  return actived ? (
    <div style={{ backgroundColor: "#4b805a" }} className={styles.container}>
      <span style={{ color: "#fff" }}>{text}</span>
    </div>
  ) : (
    <div
      style={{ cursor: actived ? "no-drop" : "pointer", ...style }}
      className={styles.container}
      onMouseOver={onMouse}
      onMouseLeave={onMouse}
      onClick={onclick}
      ref={buttonRef}
    >
      <span>{text}</span>
    </div>
  );
};

export default HeaderButton;
