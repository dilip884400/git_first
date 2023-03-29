import React, { useState, useRef } from "react";
import Question from "./Question";
import AnswerOption from "./AnswerOption";
import Result from "./Result";
import styles from "./Test.module.css";


const questions = [
  {
    question: "Which of the following is used in React.js to increase performance?",
    answerOptions: [
      "Virtual DOM",
      "Original DOM",
      " Both A & B",
      " None of the Above",
    ],
    correctAnswer: "Virtual DOM",
  },
  {
    question: "What is the latest version of ReactJS as of September 2021?",
    answerOptions: ["v15.0.0", "v16.0.0", "v17.0.0", "v18.0.0"],
    correctAnswer: "v18.0.0",
  },
  {
    question: "What does JSX stand for?",
    answerOptions: [
      "JavaScript XML",
      "JavaScript Xcode",
      "JavaServer X",
      "Java XML",
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    question:
      "What is the main benefit of using ReactJS for front-end development?",
    answerOptions: [
      "It improves website security.",
      "It allows for faster website performance.",
      "It makes website development easier for beginners.",
      "It adds interactive animations and effects to websites.",
    ],
    correctAnswer: "It allows for faster website performance.",
  },
  {
    question: "Which of the following is NOT a lifecycle method in ReactJS?",
    answerOptions: [
      "componentDidMount()",
      "shouldComponentUpdate()",
      "render()",
      "createContext()",
    ],
    correctAnswer: "createContext()",
  },
  {
    question: "What is the purpose of the Virtual DOM in ReactJS?",
    answerOptions: [
      "To improve website security.",
      "To speed up the rendering process.",
      "To create animations and effects.",
      "To manage server-side data.",
    ],
    correctAnswer: "To speed up the rendering process.",
  },
  {
    question: "Which of the following is NOT a core concept in ReactJS?",
    answerOptions: ["State", "Props", "Context", "Schema"],
    correctAnswer: "Schema",
  },
  {
    question: "What is the purpose of a ReactJS Component?",
    answerOptions: [
      "To store website data.",
      "To define the structure and behavior of a website.",
      "To create animations and effects.",
      "To manage server-side data.",
    ],
    correctAnswer: "To define the structure and behavior of a website.",
  },
  {
    question:
      "Which of the following is NOT a valid way to create a ReactJS component?",
    answerOptions: [
      "Function component",
      "Class component",
      "React.createClass()",
      "Object component",
    ],
    correctAnswer: "Object component",
  },
  {
    question: "What is the purpose of the ReactJS Router?",
    answerOptions: [
      "To manage server-side data.",
      "To handle user authentication.",
      "To create animations and effects.",
      "To manage client-side routing.",
    ],
    correctAnswer: "To manage client-side routing.",
  },
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const answerOptionsRef = useRef([]);

  const handleAnswerChange = (event) => {
    const { value } = event.target;
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correctAnswer) {
        score += 2;
      }
    }
    return score;
  };

  const score = calculateScore();
  const maxScore = questions.length * 2;

  return (
    <div className={styles.container}>
      {showResult ? (
        <Result
          score={score}
          maxScore={maxScore}
          onRestart={handleRestartClick}
        />
      ) : (
        <div className={styles.test}>
          <Question question={questions[currentQuestion].question} />
          {questions[currentQuestion].answerOptions.map((option, index) => (
            <AnswerOption
              key={option}
              answerOption={option}
              onChange={handleAnswerChange}
              ref={(el) => (answerOptionsRef.current[index] = el)}
            />
          ))}
          <button className={styles.button} onClick={handleNextClick}>
            {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
