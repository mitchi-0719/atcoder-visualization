import { PlayCircle, RestartAlt, StopCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export const ControlButton = ({ state, onStart, onStop, onRestart, sx }) => {
  const [onClick, setOnClick] = useState(undefined);
  const [startIcon, setStartIcon] = useState(null);
  const [label, setLabel] = useState(null);

  useEffect(() => {
    switch (state) {
      case "run":
        setOnClick(() => onStop);
        setStartIcon(<StopCircle />);
        setLabel("Stop");
        break;
      case "stop":
        setOnClick(() => onStart);
        setStartIcon(<PlayCircle />);
        setLabel("Start");
        break;
      case "fin":
        setOnClick(() => onRestart);
        setStartIcon(<RestartAlt />);
        setLabel("Restart");
        break;
      default:
        break;
    }
  }, [state]);

  return (
    onClick !== null && (
      <Button
        onClick={() => onClick()}
        size="small"
        variant="contained"
        sx={{ ...sx }}
        startIcon={startIcon}
      >
        {label}
      </Button>
    )
  );
};
