import PropTypes from "prop-types";

function SikhContent({ text }) {
  return <div className="font-main font-semibold xl:text-xl">{text}</div>;
}

SikhContent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SikhContent;
