import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import pronunciationDict from "../../translations/pronunciationDict";
import React from "react";

function PrayerLine({ line, index, selectedLanguage, prayerName }) {
  // if the line is empty then use a break since its the end of a paragraph
  if (line === "") return <br key={index} />;

  // set the base styling
  // will be used for english and the normal (non bold) text in english meaning
  const baseStyle = "text-xl md:text-2xl md:mt-3 break-words";
  // keeps the same font size for pubjabi but removed spacing
  const punjabiStyle = "text-xl md:text-2xl m-0 break-words";

  // sets the actual meanings to bold
  const englishMeaningStyle = "font-bold break-words";

  // sets the heading styles
  const englishMeaningHeading =
    "text-3xl md:text-5xl m-3 my-5 pt-16 underline font-bold font-heading";

  const wordWithPronunciation = (line) => {
    // filters the array by " " and "."
    const words = line.split(/[\s.]+/);

    // loop through the words
    const newLine = words.map((word, wordIndex) => {
      // convert the string to lowercase
      const pronunciation = pronunciationDict[word.toLowerCase()];

      // Create a unique ID so the tooltip displays correctly
      const uniqueId = `tooltip-${index}-${wordIndex}`;

      if (pronunciation) {
        // if the word is in the dictionary then display the word with the tooltip
        return (
          <React.Fragment key={uniqueId}>
            <span id={uniqueId} className={"cursor-pointer px-1"}>
              {word}
            </span>
            <Tooltip anchorSelect={`#${uniqueId}`} clickable>
              {pronunciation}
            </Tooltip>
          </React.Fragment>
        );
      } else {
        // otherwise return the unfiltered word
        return `${word} `;
      }
    });
    // return the newLine so it can be rendered
    return newLine;
  };

  let processedLine = line;
  // this should always execute on the englishMeaning since there should always be a line
  if (line !== "" && selectedLanguage === `${prayerName}EnglishMeaning`) {
    processedLine = wordWithPronunciation(line);
  }

  // the punjabi styling
  if (selectedLanguage === `${prayerName}Punjabi`) {
    return <p className={`${punjabiStyle}`}>{line}</p>;
  }

  // the english meaning styling
  else if (selectedLanguage === `${prayerName}EnglishMeaning`) {
    const indexIsEven = index % 2 === 0;

    // check if its a heading and apply the heading styling
    if (line.startsWith("Pauri")) {
      return <p className={englishMeaningHeading}>{line}</p>;
    }

    // if its an even line (an actual meaning) then apply the meaning styles
    if (indexIsEven) {
      return (
        <div
          className={`${baseStyle} ${englishMeaningStyle} text-orange-400 mt-12 lg:mt-16 ${
            // the check if the line is really long and if so add more margin
            // this will be used in prayers like the ardaas where it is very long grouped text
            line.length >= 150 ? "mt-20 lg:mt-32 xl:mt-20" : "mt-10"
          }`}
        >
          {/* {line} */}
          {/* {processedLine} */}

          {/* checks if it is an array and then processes it accordingly */}
          {Array.isArray(processedLine) ? processedLine : line}
        </div>
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
  prayerName: PropTypes.string.isRequired,
};

export default PrayerLine;
