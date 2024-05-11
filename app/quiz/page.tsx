'use client';
import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
  // Add more questions as needed
];

const Popup = ({ correct = false, answer = '', show = false }) => {
  return (
    <div className="popup" style={{ display: show ? 'block' : 'none' }}>
      {correct ? (
        <p>Correct!</p>
      ) : (
        <p>Wrong! The correct answer is {answer}</p>
      )}
    </div>
  );
};

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setCorrect(answer === questions[currentQuestionIndex].correctAnswer);
    setShowPopup(true);
  };

  

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setShowPopup(false);
    setCorrect(false);
    setCompleted(false);
  };

  useEffect(() => {
    
    if (showPopup) {
      if(correct == true){
        setScore(score + 1); // Update score only if the answer is correct
      }
      setTimeout(() => {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setShowPopup(false);
          setCompleted(false);
          setCorrect(false);
        }else{
          setCompleted(true)
        }
      }, 1000);
    }
  }, [showPopup, correct, currentQuestionIndex]);

  return (
    <div>
      {completed == false && currentQuestionIndex < questions.length? (
        <div>
          <h1>Question {currentQuestionIndex + 1}</h1>
          <h2>{questions[currentQuestionIndex].question}</h2>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSelect(option)}>
              {option}
            </button>
          ))}
          <Popup
            show={showPopup}
            correct={correct}
            answer={questions[currentQuestionIndex].correctAnswer}
          />
        </div>
      ) : (
        <div>
          <h1>Quiz Completed!</h1>
          <p>Your score: {score}/{questions.length}</p>
          <button onClick={resetQuiz}>Start Again</button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;