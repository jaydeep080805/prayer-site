import PropTypes from "prop-types";

// the overlay that makes the background blurry
function BackgroundOverlay({ isOpened, clickFunc }) {
  return (
    // the overlay
    <div
      className={`inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10 ${
        isOpened ? "fixed" : "hidden"
      }`}
      onClick={clickFunc}
    ></div>
  );
}

BackgroundOverlay.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default BackgroundOverlay;
