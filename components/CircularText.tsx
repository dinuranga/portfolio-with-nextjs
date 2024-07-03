import React from 'react';

interface Props {
  text: string;
}

const CircularText = ({ text }: Props) => {
  const calculateLetterSpacing = (text: string, marginFactor = 1.5) => {
    const circleCircumference = 2 * Math.PI * 45; // 45 is the radius of the circle (half of 100 minus a small margin)
    const textLength = text.length;
    const letterSpacing = (circleCircumference - textLength * 8) / textLength * marginFactor; // Adjust font size as necessary
    return letterSpacing;
  };

  const letterSpacing = calculateLetterSpacing(text);

  return (
    <svg className="circular-text" width="60" height="60" viewBox="0 0 100 100">
      <defs>
        <path
          id="circlePath"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,1 90,0
            a 45,45 0 1,1 -90,0
          "
        />
      </defs>
      <text fontSize="8" fill="#fff" style={{ letterSpacing }}>
        <textPath href="#circlePath">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CircularText;
