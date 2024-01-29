import PrayerDisplay from "./components/PrayerDisplay";
import japjiTranslation from "../translations/japjiTranslation";

// get all the languages
const youtubeVideo = japjiTranslation["youtubeLink"];
const japjiPunjabi = japjiTranslation["gurmuki"];
const japjiEnglish = japjiTranslation["english"];
const japjiEnglishMeaning = japjiTranslation["englishMeaning"];

// create a list of the languages so it can be passed through to the PrayerDisplay
const listOfScripts = [
  youtubeVideo,
  japjiPunjabi,
  japjiEnglish,
  japjiEnglishMeaning,
];

function JapjiSahib() {
  return <PrayerDisplay scripts={listOfScripts} prayerName={"japji"} />;
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
