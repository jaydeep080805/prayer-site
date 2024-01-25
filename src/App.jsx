import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./Home";
import TranslationSelectionPage from "./translationPages/TranslationSelectionPage";
import JapjiSahib from "./translationPages/JapjiSahib";
import RaehraasSahib from "./translationPages/RaehraasSahib";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="h-full bg-gray-100 md:h-fit">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translations" element={<TranslationSelectionPage />} />
          <Route path="/japji-sahib" element={<JapjiSahib />} />
          <Route path="/raehraas-sahib" element={<RaehraasSahib />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
