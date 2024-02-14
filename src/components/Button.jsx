import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// the main buttons on the home page
function Button({ name, pageLink, onClickFunc = null }) {
  return (
    // all buttons will have the same classes
    // use a prop to pass in the destination and name
    <Link
      to={pageLink}
      onClick={onClickFunc}
      className="bg-white dark:bg-gray-800 capitalize font-bold text-orange-500 w-80 mx-5 p-5 rounded-md shadow-lg cursor-pointer lg:mx-0 lg:hover:scale-105 lg:hover:bg-gray-200 dark:lg:hover:bg-gray-700 transition duration-200"
    >
      <p className="text-4xl md:text-3xl">{name}</p>
    </Link>
  );
}

function PrayerPageNavigationButtonsWithPageNum({
  currentSelectedPage,
  setCurrentSelectedPage,
  amountOfPagesScriptNeeds,
}) {
  return (
    <>
      {/* center div */}
      <div className="flex justify-center my-10">
        {/* add spacing between buttons */}
        <div className="flex space-x-5 lg:space-x-10">
          <button
            // move the page down
            onClick={() => {
              setCurrentSelectedPage(
                currentSelectedPage > 1
                  ? currentSelectedPage - 1
                  : (currentSelectedPage = 1)
              );
            }}
            className="bg-orange-400 p-2 rounded-md shadow-md capitalize"
          >
            previous page
          </button>

          <div className="self-center">
            {currentSelectedPage} of {amountOfPagesScriptNeeds}
          </div>

          <a
            // move the page up
            href={"#top-of-prayer-card"}
            onClick={() => {
              setCurrentSelectedPage(
                currentSelectedPage < amountOfPagesScriptNeeds
                  ? currentSelectedPage + 1
                  : (currentSelectedPage = amountOfPagesScriptNeeds)
              );
            }}
            className="bg-orange-400 p-2 rounded-md shadow-md capitalize"
          >
            next page
          </a>
        </div>
      </div>
    </>
  );
}

// prop types
Button.propTypes = {
  name: PropTypes.string,
  pageLink: PropTypes.string,
  subText: PropTypes.string,
  onClickFunc: PropTypes.func,
};

PrayerPageNavigationButtonsWithPageNum.propTypes = {
  currentSelectedPage: PropTypes.number.isRequired,
  setCurrentSelectedPage: PropTypes.func.isRequired,
  amountOfPagesScriptNeeds: PropTypes.number.isRequired,
};

export default Button;
export { PrayerPageNavigationButtonsWithPageNum };
