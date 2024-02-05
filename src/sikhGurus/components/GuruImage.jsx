import PropTypes from "prop-types";

function GuruImage({ imageSrc }) {
  return (
    <div className="flex justify-center mt-5">
      <img
        src={imageSrc}
        // create a border and set the sizing for different device sizes
        className="border border-gray-300 rounded-md w-60 h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
      />
    </div>
  );
}

GuruImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default GuruImage;
