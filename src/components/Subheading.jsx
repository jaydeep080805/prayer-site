import PropTypes from "prop-types";

function Subheading({ text }) {
  // subheading text
  return <div className="text-2xl text-orange-400">{text}</div>;
}

Subheading.propTypes = {
  text: PropTypes.string.isRequires,
};

export default Subheading;
