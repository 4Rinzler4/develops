export type QuestionType = "BOOLEAN" | "INPUT" | "CHECKBOX";

export type Question = {
  id: string;
  text: string;
  type: QuestionType;
};

export type Quiz = {
  id: string;
  title: string;
  questions: Question[];
};

export type CreateQuizDto = {
  title: string;
  questions: Omit<Question, "id">[];
};

export type UpdateQuizDto = Partial<CreateQuizDto>;

export type QuizResponse = {
  quiz: Quiz;
};

export type QuizzesResponse = Quiz[];

export type DeleteQuizResponse = {
  success: boolean;
};
