// import { useState } from "react";
import Image from "../components/Image";
import Khanda from "../../assets/Khanda_Orange.jpg";
import MobileBars from "./components/MobileBars";
import Border from "../components/Border";
import SearchIcon from "../components/SearchIcon";

function MobileNavbar() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    // main container
    <div className="w-screen md:hidden">
      {/* content container */}
      <div className="flex justify-between items-center py-2">
        {/* image container */}
        <div>
          <Image image={Khanda} altText={"Sikh Khanda"} />
        </div>
        {/* bars icon container */}
        <div className="w-24 flex items-center justify-evenly">
          {/* search icon */}
          <SearchIcon />
          {/* bar icon */}
          <MobileBars />
        </div>
      </div>

      {/* bottom orange border */}
      <Border />
    </div>
  );
}

export default MobileNavbar;
