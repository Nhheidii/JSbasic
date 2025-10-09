import { useState, useCallback } from "react";
import QUESTIONS from "../data.js";
import IMG from "../img/end.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  console.log("quiz component is render");
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState();
  const activeQuestionIndex = userAnswers.length;
  const handleClick = useCallback(function (selectedAnswer) {
    setAnswerState("answered");
    setUserAnswers((prevAns) => {
      return [...prevAns, selectedAnswer];
    });
    setTimeout(() => {
      if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState("Correct");
      } else {
        setAnswerState("Wrong");
      }
    }, 1000);

    setTimeout(() => {
      setAnswerState("");
    }, 2000);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleClick(null);
  }, [handleClick]);

  //   function handleClick(selectedAnswer) {
  //     // câu trả lời hiện tại *nó là một mảng đúng k, thì trải nó ra xong thêm cái giá trị selectedAnswer vừa được chọn vào á
  //     setUserAnswers((prevAns) => {
  //       return [...prevAns, selectedAnswer];
  //     });
  //     // setUserAnswers(selectedAnswer);
  //   }
  console.log(userAnswers);

  //shuffle function
  function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const randomAnswers = [...QUESTIONS[1].answers];
  const outPutAns = shuffleArray(randomAnswers);
  const quizCompletedOrNot = activeQuestionIndex === QUESTIONS.length;

  if (quizCompletedOrNot) {
    return (
      <>
        <div>
          <img src={IMG} alt="" />
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <div>
          <QuestionTimer
            key={activeQuestionIndex}
            timeOut={10000}
            onTimeout={handleSkipAnswer}
          />
          <h2> {QUESTIONS[activeQuestionIndex].text}</h2>
          <ul>
            {outPutAns.map((answer) => {
              const isSelected = userAnswers[userAnswers.length - 1] === answer;
              let cssClass = "";
              if (answerState === "answered" && isSelected) {
                cssClass = "selected";
              }
              if (
                (answerState === "Correct" || answerState === "Wrong") &&
                isSelected
              ) {
                cssClass = answerState;
              }

              return (
                <li key={answer} className={answer}>
                  <button
                    className={cssClass}
                    onClick={() => handleClick(answer)}
                  >
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

//Fisher - Yates shuffle
