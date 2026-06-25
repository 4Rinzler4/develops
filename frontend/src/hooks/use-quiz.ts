import { useCallback } from "react";
import { quizService } from "../services/quiz-service";
import useAxios from "./use-axios";
import type { QuizzesResponse } from "../types/common-types";

const useQuiz = () => {
  const getQuizzes = useCallback(() => {
    return quizService.getQuizzes();
  }, []);

  const { response: quizzesData, fetchData: fetchQuizzes } =
    useAxios<QuizzesResponse>({
      service: getQuizzes,
      defaultResponse: { quizzes: [] },
    });

  return {
    quizzesData,
    fetchQuizzes,
  };
};

export default useQuiz;
