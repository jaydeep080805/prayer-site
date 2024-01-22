import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// navbar khanda image
function Image({ image, altText }) {
  return (
    // link the image to the home page
    <Link to={"./"}>
      <img
        // set the image to a set size with margin on the x axis
        className="cursor-pointer w-16 h-16 mx-10"
        src={image}
        alt={altText}
      />
    </Link>
  );
}

Image.propTypes = {
  image: PropTypes.any,
  altText: PropTypes.string,
};

export default Image;
