import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { type QuizFormData, createQuizSchema } from "../../schemas/quiz-schema";
import { quizService } from "../../services/quiz-service";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const QuizBuilderInputs = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuizFormData>({
    resolver: zodResolver(createQuizSchema()),
    defaultValues: {
      title: "",
      questions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const handleAddQuestion = () => {
    append({
      text: "",
      type: "INPUT",
    });
  };

  const onSubmit = async (data: QuizFormData) => {
    try {
      await quizService.createQuiz(data);
      reset();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Quiz Title:</label>

        <input type="text" placeholder="Quiz Title" {...register("title")} />

        <ErrorMessage message={errors.title?.message} />
      </div>

      <div>
        <h3>Questions</h3>

        {fields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: "12px" }}>
            <input
              type="text"
              placeholder="Question text"
              {...register(`questions.${index}.text`)}
            />

            <ErrorMessage message={errors.questions?.[index]?.text?.message} />

            <select {...register(`questions.${index}.type`)}>
              <option value="INPUT">Input</option>
              <option value="CHECKBOX">Multiple Choice</option>
              <option value="BOOLEAN">Boolean</option>
            </select>

            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </div>
        ))}

        <ErrorMessage message={errors.questions?.message} />

        <button type="button" onClick={handleAddQuestion}>
          Add question
        </button>
      </div>

      <button type="submit" disabled={!errors}>
        Create Quiz
      </button>
    </form>
  );
};

export default QuizBuilderInputs;
