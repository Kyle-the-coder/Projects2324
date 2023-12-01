import React, { useState } from "react";
import "../styles/splitScreen.css";

export default function SplitScreenDisplay({
  children,
  left,
  right,
  bgColorEnd,
  bgColorBeg,
}) {
  const [slidablePane, stillPane] = children;
  const [isEnter, setIsEnter] = useState(false);
  console.log("slide", typeof slidablePane);
  console.log("still", stillPane);
  return (
    <>
      {right && (
        <div className="container">
          <div className="pane">{stillPane}</div>
          <div className="pane"></div>

          <div
            style={{ backgroundColor: isEnter ? bgColorEnd : bgColorBeg }}
            className={`pane ${
              right && isEnter ? "scroll-pane-right" : "still-pane-right"
            }`}
          >
            {slidablePane}

            <button className="btn" onClick={() => setIsEnter(!isEnter)}>
              {isEnter ? "Close" : "View"}
            </button>
          </div>
        </div>
      )}
      {left && (
        <div className="container">
          <div
            style={{ backgroundColor: isEnter ? bgColorEnd : bgColorBeg }}
            className={`pane ${
              left && isEnter ? "scroll-pane-left" : "still-pane-left"
            } `}
          >
            {slidablePane}

            <button className="btn" onClick={() => setIsEnter(!isEnter)}>
              {isEnter ? "Close" : "View"}
            </button>
          </div>

          <div className="pane"></div>
          <div className="pane">{stillPane}</div>
        </div>
      )}
    </>
  );
}
