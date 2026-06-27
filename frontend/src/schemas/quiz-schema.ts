import { z } from "zod";

export const createQuizSchema = () => {
  return z.object({
    title: z.string().min(2).max(30).nonempty({ message: "Title is required" }),
    questions: z
      .array(
        z.object({
          text: z
            .string()
            .min(2)
            .max(100)
            .nonempty({ message: "Question is required" }),
          type: z.enum(["BOOLEAN", "INPUT", "CHECKBOX"]),
        }),
      )
      .min(1, { message: "At least one question is required" }),
  });
};

export type QuizFormData = z.infer<ReturnType<typeof createQuizSchema>>;
