import { QuestionType } from '../../../generated/prisma/client';

export class CreateOptionDto {
  text!: string;
  isCorrect?: boolean;
}

export class CreateQuestionDto {
  text!: string;
  type!: QuestionType;
  correctAnswer?: string;
  options?: CreateOptionDto[];
}
export class CreateQuizDto {
  title!: string;
  questions?: CreateQuestionDto[];
}
