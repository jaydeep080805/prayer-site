import SikhGurusNavigationButton from "./components/SikhGurusNavigationButton";
import NavigationPageStructure from "../components/NavigationPageStructure";
import { BackButtonNavigationPage } from "../components/BackButtons";

function SikhGurusNavigation() {
  return (
    <>
      <BackButtonNavigationPage pageLink={"/"} />

      <NavigationPageStructure
        heading={"sikh gurus"}
        buttons={<SikhGurusNavigationButton />}
      />
    </>
  );
}

export default SikhGurusNavigation;
