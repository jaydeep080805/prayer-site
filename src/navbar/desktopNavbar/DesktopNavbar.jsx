import Image from "../components/Image";
import Khanda from "../../assets/Khanda_Orange.jpg";
import Menu from "./components/Menu";
import Border from "../components/Border";

function DesktopNavbar() {
  return (
    <div className="hidden bg-white md:flex flex-col">
      <div className="flex justify-center py-4 space-x-80">
        {/* left side */}
        <Image image={Khanda} alt={"Sikh Khanda"} className="bg-transparent	" />

        {/* right side */}
        <Menu />
      </div>

      <Border />
    </div>
  );
}

export default DesktopNavbar;
