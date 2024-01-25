import { useState } from "react";
import raehraasTranslation from "../translations/raehraasTranslation";

import LanguageSwitcher from "./components/LanguageSwitcher";
import PrayerContent from "./components/PrayerContent";

const raehrassPunjabi = raehraasTranslation["gurmuki"];
const raehrassEnglish = raehraasTranslation["english"];
const raehrassEnglishMeaning = raehraasTranslation["englishMeaning"];

function RaehraasSahib() {
  const [language, setLanguage] = useState(raehrassPunjabi);
  const [selectedLanguage, setSelectedLanguage] = useState("raehrassPunjabi");

  // if a button is pressed, then switch the language
  const handleLanguageChange = (selectedLanguage) => {
    switch (selectedLanguage) {
      case "punjabi":
        setLanguage(raehrassPunjabi);
        setSelectedLanguage("raehrassPunjabi");
        break;
      case "english":
        setLanguage(raehrassEnglish);
        setSelectedLanguage("raehrassEnglish");
        break;
      case "english meaning":
        setLanguage(raehrassEnglishMeaning);
        setSelectedLanguage("raehrassEnglishMeaning");
        break;
      default:
        setLanguage(raehrassPunjabi);
        setSelectedLanguage("raehrassPunjabi");
    }
  };

  return (
    // center the elements
    <div className="flex justify-center md:pt-20 md:mx-96">
      {/* set the background to white and center text */}
      <div className="bg-white w-max text-center md:min-w-[80rem]">
        {/* add a margin to give all the elements in the container a bit of spacing from the margin */}
        <div className="m-5">
          {/* render the language buttons */}
          <LanguageSwitcher onLanguageChange={handleLanguageChange} />
          <PrayerContent
            language={language}
            selectedLanguage={selectedLanguage}
            prayerName="raehrass"
          />
        </div>
      </div>
    </div>
  );
}

export default RaehraasSahib;
