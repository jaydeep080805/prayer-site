import MobileNavbar from "./mobileNavbar/MobileNavbar";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";

function Navbar() {
  return (
    <div>
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
}

export default Navbar;
