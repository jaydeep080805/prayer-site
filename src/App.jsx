import Navbar from "./navbar/Navbar";
import Home from "./Home";
import TranslationSelectionPage from "./translations/TranslationSelectionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translations" element={<TranslationSelectionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
