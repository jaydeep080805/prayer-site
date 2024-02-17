import PropTypes from "prop-types";

function HorizontalImagesForScroller({ imageSrc, alt, name }) {
  return (
    <div className="bg-white snap-center p-5 dark:bg-gray-800 shadow-md h-88 rounded-md">
      <img src={imageSrc} alt={alt} className="rounded-md w-80 h-60" />
      <p className="flex justify-center capitalize font-heading items-center h-20 text-xl">
        {name}
      </p>
    </div>
  );
}

function HorizontalImageScroller({ children }) {
  return (
    <div className="grid grid-flow-col auto-cols-[100%] gap-2 snap-x snap-mandatory overflow-x-scroll shadow-md lg:auto-cols-[30%] xl:auto-cols-[22%] lg:snap-none">
      {children}
    </div>
  );
}

HorizontalImagesForScroller.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

HorizontalImageScroller.propTypes = {
  children: PropTypes.node.isRequired,
};

export { HorizontalImageScroller };
export default HorizontalImagesForScroller;
