import Button from "../components/Button";
import PropTypes from "prop-types";

function JapjiButtons({ onLanguageChange }) {
  // when one of the buttons is clicked, set the language to what the button is named
  function handleClick(buttonName) {
    onLanguageChange(buttonName);
  }

  return (
    <>
      <Button
        onClickFunc={() => handleClick("punjabi")}
        pageLink={"#"}
        name={"punjabi"}
      />
      <Button
        onClickFunc={() => handleClick("english")}
        pageLink={"#"}
        name={"english"}
      />
      <Button
        onClickFunc={() => handleClick("english meaning")}
        pageLink={"#"}
        name={"english meaning"}
      />
    </>
  );
}

JapjiButtons.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};

export default JapjiButtons;
