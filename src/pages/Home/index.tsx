// @ts-nocheck
import React, { useRef, useEffect } from "react";
import {
  useRoutes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  contentRoutes as contentRoutesConfig,
  showHeaderPaths,
} from "@/routes/routes";
import {
  PASSWORD,
  DEFAULT_PAGE_URL,
  THAT_PAGE_URL,
  RECEIVE_THAT_KEY,
} from "constants/common";
import { useGlobalContext } from "hooks/useGlobalContext";
import useMessage from "hooks/useMessage";
import useGoogleAnalytics from "hooks/useGoogleAnalytics";
import Header from "components/Header";
import styles from "./index.module.scss";

const Home = () => {
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  if (!isDev) {
    useGoogleAnalytics();
  }
  const containerContentRef = useRef<HTMLDivElement>(null);
  const { setScrollTop, setScrollContentRef } = useGlobalContext();
  const contentRoutes = useRoutes(contentRoutesConfig);
  const [search] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  useMessage(THAT_PAGE_URL, RECEIVE_THAT_KEY);

  const onScroll = () => {
    setScrollTop(containerContentRef.current?.scrollTop);
  };

  useEffect(() => {
    const { pathname } = location;
    const password = window.localStorage.getItem("password");
    if (password !== PASSWORD) {
      if (search && search.get("password")) {
        navigate(`/login?password=${search.get("password")}`);
      } else {
        navigate("/login");
      }
    } else {
      if (!pathname || pathname === "/") {
        navigate(DEFAULT_PAGE_URL);
      }
    }
  }, [location]);

  useEffect(() => {
    setScrollContentRef(containerContentRef);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.container_content}
        onScroll={onScroll}
        ref={containerContentRef}
      >
        {location && showHeaderPaths.includes(location.pathname) && <Header />}
        {contentRoutes}
      </div>
    </div>
  );
};

export default Home;
