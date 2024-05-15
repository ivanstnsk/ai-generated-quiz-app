import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--primary-text-color);
  padding: 2em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--max-width);
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 20px 10px var(--shadow-color);
  background-color: var(--secondary-color);
  padding: var(--padding);
`;

export const Title = styled.h1`
  font-size: var(--font-size-large);
  color: var(--primary-text-color);
  text-shadow: 0px 0px 10px black;
  margin-bottom: var(--margin);
  cursor: pointer;
`;

export const Subtitle = styled.h2`
  font-size: var(--font-size-medium);
  color: var(--primary-text-color);
  text-shadow: 0px 0px 10px black;
  margin-bottom: var(--margin);
  cursor: pointer;
`;

export const QuizOptionsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 20px 10px var(--shadow-color);
  padding: var(--padding);
`;

export const QuizOption = styled.li`
  width: 100%;
  margin-bottom: var(--margin);
  background-color: var(--secondary-color);
  border-radius: var(--border-radius);
  padding: var(--padding);
  box-shadow: 0px 0px 10px black;
  margin-top: var(--margin);
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--primary-text-color);
  border: none;
  padding: var(--padding);
  font-size: var(--font-size-large);
  cursor: pointer;
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 10px black;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--primary-color-hover);
  }
  margin-top: var(--margin);
`;

export const LinkButton = styled(Link)`
  background-color: transparent;
  color: var(--primary-text-color);
  border: none;
  padding: var(--padding);
  font-size: var(--font-size-large);
  cursor: pointer;
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 10px black;
  transition: all 0.2s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
  margin-top: var(--margin);
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  border-radius: var(--border-radius);
  padding: var(--padding);
  box-shadow: 0px 0px 10px black;
  margin-top: var(--margin);
  cursor: pointer;
`;

export const QuestionTitle = styled.h2`
  font-size: var(--font-size-medium);
  margin-bottom: var(--margin);
  cursor: pointer;
`;

export const AnswersList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: var(--margin);
`;
