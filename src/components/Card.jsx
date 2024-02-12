import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ pageLink, title, text }) {
  return (
    <Link
      to={pageLink}
      className="w-80 p-8 rounded-lg shadow-lg space-y-3 dark:bg-gray-800 transition duration-200 lg:hover:bg-gray-300 lg:hover:dark:bg-gray-700 lg:hover:scale-105"
    >
      <h4 className="capitalize text-4xl font-heading text-orange-400">
        {title}
      </h4>
      <p className="text-lg">{text}</p>
    </Link>
  );
}

Card.propTypes = {
  pageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
