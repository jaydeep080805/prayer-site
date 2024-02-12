import NavigationPageStructure from "../components/NavigationPageStructure";
import TranslationSelectionButtons from "./components/TranslationSelectionButtons";
import { BackButtonNavigationPage } from "../components/BackButtons";

function TranslationSelectionPage() {
  // passes through all the buttons to the button structure to reduce repetitiveness
  return (
    <>
      <BackButtonNavigationPage pageLink={"/"} />

      <NavigationPageStructure
        heading={"prayers"}
        buttons={<TranslationSelectionButtons />}
      />
    </>
  );
}

export default TranslationSelectionPage;
