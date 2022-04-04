import React from "react";
import Title from "../components/Title";
import style from "../styles/landing.module.css";
import TitleVector from "../constants/TitleVector";

function Landing() {
  return (
    <div className={style.landing}>
      <Title title="Mathematics Game" />
      <TitleVector width={640} height={10} color="#FF0000"/>
    </div>
  );
}

export default Landing;