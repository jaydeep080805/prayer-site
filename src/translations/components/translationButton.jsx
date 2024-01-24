import Button from "../../components/Button";
import PropTypes from "prop-types";

function TranslationButton({ onLanguageChange }) {
  // when one of the buttons is clicked, set the language to what the button is named
  function handleClick(buttonName) {
    onLanguageChange(buttonName);
  }

  return (
    <>
      <Button onClickFunc={() => handleClick("punjabi")} name={"punjabi"} />
      <Button onClickFunc={() => handleClick("english")} name={"english"} />
      <Button
        onClickFunc={() => handleClick("english meaning")}
        name={"english meaning"}
      />
    </>
  );
}

TranslationButton.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};

export default TranslationButton;
