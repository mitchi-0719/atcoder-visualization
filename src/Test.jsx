import React, { useState } from "react";
import { useInterval } from "./hooks/useInterval";
import { Button } from "@mui/material";

export const Test = () => {
  const [count, setCount] = useState(0);

  const { start, stop } = useInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
    </div>
  );
};
