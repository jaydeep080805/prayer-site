import ardasTranslation from "../translations/ardasTranslation";
import PrayerDisplay from "./components/PrayerDisplay";

// get all the languages
const ardasPunjabi = ardasTranslation["gurmuki"];
const ardasEnglish = ardasTranslation["english"];
const ardasEnglishMeaning = ardasTranslation["englishMeaning"];
const listOfScripts = [ardasPunjabi, ardasEnglish, ardasEnglishMeaning];

function ArdasSahib() {
  return (
    <>
      <PrayerDisplay scripts={listOfScripts} prayerName={"japji"} />
    </>
  );
}

export default ArdasSahib;
