import SikhGurusNavigationButton from "./components/SikhGurusNavigationButton";
import NavigationPageStructure from "../components/NavigationPageStructure";

function SikhGurusNavigation() {
  return (
    <NavigationPageStructure
      heading={"sikh gurus"}
      buttons={<SikhGurusNavigationButton />}
    />
  );
}

export default SikhGurusNavigation;
