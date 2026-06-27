import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import CreateQuizPage from "./pages/CreateQuizPage/CreateQuizPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/quiz/create" element={<CreateQuizPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
