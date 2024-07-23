import { useState, useEffect, useRef } from "react";

const up = (count, setCount) => {
  console.log(count);
  setCount((prevCount) => prevCount + 100);
};

export const Test = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    const getCount = () => countRef.current;

    const intervalId = setInterval(() => {
      up(getCount(), setCount);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
