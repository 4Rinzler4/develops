import { useEffect, useState } from "react";
import useQuiz from "../../hooks/use-quiz";
import QuizItem from "../QuizItem/QuizItem";
import styles from "../QuizList/QuizList.module.css";
import type { Quiz } from "../../types/common-types";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const { quizzesData, fetchQuizzes } = useQuiz();

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  useEffect(() => {
    if (Array.isArray(quizzesData)) {
      setQuizzes(quizzesData ?? []);
    }
  }, [quizzesData]);

  const handleRemove = (id: string) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };

  return (
    <>
      <div className={styles.listContainer}>
        {quizzes.map((quiz) => (
          <QuizItem
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
            numQuestions={quiz.questions.length}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </>
  );
};

export default QuizList;
