import PrayerDisplay from "./components/PrayerDisplay";
import sohilaaTranslation from "../translations/sohilaaTranslation";

const sohilaaPunjabi = sohilaaTranslation["gurmuki"];
const sohilaaEnglish = sohilaaTranslation["english"];
const sohilaaEnglishMeaning = sohilaaTranslation["englishMeaning"];
const listOfScripts = [sohilaaPunjabi, sohilaaEnglish, sohilaaEnglishMeaning];

function SohillaSahib() {
  return (
    <>
      <PrayerDisplay scripts={listOfScripts} prayerName={"sohilaa"} />
    </>
  );
}

export default SohillaSahib;
