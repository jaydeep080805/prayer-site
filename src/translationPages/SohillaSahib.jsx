import PrayerDisplay from "./components/PrayerDisplay";
import sohilaaTranslation from "../translations/sohilaaTranslation";

// get all the languages
const sohilaaPunjabi = sohilaaTranslation["gurmuki"];
const sohilaaEnglish = sohilaaTranslation["english"];
const sohilaaEnglishMeaning = sohilaaTranslation["englishMeaning"];

// create a list of the languages so it can be passed through to the PrayerDisplay
const listOfScripts = [sohilaaPunjabi, sohilaaEnglish, sohilaaEnglishMeaning];

function SohillaSahib() {
  return <PrayerDisplay scripts={listOfScripts} prayerName={"sohilaa"} />;
}

export default SohillaSahib;
