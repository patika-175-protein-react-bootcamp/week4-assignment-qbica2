import React, { useContext } from "react";
import style from "../styles/landing.module.css";
import Title from "../components/Title";
import TitleVector from "../constants/TitleVector";
import Subtitle from "../components/Subtitle";
import ButtonVector from "../constants/ButtonVector";
import { useNavigate } from "react-router-dom";
import QuestionsContext from "../contexts/questions";

function Landing() {
  let navigate = useNavigate();
  const { questions } = useContext(QuestionsContext);
  console.log(questions);
  const totalScore = localStorage.getItem("totalScore");
  const totalQuestions = localStorage.getItem("totalQuestions");
  const totalCorrectAnswer = localStorage.getItem("totalCorrectAnswer");
  return (
    <div className={style.landing}>
      <div className={style.container}> 
        <div className={style.titleGroup}>
          <Title title="Mathematics Game" />
          <TitleVector width={640} height={10} color="#FF0000"/>
        </div>
        <Subtitle subtitle="Total Score:" score={totalScore ? totalScore : 0} />
        <Subtitle subtitle="Total Questions:" score={totalQuestions ? totalQuestions : 0} />
        <Subtitle subtitle="Correct Answers:" score={totalCorrectAnswer ? totalCorrectAnswer : 0} />
        <button onClick={()=>navigate("/questions/1")}>
          <ButtonVector width= {447} height= {139} text="Start"/>
        </button>
      </div>
    </div>
  );
}

export default Landing;