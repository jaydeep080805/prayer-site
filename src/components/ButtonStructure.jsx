import PropTypes from "prop-types";

// this function will get passed the buttons made by Button.jsx
// it will pre-structure them to repeat repetative code (DRY)
function ButtonStructure({ buttons }) {
  return (
    // center the elements
    <div className="flex justify-center">
      {/* set a max width so the elements can wrap*/}
      <div className="md:max-w-[80rem]">
        {/* the container holding all the buttons */}
        {/* sets the display to a flex-col on mobile and flew-row with flex-wrap on bigger screens */}
        <div className="mt-5 font-main flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:justify-center md:text-center">
          {buttons}
        </div>
      </div>
    </div>
  );
}

ButtonStructure.propTypes = {
  buttons: PropTypes.node,
};

export default ButtonStructure;
