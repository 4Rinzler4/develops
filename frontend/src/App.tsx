import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/create" element={<></>} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
