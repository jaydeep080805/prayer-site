import PrayerDisplay from "./components/PrayerDisplay";
import jaapTranslation from "../translations/jaapTranslation";

// get all the languages
const youtubeVideo = jaapTranslation["youtubeLink"];
const jaapPunjabi = jaapTranslation["gurmuki"];
const jaapEnglish = jaapTranslation["english"];
const jaapEnglishMeaning = jaapTranslation["englishMeaning"];

// create a list of the languages so it can be passed through to the PrayerDisplay
const listOfScripts = [
  youtubeVideo,
  jaapPunjabi,
  jaapEnglish,
  jaapEnglishMeaning,
];

function JaapSahib() {
  return <PrayerDisplay scripts={listOfScripts} prayerName={"jaap"} />;
}

export default JaapSahib;
