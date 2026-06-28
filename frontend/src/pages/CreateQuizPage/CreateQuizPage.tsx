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
      <div className={styles.quizBuilderContainer}>
        <h1 className={styles.quizBuilderHeader}>Quiz Builder</h1>
        <QuizBuilderInputs />
      </div>
    </>
  );
};

export default createQuizPage;
