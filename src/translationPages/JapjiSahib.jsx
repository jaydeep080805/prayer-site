import { useState } from "react";

import LanguageSwitcher from "./components/LanguageSwitcher";
import PrayerContent from "./components/PrayerContent";
import japjiTranslation from "../translations/japjiTranslation";

// get all the languages
const japjiPunjabi = japjiTranslation["gurmuki"];
const japjiEnglish = japjiTranslation["english"];
const japjiEnglishMeaning = japjiTranslation["englishMeaning"];

function JapjiSahib() {
  // set the default language to punjabi
  const [language, setLanguage] = useState(japjiPunjabi);
  const [selectedLanguage, setSelectedLanguage] = useState("japjiPunjabi");

  // if a button is pressed, then switch the language
  const handleLanguageChange = (selectedLanguage) => {
    switch (selectedLanguage) {
      case "punjabi":
        setLanguage(japjiPunjabi);
        setSelectedLanguage("japjiPunjabi");
        break;
      case "english":
        setLanguage(japjiEnglish);
        setSelectedLanguage("japjiEnglish");
        break;
      case "english meaning":
        setLanguage(japjiEnglishMeaning);
        setSelectedLanguage("japjiEnglishMeaning");
        break;
      default:
        setLanguage(japjiPunjabi);
        setSelectedLanguage("japjiPunjabi");
    }
  };

  return (
    // center the elements
    <div className="flex justify-center md:pt-20 md:mx-96">
      {/* set the background to white and center text */}
      <div className="bg-white w-max text-center lg:min-w-160 xl:min-w-200">
        {/* add a margin to give all the elements in the container a bit of spacing from the margin */}
        <div className="m-5">
          {/* render the language buttons */}
          <LanguageSwitcher onLanguageChange={handleLanguageChange} />
          <PrayerContent
            language={language}
            selectedLanguage={selectedLanguage}
            prayerName="japji"
          />
        </div>
      </div>
    </div>
  );
}

export default JapjiSahib;

// {/* loop through all the lines and add them to the screen
// this will update dynamically based on what language is chosen */}
// {language.map((line, index) => {
//   // if the current line is blank then add a line as it means its the end of a paragraph
//   if (line === "") {
//     return <br key={index} />;
//   }

//   if (language === japjiPunjabi) {
//     return (
//       <p className={`text-2xl m-1 `} key={index}>
//         {line}
//       </p>
//     );
//   }

//   // check if the current language is the english meaning
//   if (language === japjiEnglishMeaning) {
//     // checks if it is the start of the next chapter and makes the text bigger and bold
//     // also changes font
//     if (line.startsWith("Pauri")) {
//       return (
//         <p
//           className={`text-5xl m-3 my-5 underline font-bold font-heading`}
//           key={index}
//         >
//           {line}
//         </p>
//       );
//     }

//     // check if the current line is even
//     const indexIsEven = index % 2 === 0;
//     // if the current line is even, then set the font to bold
//     return (
//       <p
//         className={`text-2xl m-3 ${indexIsEven && "font-bold"}`}
//         key={index}
//       >
//         {line}
//       </p>
//     );
//   }

//   // if its a regular line then render as usual
//   return (
//     <p className="text-2xl m-8 md:m-3" key={index}>
//       {line}
//     </p>
//   );
// })}
