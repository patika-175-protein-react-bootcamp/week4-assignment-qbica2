import React,{ useContext, useState , useEffect } from "react";
import style from "../styles/questions.module.css";
import Blackboard from "../constants/Blackboard";
import Options from "../components/Options";
import QuestionsContext from "../contexts/questions";
import { useNavigate, useParams } from "react-router-dom";

function Questions() {
  let navigate = useNavigate();
  let { id } = useParams();

  const { questions, setQuestions, createQuestion , firstNumber, secondNumber, correctAnswer, firstFalseAnswer, secondFalseAnswer , setSelectedAnswer, click, setClick, score, setScore, tourCorrectAnswer, setTourCorrectAnswer,tour } = useContext(QuestionsContext);

  const [backgroundColor, setBackgroundColor] = useState("dark");

  const shuffledArr = (arr) => arr.sort(() => 0.5 - Math.random());
  const arr = [firstFalseAnswer, secondFalseAnswer, correctAnswer];
  

  useEffect(() => {
    createQuestion(id);
  }, [id]);

  const handleNextQuestion = ( id, value ) => {
    const question = {
      id: id,
      firstNumber: firstNumber,
      secondNumber: secondNumber,
      correctAnswer: correctAnswer,
      firstFalseAnswer: firstFalseAnswer,
      secondFalseAnswer: secondFalseAnswer,
      selectedAnswer: value,
    };
    setClick(true);
    setSelectedAnswer(value);
    if(Number(id)<10){
      if(value === correctAnswer){
        setTourCorrectAnswer(tourCorrectAnswer+1);
        setBackgroundColor("green");
        setScore(x=>(Math.ceil(Math.sqrt(value))+x));
        setTimeout(() => {
          setClick(false);
          setBackgroundColor("dark");
          navigate(`/questions/${Number(id)+1}`);
        }, 3000);
      }
      else{
        setBackgroundColor("red");
        setTimeout(() => {
          setClick(false);
          setBackgroundColor("dark");
          navigate(`/questions/${Number(id)+1}`);
        }, 3000);
      }
    }else if(Number(id)===10){
      if(value === correctAnswer){
        setTourCorrectAnswer(tourCorrectAnswer+1);
        setBackgroundColor("green");
        setScore(x=>(Math.ceil(Math.sqrt(value))+x));
        setTimeout(() => {
          setClick(false);
          setBackgroundColor("dark");
          navigate("/results");
        }, 3000);
      }
      else{
        setBackgroundColor("red");
        setTimeout(() => {
          setClick(false);
          setBackgroundColor("dark");
          navigate("/results");
        }, 3000);
      }
    }

    setQuestions([...questions, question]);
  };

  return (
    <div className={`${style.questions} ${backgroundColor =="dark" && style.dark} ${backgroundColor =="green" && style.green} ${backgroundColor =="red" && style.red}`}>
      <div className={style.header}>
        <div className={style.option}>Score: {score}</div>
        <div className={style.option}>Tour: {tour}</div>
        <div className={style.option}>Questions: {tourCorrectAnswer}/{id}</div>
      </div>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <Blackboard firstNumber={firstNumber} secondNumber={secondNumber}/>
        </div>
        <div className={style.rightContainer}>
          {
            shuffledArr(arr).map((item, i) => 
              (<button  key={i} disabled={click} onClick={()=>handleNextQuestion( id, item)}><Options number={item} click={click}/></button>)
            )
          }
        </div>

      </div>
    </div>
  );
}

export default Questions;