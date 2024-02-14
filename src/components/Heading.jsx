import PropTypes from "prop-types";

function Heading({ text }) {
  return (
    // the main heading at the top of the page
    <h1 className="font-bold font-heading text-4xl pt-5 text-orange-400 underline capitalize">
      {text}
    </h1>
  );
}

function PrayerHeading({ text }) {
  return (
    <h1 className="capitalize text-orange-400 text-4xl font-heading font-bold underline">
      {text} sahib
    </h1>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

PrayerHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
export { PrayerHeading };
