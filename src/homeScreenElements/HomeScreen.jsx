import HomeScreenButtons from "./HomeScreenButtons";
import ButtonStructure from "../components/ButtonStructure";

function HomeScreen() {
  // passes through the buttons into the button structure
  return <ButtonStructure buttons={<HomeScreenButtons />} />;
}

export default HomeScreen;
