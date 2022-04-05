import React from "react";
import PropTypes from "prop-types";

function ButtonVector({ width, height, text }) {
  return (
    <svg width={width} height={height} viewBox="0 0 447 139" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x={width/2} y={height/2+22} fill="white" fontSize="64" textAnchor="middle"  >{text}</text>
      <path fill="white" d="M28.965 97.6124C-59.2656 35.2924 132.507 6.33039 232.022 7.29094C241.757 5.44668 225.802 4.40928 216.608 4.1211C138.456 2.19999 0 20.5466 0 64.9243C0 128.609 174.422 137.254 214.986 138.695C289.622 141.346 465.667 127.457 445.385 67.5178C425.103 7.5791 257.171 -1.01049 203.628 0.0867675C169.879 0.778373 177.667 3.06449 185.78 4.1211C362.636 -1.93041 440.737 49.1335 440.737 75.3567C440.737 147.687 99.5451 147.465 28.965 97.6124Z"/>
    </svg>
  );
}
ButtonVector.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
export default ButtonVector;