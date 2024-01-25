import PropTypes from "prop-types";

function PrayerLine({ line, index, selectedLanguage }) {
  // if the line is empty then use a break since its the end of a paragraph
  if (line === "") return <br key={index} />;

  // set the base styling
  // will be used for english and the normal (non bold) text in english meaning
  const baseStyle = "text-2xl md:m-3";
  // keeps the same font size for pubjabi but removed spacing
  const punjabiStyle = "text-2xl";

  // sets the actual meanings to bold
  const englishMeaningStyle = "font-bold  md:my-0";

  // sets the heading styles
  const englishMeaningHeading =
    "text-5xl m-3 my-5 underline font-bold font-heading";

  // the punjabi styling
  if (selectedLanguage === "japjiPunjabi") {
    return <p className={`${punjabiStyle}`}>{line}</p>;
  }
  // the english meaning styling
  else if (selectedLanguage === "japjiEnglishMeaning") {
    const indexIsEven = index % 2 === 0;

    // check if its a heading and apply the heading styling
    if (line.startsWith("Pauri")) {
      return <p className={englishMeaningHeading}>{line}</p>;
    }

    // if its an even line (an actaul meaning) then apply the meaning styles
    if (indexIsEven) {
      return (
        <p
          className={`${baseStyle} ${englishMeaningStyle} ${
            indexIsEven && "mt-10"
          }`}
        >
          {line}
        </p>
      );
    }
  }

  // return the base styles
  return <p className={baseStyle}>{line}</p>;
}

PrayerLine.propTypes = {
  line: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
};

export default PrayerLine;
