import PropTypes from "prop-types";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import PrayerContent from "./PrayerContent";
import toast from "react-hot-toast";
import { BackButtonNavigationPage } from "../../components/BackButtons";
import { PrayerHeading } from "../../components/Heading";
import { PrayerPageNavigationButtonsWithPageNum } from "../../components/Button";

const notify = () => {
  if (localStorage.getItem("toastShown") === "true") {
    return; // Don't show the toast if already seen
  }

  toast("Try hovering or clicking a word to see the pronunciation", {
    className:
      "bg-gray-700 text-white shadow-lg rounded-xl dark:bg-white dark:text-black",
  });

  // save to users local state so it will not show again
  localStorage.setItem("toastShown", "true");
};

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
        notify();
        break;

      default:
        setScript(punjabiScript);
        setSelectedLanguage(`${prayerName}Punjabi`);
    }
  };

  // console.log(script);

  let amountOfPagesScriptNeeds = 0;
  let amountOfLinesInScript = [];
  let [currentSelectedPage, setCurrentSelectedPage] = useState(1);

  script.map((line, index) => {
    if (index % 100 === 0 && index !== 0) {
      // console.log(line);
      amountOfLinesInScript.push(index);
      amountOfPagesScriptNeeds++;
    }
  });

  if (script.length > amountOfLinesInScript[amountOfLinesInScript.length - 1]) {
    const leftOverLines =
      amountOfLinesInScript[amountOfLinesInScript.length - 1] +
      (script.length - amountOfLinesInScript[amountOfLinesInScript.length - 1]);
    amountOfLinesInScript.push(leftOverLines);
    // console.log("poo");
  }

  // console.log(amountOfPagesScriptNeeds[amountOfPagesScriptNeeds.length - 1]);
  // console.log(amountOfLinesInScript);
  // console.log(currentSelectedPage);

  // useEffect(() => {});

  const handlePage = (page) => {
    // console.log(page);
    // console.log(amountOfPagesScriptNeeds);
    // console.log(amountOfLinesInScript);

    for (let i = page - 1; i <= amountOfPagesScriptNeeds; i++) {
      switch (page) {
        case i:
          return (
            <PrayerContent
              script={script.slice(
                amountOfLinesInScript[i - 2],
                amountOfLinesInScript[i - 1]
              )}
              selectedLanguage={selectedLanguage}
              prayerName={prayerName}
              amountOfPagesScriptNeeds={amountOfPagesScriptNeeds}
            />
          );
      }
    }
  };

  return (
    // center the elements
    <div className="flex justify-center md:pt-20 md:mx-96">
      {/* this div will also align everything in the center including the youtube video */}
      {/* set the background to white and center text */}
      <div className="bg-white w-screen dark:bg-gray-900 dark:text-white flex flex-col items-center gap-5 pt-10 w-max text-center rounded-xl shadow-xl lg:min-w-180 xl:min-w-220">
        <BackButtonNavigationPage />

        <PrayerHeading text={prayerName} />

        <iframe
          className="lg:w-[30rem] lg:h-[15rem] xl:w-[40rem] xl:h-[20rem]"
          src={youtubeVideo}
          allowFullScreen
        />

        {/* add a margin to give all the elements in the container a bit of spacing from the margin */}
        <div
          className="m-5 max-w-80 lg:max-w-160 xl:max-w-200"
          id="top-of-prayer-card"
        >
          {/* render the language buttons */}
          <LanguageSwitcher onLanguageChange={handleLanguageChange} />

          {/* if the user has changed page, add page navigation buttons to the top */}
          {currentSelectedPage > 1 && (
            <PrayerPageNavigationButtonsWithPageNum
              currentSelectedPage={currentSelectedPage}
              setCurrentSelectedPage={setCurrentSelectedPage}
              amountOfPagesScriptNeeds={amountOfPagesScriptNeeds}
            />
          )}

          {amountOfLinesInScript < 100 ? (
            <PrayerContent
              script={script}
              selectedLanguage={selectedLanguage}
              prayerName={prayerName}
            />
          ) : (
            handlePage(currentSelectedPage)
          )}

          {/* select pages container */}
          <PrayerPageNavigationButtonsWithPageNum
            currentSelectedPage={currentSelectedPage}
            setCurrentSelectedPage={setCurrentSelectedPage}
            amountOfPagesScriptNeeds={amountOfPagesScriptNeeds}
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
