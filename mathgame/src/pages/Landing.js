import React from "react";
import style from "../styles/landing.module.css";
import Title from "../components/Title";
import TitleVector from "../constants/TitleVector";
import Subtitle from "../components/Subtitle";

function Landing() {
  return (
    <div className={style.landing}>
      <Title title="Mathematics Game" />
      <TitleVector width={640} height={10} color="#FF0000"/>
      <Subtitle subtitle="Total Points:" />
      <Subtitle subtitle="Total Questions:" />
      <Subtitle subtitle="Correct Answers:" />
    </div>
  );
}

export default Landing;