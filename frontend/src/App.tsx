import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/create" element={<></>} />
          <Route path="/quiz/:quizId" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
