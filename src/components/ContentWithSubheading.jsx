import PropTypes from "prop-types";
import Subheading from "./Subheading";

function ContentWithSubheading({ subheading, text }) {
  return (
    // sets spacing for elements
    <div className="space-y-2 lg:space-y-1">
      {/* sets the subheading */}
      <Subheading text={subheading} />
      {/* wrap the text in a div so it spaces correctly */}
      <div className="text-lg lg:text-xl">{text}</div>
    </div>
  );
}

ContentWithSubheading.propTypes = {
  subheading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContentWithSubheading;
