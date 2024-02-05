import PropTypes from "prop-types";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import PrayerContent from "./PrayerContent";

// get the list of scripts and the name of the prayer
function PrayerDisplay({ scripts, prayerName }) {
  // create seperate variables to hold all the different script languages
  const youtubeVideo = scripts[0];
  const punjabiScript = scripts[1];
  const englishScript = scripts[2];
  const englishMeaningScript = scripts[3];

  // create the states and give the default values
  const [script, setScript] = useState(punjabiScript);
  const [selectedLanguage, setSelectedLanguage] = useState(
    `${prayerName}Punjabi`
  );

  // function to handle when a language button is pressed
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
      {/* this div will also align everything in the center including the youtube video */}
      {/* set the background to white and center text */}
      <div className="bg-white dark:bg-gray-900 dark:text-white flex flex-col items-center pt-10 w-max text-center rounded-xl shadow-xl lg:min-w-180 xl:min-w-220">
        <iframe
          className="lg:w-[30rem] lg:h-[15rem] xl:w-[40rem] xl:h-[20rem]"
          src={youtubeVideo}
          allowFullScreen
        />

        {/* add a margin to give all the elements in the container a bit of spacing from the margin */}
        <div className="m-5 max-w-80 lg:max-w-160 xl:max-w-200">
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
