import PropTypes from "prop-types";
import PrayerLine from "./PrayerLine";

function PrayerContent({ language, selectedLanguage }) {
  return (
    <>
      {/* loop through the array and send each line to the prayerLine where it will check how it should be rendered */}
      {language.map((line, index) => (
        <PrayerLine
          key={index}
          line={line}
          index={index}
          selectedLanguage={selectedLanguage}
        />
      ))}
    </>
  );
}

PrayerContent.propTypes = {
  language: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
};

export default PrayerContent;
