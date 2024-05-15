import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/store";
import {
  QuizOption,
  QuestionTitle,
  Wrapper,
  Title,
  AnswersList,
  QuestionContainer,
  Subtitle,
} from "../components/ui.styled";

interface QuizProps {}

const Quiz: React.FC<QuizProps> = () => {
  const navigate = useNavigate();
  const { currentQuestionId, questions, score, isFinished, selectAnswer } =
    useQuizStore();
  const currentQuestionObj = questions.find(
    ({ id }) => id === currentQuestionId
  );

  useEffect(() => {
    if (isFinished) {
      navigate("/result");
    }
  }, [isFinished, navigate]);

  const renderQuestion = () => {
    if (!currentQuestionId) return <div>Please select a question</div>;
    if (!currentQuestionObj) return <div>Unknown question</div>;
    return (
      <QuestionContainer>
        <QuestionTitle>{currentQuestionObj.text}</QuestionTitle>
        <AnswersList>
          {currentQuestionObj.answers.map((text, index) => (
            <QuizOption key={index} onClick={() => selectAnswer(text)}>
              {text}
            </QuizOption>
          ))}
        </AnswersList>
      </QuestionContainer>
    );
  };

  return (
    <Wrapper>
      <Title>Quiz</Title>
      <Subtitle>Score: {score}</Subtitle>
      {renderQuestion()}
    </Wrapper>
  );
};

export default Quiz;
