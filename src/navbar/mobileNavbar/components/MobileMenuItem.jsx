import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// function to create a menu item component for mobile
function MobileMenuItem({ name, pageLink, clickFunc }) {
  return (
    // will all have the same classes applied to them
    <Link
      onClick={clickFunc}
      to={pageLink}
      className="capitalize text-2xl text-orange-400"
    >
      {name}
    </Link>
  );
}

MobileMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default MobileMenuItem;
