import PropTypes from "prop-types";
import MobileMenu from "./MobileMenu";
import { useEffect } from "react";

// the container for the navbar menu on mobile
function SlideMenu({ isOpened, clickFunc }) {
  // Use useEffect to toggle overflow on the body
  useEffect(() => {
    if (isOpened) {
      // stop the page from being scrollable
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };

    // run the effect everytime isOpened changes
  }, [isOpened]);

  return (
    // pass through if the menu is opened to show or hide it
    <div
      className={`bg-white overflow-y-scroll dark:bg-gray-800 h-full w-3/5 right-0 z-20 fixed transform transition-transform duration-300 ${
        isOpened ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* content */}
      <MobileMenu clickFunc={clickFunc} />
    </div>
  );
}

SlideMenu.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default SlideMenu;
