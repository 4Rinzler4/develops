import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { type QuizFormData, createQuizSchema } from "../../schemas/quiz-schema";
import { quizService } from "../../services/quiz-service";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "../QuizBuilderInputs/QuizBuilderInputs.module.css";
import { useEffect, useState } from "react";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

const QuizBuilderInputs = () => {
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
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
      setSuccessMsg("The quiz was successfully created")
      reset();      
    } catch (error) {
      console.log("Error", error);
    }
  };
 
  useEffect(() => {
    if(!successMsg) return
    setTimeout(() => {
      setSuccessMsg('')
    }, 5000)
  }, [successMsg])

  return (
    <>
    <form className={styles.quizForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Quiz Title</label>

        <input
          className={styles.input}
          type="text"
          placeholder="Quiz Title"
          {...register("title")}
          />

        <ErrorMessage message={errors.title?.message} />
      </div>

      <div className={styles.questionsSection}>
        <div className={styles.sectionHeader}>
          <h3>Questions</h3>

          <button
            className={styles.addButton}
            type="button"
            onClick={handleAddQuestion}
            >
            + Add Question
          </button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className={styles.questionCard}>
            <input
              className={styles.input}
              type="text"
              placeholder="Question text"
              {...register(`questions.${index}.text`)}
              />

            <ErrorMessage message={errors.questions?.[index]?.text?.message} />

            <select
              className={styles.select}
              {...register(`questions.${index}.type`)}
              >
              <option value="INPUT">Input</option>
              <option value="CHECKBOX">Multiple Choice</option>
              <option value="BOOLEAN">Boolean</option>
            </select>

            <button
              className={styles.deleteButton}
              type="button"
              onClick={() => remove(index)}
              >
              Delete
            </button>
          </div>
        ))}

        <ErrorMessage message={errors.questions?.message} />
      </div>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={Object.keys(errors).length > 0}
        >
        Create Quiz
      </button>
    </form>
    <SuccessMessage successMsg={successMsg} />
        </>
  );
};

export default QuizBuilderInputs;
