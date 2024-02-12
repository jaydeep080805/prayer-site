import MobileNavbar from "./mobileNavbar/MobileNavbar";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";

function Navbar() {
  return (
    <nav id="navbar">
      <MobileNavbar />
      <DesktopNavbar />
    </nav>
  );
}

export default Navbar;
