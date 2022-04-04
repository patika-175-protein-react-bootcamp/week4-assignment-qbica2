import React from "react";
import PropTypes from "prop-types";
import style from "../styles/subtitle.module.css";

function Subtitle({ subtitle }) {
  return (
    <div className={style.subtitle}>{subtitle}</div>
  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired
};

export default Subtitle;