import PropTypes from "prop-types";

function SpanSection({ text, spanText = null }) {
  return (
    // each section of text
    <div className="xl:text-xl">
      {/* allows for additional span text for sections like 5 k's */}
      <span className="font-bold">{spanText} </span>
      {text}
    </div>
  );
}

SpanSection.propTypes = {
  text: PropTypes.string.isRequired,
  spanText: PropTypes.string,
};

export default SpanSection;
