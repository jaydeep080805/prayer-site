import PropTypes from "prop-types";
import React from "react";

function HorizontalImagesForScroller({ imageSrc, alt, name, text, link }) {
  return (
    // container
    <div
      className={`flex flex-col justify-center bg-white snap-center p-5 shadow-md rounded-md dark:bg-gray-800 `}
    >
      {/* image */}
      <img src={imageSrc} alt={alt} className="mx-auto rounded-md w-60 h-60" />

      {/* if there is meant to be a name */}
      {name && (
        <>
          <p className="flex justify-center items-center capitalize underline font-heading font-bold h-20 text-2xl">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </p>

          {/* text will only be needed if there is a name aswell */}
          <p className="flex justify-center text-lg">
            <em>{text}</em>
          </p>
        </>
      )}
    </div>
  );
}

function HorizontalImageScroller({ children }) {
  // checks how many children are passed in
  // if there is less than three then set this to true
  const shouldCenterLaptop = React.Children.count(children) <= 3;
  const shouldCenterTablet = React.Children.count(children) <= 2;

  return (
    <div
      className={`grid grid-flow-col auto-cols-[100%] gap-2 snap-x snap-mandatory overflow-x-scroll shadow-md lg:auto-cols-[40%] xl:auto-cols-[30%] lg:snap-none ${
        // center the images on larger screens if there is less than 3 images
        shouldCenterLaptop && "xl:justify-center"
      }
      ${shouldCenterTablet && "lg:justify-center"}`}
    >
      {children}
    </div>
  );
}

HorizontalImagesForScroller.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

HorizontalImageScroller.propTypes = {
  children: PropTypes.node.isRequired,
};

export { HorizontalImageScroller };
export default HorizontalImagesForScroller;
