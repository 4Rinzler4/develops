import type { AxiosResponse } from "axios";
import { axiosClient } from "../plugins/axiosClient";
import type {
  QuizzesResponse,
  CreateQuizDto,
  Quiz,
  DeleteQuizResponse,
} from "../types/common-types";

export const quizService = {
  getQuizzes: (): Promise<AxiosResponse<QuizzesResponse>> => {
    return axiosClient.get("/quiz");
  },

  getQuizById: (quizId?: string): Promise<AxiosResponse<Quiz>> => {
    return axiosClient.get(`/quiz/${quizId}`);
  },

  createQuiz: (data: CreateQuizDto): Promise<AxiosResponse<Quiz>> => {
    return axiosClient.post("/quiz", data);
  },

  deleteQuiz: (quizId: string): Promise<AxiosResponse<DeleteQuizResponse>> => {
    return axiosClient.delete(`/quiz/${quizId}`);
  },
};
