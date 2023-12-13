/**
 * 跨域页面实现量子纠缠实时通信
 */
import {
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  RefObject,
} from "react";
import useScreenPosition from "hooks/useScreenPosition";
import useStorage from "./useStorage";

interface ThatPageInfo {
  pageId: string;
  x: number;
  y: number;
}

const useQuantumEntanglement = (
  iframeId: string,
  thatPageUrl: string,
  receiveKey: string,
  elementRef?: RefObject<HTMLDivElement | null>
) => {
  const pageId = useRef<string>(Math.random().toString(36).substring(2));
  const [thatPageInfo, setThatPageInfo] = useState<ThatPageInfo | null>(null);
  const thatPageId = useRef<string>("");
  const isThatPageReady = useRef<boolean>(false);
  const sendTimer = useRef<number>(0);
  const receiveTimer = useRef<number>(0);

  const postInfo = useCallback(() => {
    if (iframeId && isThatPageReady.current) {
      const aIframe = document.getElementById(iframeId);
      if (aIframe) {
        let x = 0;
        let y = 0;
        if (elementRef?.current) {
          const { top, left, width, height } =
            elementRef.current.getBoundingClientRect();
          x = left + window.screenLeft + width / 2;
          y = top + window.screenTop + height / 2;
        } else {
          x = window.innerWidth / 2 + window.screenLeft;
          y = window.innerHeight / 2 + window.screenTop;
        }
        const data = { pageId: pageId.current, x, y };
        (aIframe as HTMLIFrameElement).contentWindow?.postMessage(
          JSON.stringify(data),
          thatPageUrl
        );
      }
    }
  }, []);

  // 发送保活信息，维持通信状态
  const postKeepAliveInfo = useCallback(() => {
    if (iframeId && isThatPageReady.current) {
      const aIframe = document.getElementById(iframeId);
      if (aIframe) {
        sendTimer.current = 0;
        const data = {
          pageId: pageId.current,
          keepAlive: true,
          timestamp: new Date().getTime(),
        };
        (aIframe as HTMLIFrameElement).contentWindow?.postMessage(
          JSON.stringify(data),
          thatPageUrl
        );
        if (!receiveTimer.current) {
          receiveTimer.current = window.setTimeout(() => {
            receiveTimer.current = 0;
            window.localStorage.removeItem(receiveKey);
            thatPageId.current = "";
            setThatPageInfo(null);
          }, 1500);
        }
      }
    }
  }, []);

  // const onStorage = useCallback((e: any) => {
  //   console.log(123, e);
  //   if (e.key === "keepAliveInfo") {
  //     if (e.newValue) {
  //       const keepAliveInfo = JSON.parse(e.newValue);
  //       if (keepAliveInfo && keepAliveInfo.pageId === thatPageId.current) {
  //         // 如果收到了保活信息,则清除receiveTimer
  //         if (receiveTimer.current) {
  //           window.clearTimeout(receiveTimer.current);
  //           receiveTimer.current = 0;
  //         }
  //       }
  //     }
  //   } else if (e.key === receiveKey) {
  //     if (e.newValue) {
  //       const thatPageInfo = JSON.parse(e.newValue);
  //       if (thatPageInfo) {
  //         thatPageId.current = thatPageInfo.pageId;
  //         setThatPageInfo(thatPageInfo);
  //       } else {
  //         thatPageId.current = "";
  //         setThatPageInfo(null);
  //       }
  //     } else {
  //       thatPageId.current = "";
  //       setThatPageInfo(null);
  //     }
  //   }
  // }, []);

  // 获取localStorage中的另一页面的信息，并setThatPageInfo
  const getLocalThatPageInfo = () => {
    const thatPageInfoStr = window.localStorage.getItem(receiveKey);
    if (thatPageInfoStr) {
      const thatPageInfo = JSON.parse(thatPageInfoStr);
      if (thatPageInfo) {
        thatPageId.current = thatPageInfo.pageId;
        setThatPageInfo(thatPageInfo);
      } else {
        thatPageId.current = "";
        setThatPageInfo(null);
      }
    } else {
      thatPageId.current = "";
      setThatPageInfo(null);
    }
  };

  const resendMessage = useCallback(() => {
    if (window.self === window.top) {
      postInfo();
      getLocalThatPageInfo();
    }
  }, []);

  useScreenPosition(resendMessage);

  useLayoutEffect(() => {
    if (window.self === window.top) {
      if (iframeId && elementRef?.current) {
        const aIframe: HTMLIFrameElement = document.createElement("iframe");
        aIframe.id = iframeId;
        aIframe.style.visibility = "hidden";
        console.log(111);
        aIframe.onload = () => {
          console.log("iframe ready");
          isThatPageReady.current = true;
          resendMessage();

          // window.addEventListener("storage", onStorage);
          window.addEventListener("resize", resendMessage);
          sendTimer.current = window.setInterval(() => {
            postKeepAliveInfo();
          }, 600);
        };
        aIframe.src = thatPageUrl;
        elementRef.current.appendChild(aIframe);
      }
    }

    return () => {
      if (window.self === window.top) {
        // window.removeEventListener("storage", onStorage);
        window.removeEventListener("resize", resendMessage);
        sendTimer.current && window.clearInterval(sendTimer.current);
        receiveTimer.current && window.clearTimeout(receiveTimer.current);
      }
    };
  }, []);

  const onReceiveKeepAliveInfo = useCallback((newValue: string | null) => {
    console.log(123, newValue);
    if (newValue) {
      const keepAliveInfo = JSON.parse(newValue);
      if (keepAliveInfo && keepAliveInfo.pageId === thatPageId.current) {
        // 如果收到了保活信息,则清除receiveTimer
        if (receiveTimer.current) {
          window.clearTimeout(receiveTimer.current);
          receiveTimer.current = 0;
        }
      }
    }
  }, []);

  const onReceiveThatPageInfo = useCallback((newValue: string | null) => {
    console.log(456, newValue);
    if (newValue) {
      const thatPageInfo = JSON.parse(newValue);
      if (thatPageInfo) {
        thatPageId.current = thatPageInfo.pageId;
        setThatPageInfo(thatPageInfo);
      } else {
        thatPageId.current = "";
        setThatPageInfo(null);
      }
    } else {
      thatPageId.current = "";
      setThatPageInfo(null);
    }
  }, []);

  useStorage("keepAliveInfo", onReceiveKeepAliveInfo);
  useStorage(receiveKey, onReceiveThatPageInfo);

  return { thatPageInfo, resendMessage };
};

export default useQuantumEntanglement;
