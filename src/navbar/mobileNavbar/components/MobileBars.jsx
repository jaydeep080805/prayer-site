import PropTypes from "prop-types";

// adds the bars icon from fontawesome
// will also be high enough on the z index to be on the slidemenu
// so instead of having 2 icons, dynamically change this icon based on if the menu is open
function MobileBars({ onClickFunc, isOpened }) {
  return (
    <i
      onClick={onClickFunc}
      className={`text-3xl text-orange-400 ${
        isOpened ? "fa-solid fa-x" : "fa fa-bars"
      }`}
    ></i>
  );
}

MobileBars.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

export default MobileBars;
