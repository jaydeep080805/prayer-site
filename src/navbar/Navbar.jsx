import MobileNavbar from "./mobileNavbar/MobileNavbar";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";

function Navbar() {
  return (
    <nav>
      <MobileNavbar />
      <DesktopNavbar />
    </nav>
  );
}

export default Navbar;
