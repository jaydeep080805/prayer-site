import PropTypes from "prop-types";
import Image from "./Image";

function Section({ text, spanText = null, imageSrc }) {
  return (
    // each section of text
    <>
      <p className="text-lg font-main xl:text-xl">
        {/* allows for additional span text for sections like 5 k's */}
        <span className="font-black">{spanText} </span>
        {text}
      </p>
      {imageSrc && <Image imageSrc={imageSrc} />}
    </>
  );
}

Section.propTypes = {
  text: PropTypes.string.isRequired,
  spanText: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Section;
