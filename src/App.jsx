import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import QuestionPage from "./Pages/QuestionPage";
import ResultPage from "./Pages/ResultPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Question" element={<QuestionPage />} />
        <Route path="/Result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
