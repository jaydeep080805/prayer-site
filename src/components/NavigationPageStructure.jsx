import PropTypes from "prop-types";
import Heading from "./Heading";
import ButtonStructure from "./ButtonStructure";

function NavigationPageStructure({ heading, buttons }) {
  return (
    <div className="flex flex-col mt-2 gap-5 items-center">
      <Heading text={heading} />
      <ButtonStructure buttons={buttons} />
    </div>
  );
}

NavigationPageStructure.propTypes = {
  heading: PropTypes.string.isRequired,
  buttons: PropTypes.node.isRequired,
};

export default NavigationPageStructure;
