import { useState } from "react";

import ButtonStructure from "../components/ButtonStructure";
import { japjiSahib } from "../translations";
import TranslationButton from "./components/translationButton";

// get all the languages
const japjiPunjabi = japjiSahib["gurmuki"];
const japjiEnglish = japjiSahib["english"];
const japjiEnglishMeaning = japjiSahib["englishMeaning"];

function JapjiSahib() {
  // set the default language to punjabi
  const [language, setLanguage] = useState(japjiPunjabi);

  // if a button is pressed, then switch the language
  const handleLanguageChange = (selectedLanguage) => {
    switch (selectedLanguage) {
      case "punjabi":
        setLanguage(japjiPunjabi);
        break;
      case "english":
        setLanguage(japjiEnglish);
        break;
      case "english meaning":
        setLanguage(japjiEnglishMeaning);
        break;
      default:
        setLanguage(japjiPunjabi);
    }
  };

  return (
    // center the elements
    <div className="flex justify-center md:pt-20 md:mx-96">
      {/* set the background to white and center text */}
      <div className="bg-white w-max text-center">
        {/* add a margin to give all the elements in the container a bit of spacing from the margin */}
        <div className="m-5">
          {/* render the buttons */}
          <div className="mb-10">
            <ButtonStructure
              buttons={
                <TranslationButton onLanguageChange={handleLanguageChange} />
              }
            />
          </div>

          {/* loop through all the lines and add them to the screen
          this will update dynamically based on what language is chosen */}
          {language.map((line, index) => {
            // if the current line is blank then add a line as it means its the end of a paragraph
            if (line === "") {
              return <br key={index} />;
            }

            if (language === japjiPunjabi) {
              return (
                <p className={`text-2xl m-1 `} key={index}>
                  {line}
                </p>
              );
            }

            // check if the current language is the english meaning
            if (language === japjiEnglishMeaning) {
              // checks if it is the start of the next chapter and makes the text bigger and bold
              // also changes font
              if (line.startsWith("Pauri")) {
                return (
                  <p
                    className={`text-5xl m-3 my-5 underline font-bold font-heading`}
                    key={index}
                  >
                    {line}
                  </p>
                );
              }

              // check if the current line is even
              const indexIsEven = index % 2 === 0;
              // if the current line is even, then set the font to bold
              return (
                <p
                  className={`text-2xl m-3 ${indexIsEven && "font-bold"}`}
                  key={index}
                >
                  {line}
                </p>
              );
            }

            // if its a regular line then render as usual
            return (
              <p className="text-2xl m-8 md:m-3" key={index}>
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JapjiSahib;
