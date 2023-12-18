/**
 * 监听跨域页面post过来的消息
 */
import { useLayoutEffect, useCallback } from "react";
import { PASSWORD } from "constants/common";

const useMessage = (thatPageUrl: string, receiveThatKey: string) => {
  const onMessage = useCallback((e: any) => {
    if (e.origin !== thatPageUrl) return;
    if (e.data) {
      if (e.data === "autoSavePassword") {
        window.localStorage.setItem("password", PASSWORD);
      } else if (e.data.includes("keepAlive")) {
        window.localStorage.setItem("keepAliveInfo", e.data);
      } else {
        window.localStorage.setItem(receiveThatKey, e.data);
      }
    } else {
      window.localStorage.setItem("keepAliveInfo", "");
      window.localStorage.setItem(receiveThatKey, "");
    }
  }, []);

  useLayoutEffect(() => {
    const isDev =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (isDev) {
      window.addEventListener("message", onMessage, false);
    }

    return () => {
      if (isDev) {
        window.removeEventListener("message", onMessage);
      }
    };
  }, []);
};

export default useMessage;
