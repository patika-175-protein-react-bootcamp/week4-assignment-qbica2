import React from "react";
import style from "../styles/results.module.css";
import Title from "../components/Title";
import TitleVector from "../constants/TitleVector";
import Subtitle from "../components/Subtitle";
import ButtonVector from "../constants/ButtonVector";
import Answers from "../components/Answers";

function Results() {
  return (
    <div className={style.results}>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <div className={style.titleGroup}>
            <Title title="Final" />
            <TitleVector width={228} height={8} color="#FF0000"/>
          </div>
          <Subtitle subtitle="Points:" score={129}/>
          <Subtitle subtitle="Questions:" score={10}/>
          <Subtitle subtitle="Correct Answers:" score={8}/>
          <button>
            <ButtonVector width= {447} height= {139} text="Restart"/>
          </button>
        </div>
        <div className={style.rightContainer}>
          <div className={style.titleGroup}>
            <div className={style.title}>All Questions</div> 
            <TitleVector width={350} height={8} color="#FF0000"/>
          </div>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={true}/>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={true}/>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={true}/>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={false}/>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={true}/>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={true}/>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={false}/>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={true}/>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={false}/>
          <Answers firstNumber={3} secondNumber={4} answer={12} boolean={true}/>
        </div>
      </div>
    </div>
  );
}

export default Results;