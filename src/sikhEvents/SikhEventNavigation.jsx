import SikhEventButtons from "./SikhEventButtons";
import NavigationPageStructure from "../components/NavigationPageStructure";

function SikhEventNavigation() {
  return (
    <NavigationPageStructure
      heading="sikh events"
      buttons={<SikhEventButtons />}
    />
  );
}

export default SikhEventNavigation;
