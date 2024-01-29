import ardasTranslation from "../translations/ardasTranslation";
import PrayerDisplay from "./components/PrayerDisplay";

// get all the languages
const youtubeVideo = ardasTranslation["youtubeLink"];
const ardasPunjabi = ardasTranslation["gurmuki"];
const ardasEnglish = ardasTranslation["english"];
const ardasEnglishMeaning = ardasTranslation["englishMeaning"];

// create a list of the languages so it can be passed through to the PrayerDisplay
const listOfScripts = [
  youtubeVideo,
  ardasPunjabi,
  ardasEnglish,
  ardasEnglishMeaning,
];

function ArdasSahib() {
  return <PrayerDisplay scripts={listOfScripts} prayerName={"ardas"} />;
}

export default ArdasSahib;
