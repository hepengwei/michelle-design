import { useEffect } from "react";
import { PASSWORD } from "constants/common";
import { useNavigate, useSearchParams } from "react-router-dom";

const useAuth = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const password = window.localStorage.getItem("password");
    if (password !== PASSWORD) {
      if (search && search.get("password")) {
        navigate(`/login?password=${search.get("password")}`);
      } else {
        navigate("/login");
      }
    }
  }, []);
};

export default useAuth;
