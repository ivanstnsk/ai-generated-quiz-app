import React from "react";
import { useQuizStore } from "../store";
import { LinkButton, Subtitle, Title, Wrapper } from "../components/ui.styled";

export const Result: React.FC = () => {
  const { score, reset } = useQuizStore();

  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 512 512"
        role="img"
        aria-label="Quizmaster logo"
        style={{ marginBottom: "2rem" }}
      >
        <path
          fill="#4CAF50"
          d="M256 256C119.043 256 0 436.043 0 256C0 76.957 119.043 0 256 0C392.957 0 512 76.957 512 256C512 435.043 392.957 512 256 512C119.043 512 0 392.957 0 256z"
        />
        <path
          fill="#fff"
          d="M256 128C204.24 128 128 204.24 128 256C128 307.76 204.24 384 256 384C307.76 384 384 307.76 384 256C384 204.24 307.76 128 256 128z"
        />
        <path
          fill="#FFC107"
          d="M256 384C216.05 384 192 358.95 192 336C192 313.05 216.05 288 256 288C294.95 288 320 313.05 320 336C320 358.95 294.95 384 256 384z"
        />
        <path
          fill="#fff"
          d="M256 168C216.05 168 192 142.95 192 120C192 97.05 216.05 72 256 72C294.95 72 320 97.05 320 120C320 142.95 294.95 168 256 168z"
        />
      </svg>
      <Title>Quiz Results</Title>
      <Subtitle>Score: {score}</Subtitle>
      <p>Congratulations, you have finished the quiz! Your score is {score}.</p>
      <LinkButton to="/" onClick={reset}>
        Play again
      </LinkButton>
    </Wrapper>
  );
};
