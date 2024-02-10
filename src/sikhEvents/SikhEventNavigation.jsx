import ButtonStructure from "../components/ButtonStructure";
import SikhEventButtons from "./SikhEventButtons";

function SikhEventNavigation() {
  return (
    <>
      <ButtonStructure buttons={<SikhEventButtons />} />
    </>
  );
}

export default SikhEventNavigation;
