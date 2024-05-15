import { create } from "zustand";

export interface Question {
  id: number;
  text: string;
  answers: string[];
  correctAnswer: string;
}

export interface QuizState {
  questions: Question[];
  currentQuestionId: number | null;
  score: number;
  isFinished: boolean;
  selectAnswer: (answer: string) => void;
  setCurrentQuestion: (id: number) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: [
    {
      id: 1,
      text: "What is the capital city of Germany?",
      answers: ["Berlin", "Munich", "Stuttgart", "Cologne"],
      correctAnswer: "Berlin",
    },
    {
      id: 2,
      text: "Which country is the largest in Europe?",
      answers: ["Germany", "Romania", "France", "Ukraine"],
      correctAnswer: "Ukraine",
    },
    {
      id: 3,
      text: "What animal is the human bodyguard?",
      answers: ["Bat", "Butterfly", "Wasp", "Dove"],
      correctAnswer: "Bat",
    },
    {
      id: 4,
      text: "Which of the following is a popular programming language?",
      answers: ["Java", "Python", "C++", "JavaScript"],
      correctAnswer: "JavaScript",
    },
    {
      id: 5,
      text: "Which of the following is a popular web browser?",
      answers: [
        "Google Chrome",
        "Mozilla Firefox",
        "Apple Safari",
        "Microsoft Edge",
      ],
      correctAnswer: "Google Chrome",
    },
    {
      id: 6,
      text: "Which of the following is a popular technology company?",
      answers: ["Microsoft", "Apple", "Google", "Amazon"],
      correctAnswer: "Apple",
    },
  ],
  currentQuestionId: 1,
  score: 0,
  isFinished: false,
  addQuestion: (newQuestion: Question) =>
    set((state) => ({
      ...state,
      questions: [...state.questions, newQuestion],
    })),
  setCurrentQuestion: (id: number) =>
    set((state) => ({
      ...state,
      currentQuestionId: id,
    })),
  selectAnswer: (answer: string) =>
    set((state) => {
      if (state.currentQuestionId === null) {
        return state;
      }
      const question = state.questions.find(
        (q) => q.id === state.currentQuestionId
      );
      if (!question) {
        return state;
      }
      const newScore =
        question.correctAnswer === answer ? state.score + 1 : state.score;
      return {
        ...state,
        score: newScore,
        currentQuestionId: state.currentQuestionId + 1,
        isFinished: state.currentQuestionId + 1 === state.questions.length,
      };
    }),
  reset: () =>
    set((state) => ({
      ...state,
      currentQuestionId: 1,
      score: 0,
      isFinished: false,
    })),
}));
