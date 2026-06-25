import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./QuizItem.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import { quizService } from "../../services/quiz-service";

type QuizItemProps = {
  id: string;
  title: string;
  numQuestions: number;
  onRemove: (id: string) => void;
};

const QuizItem: FC<QuizItemProps> = ({ id, title, numQuestions, onRemove }) => {
  const handleRemove = async () => {
    await quizService.deleteQuiz(id);
    onRemove(id);
  };

  return (
    <>
      <div className={styles.quizCard}>
        <Link to={`/quiz/${id}`}>
          <div>
            <h2>{title}</h2>
            <p>Count questions: {numQuestions}</p>
          </div>
        </Link>
        <DeleteButton handleRemove={handleRemove} />
      </div>
    </>
  );
};

export default QuizItem;
