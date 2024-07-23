import { useEffect, useState } from "react";

export const SvgTextWithEllipsis = (text, maxWidth, textRef) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const measureText = (text) => {
      if (!textRef.current) return 0;
      const context = document.createElement("canvas").getContext("2d");
      context.font = window.getComputedStyle(textRef.current).font;
      return context.measureText(text).width;
    };

    if (measureText(text) <= maxWidth) {
      setDisplayText(text);
    } else {
      let truncatedText = text;
      while (measureText(truncatedText + "...") > maxWidth) {
        truncatedText = truncatedText.slice(0, -1);
      }
      setDisplayText(truncatedText + "...");
    }
  }, [text, maxWidth]);

  return displayText;
};
