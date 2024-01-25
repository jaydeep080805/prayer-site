import ButtonStructure from "../components/ButtonStructure";
import TranslationSelectionButtons from "./components/TranslationSelectionButtons";

function TranslationSelectionPage() {
  // passes through all the buttons to the button structure to reduce repetitiveness
  return (
    <div className="h-screen">
      <ButtonStructure buttons={<TranslationSelectionButtons />} />
    </div>
  );
}

export default TranslationSelectionPage;
