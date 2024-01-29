import { useState } from "react";

import LanguageSwitcher from "./components/LanguageSwitcher";
import PrayerContent from "./components/PrayerContent";
import ardasTranslation from "../translations/ardasTranslation";

// get all the languages
const ardasPunjabi = ardasTranslation["gurmuki"];
const ardasEnglish = ardasTranslation["english"];
const ardasEnglishMeaning = ardasTranslation["englishMeaning"];

function ArdasSahib() {
  // set the default language to punjabi
  // set the default language to punjabi
  const [language, setLanguage] = useState(ardasPunjabi);
  const [selectedLanguage, setSelectedLanguage] = useState("ardasPunjabi");

  // if a button is pressed, then switch the language
  const handleLanguageChange = (selectedLanguage) => {
    switch (selectedLanguage) {
      case "punjabi":
        setLanguage(ardasPunjabi);
        setSelectedLanguage("ardasPunjabi");
        break;
      case "english":
        setLanguage(ardasEnglish);
        setSelectedLanguage("ardasEnglish");
        break;
      case "english meaning":
        setLanguage(ardasEnglishMeaning);
        setSelectedLanguage("ardasEnglishMeaning");
        break;
      default:
        setLanguage(ardasPunjabi);
        setSelectedLanguage("ardasPunjabi");
    }
  };

  return (
    // center the elements
    <div className="flex justify-center md:pt-20 md:mx-40">
      {/* set the background to white and center text */}
      <div className="bg-white w-max text-center lg:min-w-160 xl:min-w-200">
        {/* add a margin to give all the elements in the container a bit of spacing from the margin */}
        <div className="m-5">
          {/* render the language buttons */}
          <LanguageSwitcher onLanguageChange={handleLanguageChange} />
          <PrayerContent
            language={language}
            selectedLanguage={selectedLanguage}
            prayerName="ardas"
          />
        </div>
      </div>
    </div>
  );
}

export default ArdasSahib;
