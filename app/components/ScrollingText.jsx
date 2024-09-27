import React from "react";

const marqueeText = [
  "BIOAVAILABLE ACTIVES",
  "REGENERATIVE FARMING",
  "ALL SKIN TYPES",
  "BIOAVAILABLE ACTIVES",
  "REGENERATIVE FARMING",
  "ALL SKIN TYPES",
];

function ScrollingText() {
  return (
    <div className="marquee">
      <ul className="marquee__inner">
        {marqueeText.map((text) => (
          <li className="marquee__text animate--marquee">{text}</li>
        ))}
      </ul>
      <ul className="marquee__inner">
        {marqueeText.map((text) => (
          <li className="marquee__text animate--marquee">{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ScrollingText;
