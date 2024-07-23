import React, { useRef, useEffect, useState } from "react";

export const EllipsisSvgText = ({ x, y, labelWidth, language, textColor }) => {
  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState(language);

  useEffect(() => {
    const textElement = textRef.current;
    const textLength = textElement.getComputedTextLength();

    if (textLength > labelWidth) {
      let ellipsis = " ...";
      let displayedString = language;
      while (
        textElement.getComputedTextLength() > labelWidth &&
        displayedString.length > 0
      ) {
        displayedString = displayedString.slice(0, -1);
        textElement.textContent = displayedString + ellipsis;
      }
      setDisplayText(displayedString + ellipsis);
    }
  }, [labelWidth, language]);
  return (
    <text
      ref={textRef}
      x={x}
      y={y}
      textAnchor="start"
      dominantBaseline="middle"
      fill={textColor}
      style={{
        overflow: "hidden",
      }}
    >
      {displayText}
    </text>
  );
};
