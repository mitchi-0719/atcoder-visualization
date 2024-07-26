import { useEffect, useRef, useState } from "react";

export const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);
  const intervalId = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // setIntervalの開始関数
  const start = () => {
    if (intervalId.current === null && !isActive) {
      setIsActive(true);
      intervalId.current = setInterval(() => {
        savedCallback.current();
      }, delay);
    }
  };

  // setIntervalの停止関数
  const stop = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
      setIsActive(false);
    }
  };

  // コンポーネントのアンマウント時にクリーンアップ
  useEffect(() => {
    return () => stop();
  }, []);

  return { start, stop };
};
