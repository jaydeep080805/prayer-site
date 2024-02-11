import PropTypes from "prop-types";

function Section({ text, spanText = null }) {
  return (
    // each section of text
    <p className="text-lg font-main xl:text-xl">
      {/* allows for additional span text for sections like 5 k's */}
      <span className="font-black">{spanText} </span>
      {text}
    </p>
  );
}

Section.propTypes = {
  text: PropTypes.string.isRequired,
  spanText: PropTypes.string,
};

export default Section;
