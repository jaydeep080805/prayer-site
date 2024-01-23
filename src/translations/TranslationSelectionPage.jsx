import ButtonStructure from "../components/ButtonStructure";
import TranslationSelectionButtons from "./TranslationSelectionButtons";

function TranslationSelectionPage() {
  // passes through all the buttons to the button structure to reduce repetitiveness
  return <ButtonStructure buttons={<TranslationSelectionButtons />} />;
}

export default TranslationSelectionPage;
