import { useParams } from "react-router-dom";
import useAxios from "../../hooks/use-axios";
import { useCallback, useEffect } from "react";
import { quizService } from "../../services/quiz-service";
import type { Quiz } from "../../types/common-types";
import styles from "../QuizPage/QuizPage.module.css";
import renderQuestionInput from "../../plugins/helperFunctions";

const QuizPage = () => {
  const { quizId } = useParams();

  const getQuizById = useCallback(() => {
    return quizService.getQuizById(quizId);
  }, [quizId]);

  const { response: quizData, fetchData: fetchQuiz } = useAxios<Quiz>({
    service: getQuizById,
    defaultResponse: { id: "", title: "", questions: [] },
  });

  const handleBackClick = () => {
    window.history.back();
  };

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  return (
    <>
      <button className={styles.quizBackButton} onClick={handleBackClick}>
        Back
      </button>
      <div className={styles.quizContainer}>
        <div className={styles.quizContent}>
          <h1 className={styles.quizTitle}>{quizData.title}</h1>
          <div className={styles.questionContainer}>
            {quizData.questions.map((question) => (
              <div key={question.id} className={styles.questionItem}>
                <h3>{question.text}</h3>
                {renderQuestionInput(question)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
