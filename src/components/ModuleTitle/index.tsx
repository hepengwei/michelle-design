import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

interface ModuleTitleProps {
  title: string;
  englishTitle?: string;
  toUrl?: string;
}

const ModuleTitle = (props: ModuleTitleProps) => {
  const { title, englishTitle = "", toUrl = "" } = props;
  const navigate = useNavigate();

  const onclick = () => {
    toUrl && navigate(toUrl);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topFloor}>
        <div className={styles.left}>{title}</div>
        {toUrl && (
          <div className={styles.right} onClick={onclick}>
            查看更多&nbsp;&gt;
          </div>
        )}
      </div>
      {englishTitle && (
        <div className={styles.englishTitle}>{englishTitle}</div>
      )}
    </div>
  );
};

export default ModuleTitle;
