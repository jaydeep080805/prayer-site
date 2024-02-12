import PropTypes from "prop-types";

// adds the bars icon from fontawesome
// will also be high enough on the z index to be on the slidemenu
// so instead of having 2 icons, dynamically change this icon based on if the menu is open
function MobileBars({ onClickFunc, isOpened }) {
  return (
    // The span acts as a wrapper for the icon and is used to apply the rotation animation.
    <span
      className={`inline-block transition-transform duration-300 mr-4 ${
        isOpened ? "rotate-90" : "rotate-0"
      }`}
    >
      <i
        // The onClick function toggles the menu open/close state.
        onClick={onClickFunc}
        // The icon changes between bars and 'X' based on the isOpened state.
        className={`text-3xl text-orange-400 ${
          isOpened ? "fa-solid fa-xmark" : "fa fa-bars"
        }`}
      ></i>
    </span>
  );
}

MobileBars.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

export default MobileBars;
