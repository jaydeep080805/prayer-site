import ButtonStructure from "../components/ButtonStructure";
import SikhNavigationButtons from "./SikhNavigationButtons";

function SikhNavigationPage() {
  return (
    <div>
      <ButtonStructure buttons={<SikhNavigationButtons />} />
    </div>
  );
}

export default SikhNavigationPage;
