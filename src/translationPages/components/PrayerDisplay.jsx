import PropTypes from "prop-types";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import PrayerContent from "./PrayerContent";

function PrayerDisplay({ scripts, prayerName }) {
  const punjabiScript = scripts[0];
  const englishScript = scripts[1];
  const englishMeaningScript = scripts[2];

  const [script, setScript] = useState(punjabiScript);
  const [selectedLanguage, setSelectedLanguage] = useState(
    `${prayerName}Punjabi`
  );

  const handleLanguageChange = (selectedLanguage) => {
    switch (selectedLanguage) {
      case "punjabi":
        setScript(punjabiScript);
        setSelectedLanguage(`${prayerName}Punjabi`);
        break;
      case "english":
        setScript(englishScript);
        setSelectedLanguage(`${prayerName}English`);
        break;
      case "english meaning":
        setScript(englishMeaningScript);
        setSelectedLanguage(`${prayerName}EnglishMeaning`);
        break;
      default:
        setScript(punjabiScript);
        setSelectedLanguage(`${prayerName}Punjabi`);
    }
  };

  return (
    // center the elements
    <div className="flex justify-center md:pt-20 md:mx-96">
      {/* set the background to white and center text */}
      <div className="bg-white w-max text-center rounded-xl lg:min-w-160 xl:min-w-200">
        {/* add a margin to give all the elements in the container a bit of spacing from the margin */}
        <div className="m-5">
          {/* render the language buttons */}
          <LanguageSwitcher onLanguageChange={handleLanguageChange} />
          <PrayerContent
            script={script}
            selectedLanguage={selectedLanguage}
            prayerName={prayerName}
          />
        </div>
      </div>
    </div>
  );
}

PrayerDisplay.propTypes = {
  scripts: PropTypes.array.isRequired,
  prayerName: PropTypes.string.isRequired,
};

export default PrayerDisplay;
