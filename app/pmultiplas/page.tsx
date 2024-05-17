"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { NavBar } from "../components/Navbar/NavBar";
import style from "./style.module.css";
import Image from "next/image";
import PopUp from "../components/PopUp/PopUp";
import MenuFooter from "../components/MenuFooter";
import { service } from "@/services";
import { responseStatus } from "@/utils/responseStatus";

let questions = [
  {
    intro: "",
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    intro: "",
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    intro:
      "A empresa SocialBoost está a lançar um serviço de consultoria em marketing de mídia social para auxiliar empresas a aumentar a sua presença online e o engajamento nas redes sociais.",
    question:
      "1- Qual é o subsector em foco para o serviço de consultoria em marketing de mídia social da SocialBoost?",
    options: [
      "a) Consultoria financeira",
      "b) Consultoria jurídica",
      "c) Consultoria de recursos humanos",
      "d) Consultoria em marketing digital e publicidade",
    ],
    correctAnswer: "d) Consultoria em marketing digital e publicidade",
  },
  // Add more questions as needed
];

const Question = ({
  correctOp,
  currentQuestionIndex = 0,
  handleAnswerSelect,
  selectedAnswer,
}) => {
  return (
    <div className={style.container}>
      <div className={style.questionary}>
        <p className={style.intro}>{questions[currentQuestionIndex].intro}</p>
        <p className={style.question}>
          {questions[currentQuestionIndex].question}
        </p>
      </div>
      <div className={style.options}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            className={`${style.option} ${
              option === selectedAnswer && correctOp
            }`}
            key={index}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
const QuizPage: React.FC = () => {
  const router = useRouter();
  const [optionClass, setOptionClass] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // Timer: 10 seconds per question
  const [timerRunning, setTimerRunning] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setCorrect(answer === questions[currentQuestionIndex].correctAnswer);
    setShowPopup(true);
    setTimerRunning(false);
    setOptionClass(
      answer === questions[currentQuestionIndex].correctAnswer
        ? "correct"
        : "wrong"
    );
  };

  const handleNextQuestion = () => {
    if (correct) {
      setScore(score + 10); // Update score: 10 points per correct answer
    }
    setShowPopup(false);
    setSelectedAnswer("");
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(10); // Reset timer for next question
      setTimerRunning(false);
    } else {
      setCompleted(true);
    }
  };

  const getQuestions = async () => {
    const resposta = await service.questoes_multiplas.listar();
    alert(JSON.stringify(resposta));
    if (resposta?.status === responseStatus?.OK) {
      questions = resposta.data;
    } else {
      alert("Nada");
    }
  };

  useEffect(() => {
    getQuestions();
  }, [])

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setShowPopup(false);
    setCorrect(false);
    setCompleted(false);
    setTimeLeft(10); // Reset timer
    setTimerRunning(false);
  };

  useEffect(() => {
    if (!timerRunning && currentQuestionIndex < questions.length) {
      setTimeLeft(10);
      setTimerRunning(true);
    }
  }, [currentQuestionIndex, timerRunning]);

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timerRunning && timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timerRunning, timeLeft]);

  useEffect(() => {
    if (showPopup) {
      if (correct == true) {
        setScore(score + 20); // Update score only if the answer is correct
      }
      setTimeout(() => {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setShowPopup(false);
          setCompleted(false);
          setCorrect(false);
        } else {
          setCompleted(true);
        }
      }, 5000);
    }
  }, [showPopup, correct, currentQuestionIndex]);

  useEffect(() => {
    if (completed) {
      // Redirecionar para a página de pontuação quando o quiz estiver concluído
      router.push(`/score?score=${score}`); // Redireciona para a página de pontuação e passa a pontuação como query parameter
    }
  }, [completed, score, router]);

  return (
    <>
      <NavBar nome={localStorage.getItem("nome")?.toString()} />
      <div className={style.main}>
        <p className={style.timer}>Time Left: {timeLeft} seconds</p>
        {completed == false && currentQuestionIndex < questions.length ? (
          <Question
            selectedAnswer={selectedAnswer}
            correctOp={optionClass}
            currentQuestionIndex={currentQuestionIndex}
            handleAnswerSelect={handleAnswerSelect}
          />
        ) : (
          ""
        )}
        <p className={style.length}>
          {currentQuestionIndex + 1} / {questions.length}
        </p>
        <PopUp
          show={showPopup}
          correct={correct}
          answer={questions[currentQuestionIndex].correctAnswer}
        />
      </div>
      {/* <MenuFooter /> */}
    </>
  );
};

export default QuizPage;
