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
        {marqueeText.map((text, index) => (
          <li className="marquee__text animate--marquee" key={index}>{text}</li>
        ))}
      </ul>
      <ul className="marquee__inner">
        {marqueeText.map((text, index) => (
          <li className="marquee__text animate--marquee" key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ScrollingText;
