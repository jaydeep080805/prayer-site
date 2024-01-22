import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TranslationButtons({ name, pageLink, subText }) {
  return (
    <Link
      to={pageLink}
      className="bg-white text-orange-500 mx-10 p-5 justify-self-center rounded-md cursor-pointer hover md:hover:scale-105 hover:bg-black transition duration-200"
    >
      <div className="space-y-5">
        <p className="text-4xl md:text-3xl">{name}</p>

        <p className="text-left text-orange-400 text-2xl md:text-xl">
          {subText}
        </p>
      </div>
    </Link>
  );
}

TranslationButtons.propTypes = {
  name: PropTypes.string,
  pageLink: PropTypes.string,
  subText: PropTypes.string,
};

export default TranslationButtons;
