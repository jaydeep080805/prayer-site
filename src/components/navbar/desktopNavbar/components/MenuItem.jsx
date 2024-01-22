import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// each menu item in the navbar
function MenuItem({ name }) {
  return (
    <Link
      to={"#"}
      className="font-heading font-bold cursor-pointer hover:text-orange-400 hover:scale-110 transition-all duration-200"
    >
      {name}
    </Link>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string,
};

export default MenuItem;
