import React from "react";
import style from "../styles/questions.module.css";
import Blackboard from "../constants/Blackboard";
import Options from "../components/Options";


function Questions() {
  return (
    <div className={style.questions}>
      <div className={style.header}>
        <div>Score: 120</div>
        <div>Tour: 2</div>
        <div>Questions: 6/7</div>
      </div>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <Blackboard firstNumber={5} secondNumber={6}/>
        </div>
        <div className={style.rightContainer}>
          <button>
            <Options/>
          </button>
          <button><Options/></button>
          <button><Options/></button>
        </div>

      </div>
    </div>
  );
}

export default Questions;