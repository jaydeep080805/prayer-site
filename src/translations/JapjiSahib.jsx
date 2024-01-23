import { useState } from "react";

import ButtonStructure from "../components/ButtonStructure";
import { japjiSahib } from "../translations";
import JabjiButtons from "./japjiButtons";

// get all the languages
const japjiPunjabi = japjiSahib["gurmuki"];
const japjiEnglish = japjiSahib["english"];
const japjiEnglishMeaning = japjiSahib["english"];

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
    <div className="flex justify-center pt-20 md:mx-96">
      <div className="bg-white w-full text-center">
        <div className="m-5">
          {/* render the buttons */}
          <div className="mb-10">
            <ButtonStructure
              buttons={<JabjiButtons onLanguageChange={handleLanguageChange} />}
            />
          </div>

          {/* loop through all the lines and add them to the screen
          this will update dynamically based on what language is chosen */}
          {language.map((line, index) => {
            if (line === "") {
              return <br key={index} />;
            }

            return (
              <p className="text-2xl" key={index}>
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
