import { useEffect } from "react";
import useQuiz from "../../hooks/use-quiz";
import QuizItem from "../QuizItem/QuizItem";

const QuizList = () => {
  const { quizzesData, fetchQuizzes } = useQuiz();
  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  console.log(quizzesData);

  return (
    <>
      {quizzesData?.quizzes.map((quiz) => (
        <QuizItem
          key={quiz.id}
          id={quiz.id}
          title={quiz.title}
          numQuestions={quiz.questions.length}
        />
      ))}
    </>
  );
};

export default QuizList;
