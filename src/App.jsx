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
import GuruNanak from "./sikhGurus/GuruNanak";
import GuruAngad from "./sikhGurus/GuruAngad";
import GuruAmarDas from "./sikhGurus/GuruAmarDas";
import GuruRamDas from "./sikhGurus/GuruRamDas";
import GuruArjan from "./sikhGurus/GuruArjan";
import GuruHargobind from "./sikhGurus/GuruHargobind";
import GuruHarRai from "./sikhGurus/GuruHarRai";
import GuruHarKrishan from "./sikhGurus/GuruHarKrishan";
import GuruTeghBahadur from "./sikhGurus/GuruTeghBahadur";
import GuruGobind from "./sikhGurus/GuruGobind";
import JaapSahib from "./translationPages/JaapSahib";
import SikhNavigationPage from "./sikhism/SikhNavigationPage";
import AboutSikhism from "./sikhism/AboutSikhism";
import PillarsOfSikhism from "./sikhism/PillarsOfSikhism";
import FiveK from "./sikhism/FiveK";
import GranthSahib from "./sikhism/GranthSahib";

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

            <Route path="/jaap-sahib" element={<JaapSahib />} />

            {/* gurus */}
            <Route path="/sikh-gurus" element={<SikhGurusNavigation />} />

            <Route path="/guru-nanak" element={<GuruNanak />} />
            <Route path="/guru-angad" element={<GuruAngad />} />
            <Route path="/guru-amar" element={<GuruAmarDas />} />

            <Route path="/guru-ramdas" element={<GuruRamDas />} />
            <Route path="/guru-arjan" element={<GuruArjan />} />
            <Route path="/guru-hargobind" element={<GuruHargobind />} />

            <Route path="/guru-harrai" element={<GuruHarRai />} />
            <Route path="/guru-harkrishan" element={<GuruHarKrishan />} />
            <Route path="/guru-tegh" element={<GuruTeghBahadur />} />

            <Route path="/guru-gobind" element={<GuruGobind />} />

            {/* sikhism */}
            <Route path="/sikhism" element={<SikhNavigationPage />} />
            <Route path="/sikhism/about-sikhism" element={<AboutSikhism />} />
            <Route path="/sikhism/pillars" element={<PillarsOfSikhism />} />
            <Route path="/sikhism/fivek" element={<FiveK />} />
            <Route path="/sikhism/granth-sahib" element={<GranthSahib />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
