import SikhNavigationButtons from "./SikhNavigationButtons";
import NavigationPageStructure from "../components/NavigationPageStructure";

function SikhNavigationPage() {
  return (
    <NavigationPageStructure
      heading={"sikhism"}
      buttons={<SikhNavigationButtons />}
    />
  );
}

export default SikhNavigationPage;
