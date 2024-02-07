import PropTypes from "prop-types";
import TranslationButton from "./TranslationButton";
import ButtonStructure from "../../components/ButtonStructure";

function LanguageSwitcher({ onLanguageChange }) {
  return (
    // adds the language switcher buttons to the page
    <div className="mb-10">
      <ButtonStructure
        buttons={<TranslationButton onLanguageChange={onLanguageChange} />}
      />
    </div>
  );
}

LanguageSwitcher.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
