import PropTypes from "prop-types";

function InformationText({ heading, text, isQuote = false, name }) {
  return (
    // adds margin around the side and top to create space
    <div className="mx-3 my-20 lg:my-10">
      {/* heading config */}
      <div className="text-4xl underline capitalize font-heading font-bold">
        {heading}
      </div>

      {/* check if it is a quote and render the correct info */}
      <div className="font-main">
        {isQuote ? (
          <div>
            some of {name}&apos;s quotes are:
            {text.map((line) => {
              return <div key={line}>{line}</div>;
            })}
          </div>
        ) : (
          // else just return the text
          text
        )}
      </div>
    </div>
  );
}

InformationText.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isQuote: PropTypes.bool,
  name: PropTypes.string,
};

export default InformationText;
