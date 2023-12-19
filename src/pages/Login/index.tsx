/**
 * 登录页
 */
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input, Button, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { PASSWORD, DEFAULT_PAGE_URL } from "constants/common";
import useImageSrc from "hooks/useImageSrc";
import loginBg from "images/loginBg.png";
import logo1 from "images/logo1.png";
import logo2 from "images/logo2.png";
import styles from "./index.module.scss";

const maxAmbiguity = 6; // 背景图最大模糊度

const Login = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const loginBgSrc = useImageSrc(loginBg);
  const [password, setPassword] = useState<string>(
    search && search.get("password") ? search.get("password") || "" : ""
  );
  const [ambiguity, setAmbiguity] = useState<number>(maxAmbiguity);

  const onPasswordChange = (e: any) => {
    if (e.target.value) {
      setAmbiguity(Math.max(0, maxAmbiguity - e.target.value.length));
    } else {
      setAmbiguity(maxAmbiguity);
    }
    setPassword(e.target.value);
  };

  const onLogin = () => {
    const psd = password?.trim();
    if (!psd) {
      message.warning("请输入密码");
    } else if (psd !== PASSWORD) {
      message.warning("密码错误，请重新输入");
      window.localStorage.setItem("password", "");
    } else {
      window.localStorage.setItem("password", PASSWORD);
      navigate(DEFAULT_PAGE_URL);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.bgImg}
        style={
          loginBgSrc
            ? {
                backgroundImage: `url(${loginBgSrc})`,
                filter: `blur(${ambiguity}px)`,
              }
            : {}
        }
      />
      <div className={styles.content}>
        <div className={styles.leftBox}>
          <img src={logo2} alt="" />
        </div>
        <div className={styles.rightBox}>
          <img src={logo1} alt="" />
          <Input
            className={styles.input}
            size="large"
            placeholder="请输入密码"
            maxLength={20}
            prefix={<LockOutlined />}
            autoFocus
            value={password}
            onChange={onPasswordChange}
            onPressEnter={onLogin}
          />
          <Button
            className={styles.btn}
            size="large"
            type="primary"
            onClick={onLogin}
          >
            登录
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
