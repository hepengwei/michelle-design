/**
 * 监听跨域页面post过来的消息
 */
import { useLayoutEffect, useCallback } from "react";
import { PASSWORD } from "constants/common";

const isDev =
  window.location.host.includes("localhost") ||
  window.location.host.includes("127.0.0.1");

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
