import type { FC } from "react";
import { Link } from "react-router-dom";

type QuizItemProps = {
  id: string;
  title: string;
  numQuestions: number;
};

const QuizItem: FC<QuizItemProps> = ({ id, title, numQuestions }) => {
  return (
    <>
      <div>
        <Link to={`/quiz/${id}`}></Link>
        <h2>{title}</h2>
        <p>{numQuestions}</p>
      </div>
    </>
  );
};

export default QuizItem;
