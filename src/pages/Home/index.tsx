// @ts-nocheck
import React, { useEffect } from "react";
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
import useMessage from "hooks/useMessage";
import useGoogleAnalytics from "hooks/useGoogleAnalytics";
import Header from "components/Header";
import styles from "./index.module.scss";

const Home = () => {
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  if (!isDev) {
    useGoogleAnalytics();
  }
  const contentRoutes = useRoutes(contentRoutesConfig);
  const [search] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  useMessage(THAT_PAGE_URL, RECEIVE_THAT_KEY);

  useEffect(() => {
    const { pathname } = location;
    const password = window.localStorage.getItem("password");
    if (password !== PASSWORD) {
      if (search && search.get("password")) {
        navigate(`/login?password=${search.get("password")}`);
      } else {
        navigate("/login");
      }
    } else if (!pathname || pathname === "/") {
      navigate(DEFAULT_PAGE_URL);
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        {location && showHeaderPaths.includes(location.pathname) && <Header />}
        {contentRoutes}
      </div>
    </div>
  );
};

export default Home;
