import QuizBuilderInputs from "../../components/QuizBuilderInputs/QuizBuilderInputs";
import styles from "./CreateQuizPage.module.css";

const handleBackClick = () => {
  window.history.back();
};

const createQuizPage = () => {
  return (
    <>
      <button className={styles.quizBackButton} onClick={handleBackClick}>
        Back
      </button>
      <h1>Quiz Builder</h1>
      <QuizBuilderInputs />
    </>
  );
};

export default createQuizPage;
