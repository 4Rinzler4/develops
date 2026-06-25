import CreateButton from "../../components/CreateButton/CreateButton";
import QuizList from "../../components/QuizList/QuizList";

const HomePage = () => {
  const redirectToCreateQuiz = () => {
    window.location.href = "/quiz/create";
  };
  return (
    <>
      <CreateButton onClick={redirectToCreateQuiz} />
      <QuizList />
    </>
  );
};

export default HomePage;
