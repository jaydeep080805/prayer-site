import PrayerDisplay from "./components/PrayerDisplay";
import japjiTranslation from "../translations/japjiTranslation";

const japjiPunjabi = japjiTranslation["gurmuki"];
const japjiEnglish = japjiTranslation["english"];
const japjiEnglishMeaning = japjiTranslation["englishMeaning"];
const listOfScripts = [japjiPunjabi, japjiEnglish, japjiEnglishMeaning];

function SohillaSahib() {
  return (
    <>
      <PrayerDisplay scripts={listOfScripts} prayerName={"japji"} />
    </>
  );
}

export default SohillaSahib;
