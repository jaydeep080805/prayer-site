import SikhNavigationButtons from "./SikhNavigationButtons";
import NavigationPageStructure from "../components/NavigationPageStructure";
import { BackButtonNavigationPage } from "../components/BackButtons";

function SikhNavigationPage() {
  return (
    <>
      <BackButtonNavigationPage pageLink={"/"} />

      <NavigationPageStructure
        heading={"sikhism"}
        buttons={<SikhNavigationButtons />}
      />
    </>
  );
}

export default SikhNavigationPage;
