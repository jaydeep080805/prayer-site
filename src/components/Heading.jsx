import PropTypes from "prop-types";

function Heading({ text }) {
  return (
    // the main heading at the top of the page
    <h1 className="flex flex-col font-bold font-heading text-4xl pt-5 text-orange-400 underline capitalize">
      {text}
    </h1>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
