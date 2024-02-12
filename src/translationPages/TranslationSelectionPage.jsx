import NavigationPageStructure from "../components/NavigationPageStructure";
import TranslationSelectionButtons from "./components/TranslationSelectionButtons";

function TranslationSelectionPage() {
  // passes through all the buttons to the button structure to reduce repetitiveness
  return (
    <NavigationPageStructure
      heading={"prayers"}
      buttons={<TranslationSelectionButtons />}
    />
  );
}

export default TranslationSelectionPage;
