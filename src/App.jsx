import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import QuestionPage from "./Pages/QuestionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Question" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
