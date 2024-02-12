import SikhEventButtons from "./SikhEventButtons";
import NavigationPageStructure from "../components/NavigationPageStructure";
import { BackButtonNavigationPage } from "../components/BackButtons";

function SikhEventNavigation() {
  return (
    <>
      <BackButtonNavigationPage pageLink={"/"} />

      <NavigationPageStructure
        heading="sikh events"
        buttons={<SikhEventButtons />}
      />
    </>
  );
}

export default SikhEventNavigation;
