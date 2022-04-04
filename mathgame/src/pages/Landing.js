import React from "react";
import Title from "../components/Title";
import style from "../styles/landing.module.css";

function Landing() {
  return (
    <div className={style.landing}>
      <Title title="Mathematics Game" />
    </div>
  );
}

export default Landing;