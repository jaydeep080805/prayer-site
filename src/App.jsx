import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./Home";
import JabjiSahib from "./translations/JapjiSahib";
import TranslationSelectionPage from "./translations/TranslationSelectionPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="h-full bg-gray-100 md:h-fit">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translations" element={<TranslationSelectionPage />} />
          <Route path="/japjiSahib" element={<JabjiSahib />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
