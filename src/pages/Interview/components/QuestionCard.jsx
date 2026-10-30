import React, { useEffect, useState } from "react";

const QuestionCard = () => {

  const [question, setQuestion] = useState("");

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/question");

        const questionData = await response.text();

        console.log(questionData);

        setQuestion(questionData);

      } catch (error) {
        console.error("Error:", error);
      }
    };

    getQuestion();
  }, []);

  return (
    <div>
      <h1>AI Interviewer</h1>

      <p>{question}</p>
    </div>
  );
};

export default QuestionCard;