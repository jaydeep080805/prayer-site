import PropTypes from "prop-types";

function Image({ imageSrc, isEvent = false }) {
  return (
    <div className="flex justify-center mt-5">
      <img
        src={imageSrc}
        // create a border and set the sizing for different device sizes
        className={`border border-gray-300 rounded-md w-60 h-60 lg:w-80 lg:h-80 lg:hover:scale-105 lg:transition lg:duration-200 xl:w-96 xl:h-96
        ${isEvent && "w-80 h-40 lg:w-96 lg:h-60 xl:w-[25rem] xl:h-60"}`}
      />
    </div>
  );
}

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  isEvent: PropTypes.bool,
};

export default Image;
