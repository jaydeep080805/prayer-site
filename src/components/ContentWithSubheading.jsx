import PropTypes from "prop-types";
import Subheading from "./Subheading";

function ContentWithSubheading({ subheading, text, listItems, linkText }) {
  return (
    // sets spacing for elements
    <div className="space-y-2 lg:space-y-1">
      {/* sets the subheading */}
      <Subheading text={subheading} />
      {/* wrap the text in a div so it spaces correctly */}
      <div className={`text-lg lg:text-xl ${listItems && "pb-3"}`}>
        {text}

        {/* check if there is a linktext variable */}
        {linkText ? (
          // create the a tag with the link
          <a className="text-orange-400" href={`mailto:${linkText}`}>
            {linkText}.
          </a>
        ) : (
          ""
        )}
      </div>

      <ul className="space-y-3">
        {/* check if there are list items */}
        {listItems &&
          // use map to loop through the list items
          listItems.map((item, index) => {
            // split the item at the colon, separating the first part and the rest
            const parts = item.split(":");
            const spanText = parts[0];

            // Rejoin the rest and trim any leading space
            const restOfItem = parts.slice(1).join(":").trim();

            return (
              <li key={index}>
                {/* render the span text with the rest of the text */}
                <span className="font-bold">{spanText}: </span>
                {restOfItem}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

ContentWithSubheading.propTypes = {
  subheading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  listItems: PropTypes.array,
  linkText: PropTypes.string,
};

export default ContentWithSubheading;
