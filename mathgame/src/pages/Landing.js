import React from "react";
import style from "../styles/landing.module.css";
import Title from "../components/Title";
import TitleVector from "../constants/TitleVector";
import Subtitle from "../components/Subtitle";
import ButtonVector from "../constants/ButtonVector";


function Landing() {
  return (
    <div className={style.landing}>
      <div className={style.container}> 
        <div className={style.titleGroup}>
          <Title title="Mathematics Game" />
          <TitleVector width={640} height={10} color="#FF0000"/>
        </div>
        <Subtitle subtitle="Total Points:" score={129}/>
        <Subtitle subtitle="Total Questions:" score={40}/>
        <Subtitle subtitle="Correct Answers:" score={32}/>
        <button>
          <ButtonVector width= {447} height= {139} text="Start"/>
        </button>
      </div>
    </div>
  );
}

export default Landing;