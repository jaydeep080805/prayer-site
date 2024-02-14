import PropTypes from "prop-types";
import PrayerLine from "./PrayerLine";

function PrayerContent({ script, selectedLanguage, prayerName }) {
  return (
    <>
      {/* loop through the array and send each line to the prayerLine where it will check how it should be rendered */}
      {script.map(function (line, index) {
        return (
          <PrayerLine
            key={index}
            line={line}
            index={index}
            selectedLanguage={selectedLanguage}
            prayerName={prayerName}
          />
        );
      })}
    </>
  );
}

PrayerContent.propTypes = {
  script: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  prayerName: PropTypes.string.isRequired,
};

export default PrayerContent;
