import PropTypes from "prop-types";
import MobileMenu from "./MobileMenu";

// the container for the navbar menu on mobile
function SlideMenu({ isOpened, clickFunc }) {
  return (
    // pass through if the menu is opened to show or hide it
    <div
      className={`bg-white dark:bg-gray-800 h-full w-3/5 right-0 z-20 fixed transform transition-transform duration-300 ${
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
