import HomePage from "./pages/HomePage/HomePage";
import CounterPage from "./pages/CounterPage/CounterPage";
import FormPage from "./pages/FormPage/FormPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
