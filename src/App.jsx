// react imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//
import Navbar from "./navbar/Navbar";
import Home from "./Home";
import Footer from "./footer/Footer";

// routes
import TranslationSelectionPage from "./translationPages/TranslationSelectionPage";
import JapjiSahib from "./translationPages/JapjiSahib";
import RaehraasSahib from "./translationPages/RaehraasSahib";
import ArdasSahib from "./translationPages/ArdasSahib";
import SohillaSahib from "./translationPages/SohillaSahib";

import SikhGurusNavigation from "./sikhGurus/SikhGurusNavigation";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="bg-gray-100 dark:bg-gray-950 flex-grow overflow-x-hidden pb-10">
          <Routes>
            {/* home screen */}
            <Route path="/" element={<Home />} />

            {/* prayers */}
            <Route
              path="/translations"
              element={<TranslationSelectionPage />}
            />
            <Route path="/japji-sahib" element={<JapjiSahib />} />
            <Route path="/raehraas-sahib" element={<RaehraasSahib />} />
            <Route path="/ardaas-sahib" element={<ArdasSahib />} />
            <Route path="/sohilaa-sahib" element={<SohillaSahib />} />

            {/* gurus */}
            <Route path="/sikh-gurus" element={<SikhGurusNavigation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
