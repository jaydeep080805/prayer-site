import PrayerDisplay from "./components/PrayerDisplay";
import raehraasTranslation from "../translations/raehraasTranslation";

const raehrassPunjabi = raehraasTranslation["gurmuki"];
const raehrassEnglish = raehraasTranslation["english"];
const raehrassEnglishMeaning = raehraasTranslation["englishMeaning"];
const listOfScripts = [
  raehrassPunjabi,
  raehrassEnglish,
  raehrassEnglishMeaning,
];

function RaehraasSahib() {
  return (
    <>
      <PrayerDisplay scripts={listOfScripts} prayerName={"japji"} />
    </>
  );
}

export default RaehraasSahib;
