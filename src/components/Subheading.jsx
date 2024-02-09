import PropTypes from "prop-types";

function Subheading({ text }) {
  // subheading text
  return (
    <div className="text-2xl text-orange-400 font-heading lg:text-3xl">
      {text}
    </div>
  );
}

Subheading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subheading;
