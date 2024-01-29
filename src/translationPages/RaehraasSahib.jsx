import PrayerDisplay from "./components/PrayerDisplay";
import raehraasTranslation from "../translations/raehraasTranslation";

// get all the languages
const youtubeVideo = raehraasTranslation["youtubeLink"];
const raehrassPunjabi = raehraasTranslation["gurmuki"];
const raehrassEnglish = raehraasTranslation["english"];
const raehrassEnglishMeaning = raehraasTranslation["englishMeaning"];

// create a list of the languages so it can be passed through to the PrayerDisplay
const listOfScripts = [
  youtubeVideo,
  raehrassPunjabi,
  raehrassEnglish,
  raehrassEnglishMeaning,
];

function RaehraasSahib() {
  return <PrayerDisplay scripts={listOfScripts} prayerName={"raehraas"} />;
}

export default RaehraasSahib;
