import PropTypes from "prop-types";

function FooterMenuItem({ name }) {
  // add text styling
  return (
    <p className="cursor-pointer hover:text-orange-300 transition duration-200">
      {name}
    </p>
  );
}

FooterMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FooterMenuItem;
