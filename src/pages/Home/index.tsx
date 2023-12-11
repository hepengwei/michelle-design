// @ts-nocheck
import React, { useEffect } from "react";
import {
  useRoutes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { contentRoutes as contentRoutesConfig } from "@/routes/routes";
import { PASSWORD, DEFAULT_PAGE_URL } from "constants/common";
import styles from "./index.module.scss";

const Home = () => {
  const contentRoutes = useRoutes(contentRoutesConfig);
  const [search] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

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
      <div className={styles.container_content}>{contentRoutes}</div>
    </div>
  );
};

export default Home;
