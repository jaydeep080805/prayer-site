import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FooterMenuItem({ name, pageLink }) {
  // add text styling
  return (
    <Link
      to={pageLink}
      className="cursor-pointer hover:text-orange-300 transition duration-200"
    >
      {name}
    </Link>
  );
}

FooterMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  pageLink: PropTypes.string,
};

export default FooterMenuItem;
