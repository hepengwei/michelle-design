/**
 * 通过轮询监听localStorage的改变
 */
import { useRef, useLayoutEffect } from "react";

const useStorage = (
  key: string,
  callback: (newValue: string | null) => void,
  noMonitor = false // 是否无需监听，因为使用该hook时不能放在判断语句中
) => {
  const value = useRef<string | null>(
    !noMonitor ? window.localStorage.getItem(key) : null
  );
  const timer = useRef<number>(0);

  useLayoutEffect(() => {
    if (!noMonitor) {
      timer.current = window.setInterval(() => {
        const newValue = window.localStorage.getItem(key);
        if (newValue !== value.current) {
          value.current = newValue;
          callback(newValue);
        }
      }, 200);
    }

    return () => {
      if (timer.current) {
        window.clearInterval(timer.current);
        timer.current = 0;
      }
    };
  }, [key, noMonitor]);
};

export default useStorage;
