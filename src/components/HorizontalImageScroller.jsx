import PropTypes from "prop-types";

function HorizontalImageScroller({ imageSrc, alt, name }) {
  return (
    <div className="bg-white snap-center p-5 dark:bg-gray-800 shadow-md h-88 rounded-md">
      <img src={imageSrc} alt={alt} className="rounded-md w-80 h-60" />
      <p className="flex justify-center capitalize font-heading items-center h-20">
        {name}
      </p>
    </div>
  );
}

HorizontalImageScroller.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HorizontalImageScroller;
