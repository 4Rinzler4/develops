import type { AxiosResponse } from "axios";
import { axiosClient } from "../plugins/axiosClient";
import type {
  QuizzesResponse,
  CreateQuizDto,
  Quiz,
  DeleteQuizResponse,
} from "../types/common-types";

export const quizService = {
  getQuizzes: async (): Promise<AxiosResponse<QuizzesResponse>> => {
    return await axiosClient.get("/quiz");
  },

  getQuizById: async (quizId?: string): Promise<AxiosResponse<Quiz>> => {
    return await axiosClient.get(`/quiz/${quizId}`);
  },

  createQuiz: async (quiz: CreateQuizDto): Promise<Quiz> => {
    return await axiosClient.post("/quiz", quiz);
  },

  deleteQuiz: async (
    quizId: string,
  ): Promise<AxiosResponse<DeleteQuizResponse>> => {
    return await axiosClient.delete(`/quiz/${quizId}`);
  },
};
