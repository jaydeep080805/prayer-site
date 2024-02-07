import ButtonStructure from "../components/ButtonStructure";
import SikhNavigationButtons from "./SikhNavigationButtons";

function SikhNavigationPage() {
  return (
    <div className="h-screen">
      <ButtonStructure buttons={<SikhNavigationButtons />} />
    </div>
  );
}

export default SikhNavigationPage;  
