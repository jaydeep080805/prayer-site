import PropTypes from "prop-types";

function Subheading({ text }) {
  // subheading text
  return (
    <h3 className="text-2xl text-orange-400 font-heading font-semibold lg:text-3xl">
      {text}
    </h3>
  );
}

Subheading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subheading;
