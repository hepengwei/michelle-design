/**
 * 监听跨域页面post过来的消息
 */
import { useLayoutEffect, useCallback } from "react";
import { PASSWORD } from "constants/common";

const useMessage = (thatPageUrl: string, receiveKey: string) => {
  const onMessage = useCallback((e: any) => {
    console.log(666, e);
    if (e.origin !== thatPageUrl) return;
    if (e.data) {
      if (e.data === "autoSavePassword") {
        window.localStorage.setItem("password", PASSWORD);
      } else if (e.data.includes("keepAlive")) {
        window.localStorage.setItem("keepAliveInfo", e.data);
      } else {
        window.localStorage.setItem(receiveKey, e.data);
      }
    } else {
      window.localStorage.setItem("keepAliveInfo", "");
      window.localStorage.setItem(receiveKey, "");
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("message", onMessage, false);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);
};

export default useMessage;
