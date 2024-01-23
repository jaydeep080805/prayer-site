import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// the main buttons on the home page
function Button({ name, pageLink }) {
  return (
    // all buttons will have the same classes
    // use a prop to pass in the destination and name
    <Link
      to={pageLink}
      className="capitalize bg-white text-orange-500 w-80 mx-5 p-5 rounded-md shadow-lg cursor-pointer hover md:mx-0 md:hover:scale-105 hover:bg-black transition duration-200"
    >
      <p className="text-4xl md:text-3xl">{name}</p>
    </Link>
  );
}

// prop types
Button.propTypes = {
  name: PropTypes.string,
  pageLink: PropTypes.string,
  subText: PropTypes.string,
};

export default Button;
