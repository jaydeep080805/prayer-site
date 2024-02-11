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
import Turban from "./sikhism/Turban";
import Faq from "./sikhism/Faq";
import SikhCalendar from "./calendar/SikhCalendar";
import AboutPage from "./footer/AboutPage";
import ContactPage from "./footer/ContactPage";
import Privacy from "./footer/Privacy";

// events
import SikhEventNavigation from "./sikhEvents/SikhEventNavigation";
import GuruNanakGurpurab from "./sikhEvents/GuruNanakGurpurab";
import Vaisakhi from "./sikhEvents/Vaisakhi";
import GuruGobindSinghGurpurab from "./sikhEvents/GuruGobindSinghGurpurab";
import Lohri from "./sikhEvents/Lohri";
import Maghi from "./sikhEvents/Maghi";
import HolaMohalla from "./sikhEvents/HolaMohalla";
import DayGuruArjanDev from "./sikhEvents/DayGuruArjanDev";
import DayGuruTegh from "./sikhEvents/DayGuruTegh";
import Diwali from "./sikhEvents/Diwali";
import ParkashUtsav from "./sikhEvents/ParkashUtsav";
import GurdaddiDivas from "./sikhEvents/GurdaddiDivas";
import GuruKrishanMartyrdom from "./sikhEvents/GuruKrishanMartyrdom";
import FiveThief from "./sikhism/FiveThief";

function App() {
  return (
    <BrowserRouter>
      {/* sets the main font */}
      <div className="flex flex-col font-main min-h-screen">
        <Navbar />
        <div className="bg-gray-100 dark:bg-gray-950 flex-grow overflow-x-hidden pb-10 dark:text-white">
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
            <Route path="/about-sikhism" element={<AboutSikhism />} />
            <Route path="/pillars" element={<PillarsOfSikhism />} />

            <Route path="/fivek" element={<FiveK />} />
            <Route path="/turban" element={<Turban />} />
            <Route path="/granth-sahib" element={<GranthSahib />} />

            <Route path="/faq" element={<Faq />} />
            <Route path="/five-thiefs" element={<FiveThief />} />

            {/* calendar */}
            <Route path="/calendar" element={<SikhCalendar />} />

            {/* events */}
            <Route path="/events" element={<SikhEventNavigation />} />

            <Route
              path="/guru-nanak-gurpurab"
              element={<GuruNanakGurpurab />}
            />
            <Route path="/vaisakhi" element={<Vaisakhi />} />
            <Route
              path="/guru-gobind-singh-gurpurab"
              element={<GuruGobindSinghGurpurab />}
            />

            <Route path="/lohri" element={<Lohri />} />
            <Route path="/maghi" element={<Maghi />} />
            <Route path="/hola-mohalla" element={<HolaMohalla />} />

            <Route path="/day-guru-arjan" element={<DayGuruArjanDev />} />
            <Route path="/day-guru-tegh" element={<DayGuruTegh />} />
            <Route path="/diwali" element={<Diwali />} />

            <Route path="/parkash-utsav" element={<ParkashUtsav />} />
            <Route path="/gurdaddi-divas" element={<GurdaddiDivas />} />
            <Route
              path="/guru-krishan-martyrdom"
              element={<GuruKrishanMartyrdom />}
            />

            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
