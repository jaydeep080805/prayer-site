// import { useState } from "react";
import Image from "../desktopNavbar/components/Image";
import Khanda from "../../assets/Khanda_Orange.jpg";

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
        <div className="mr-5">
          {/* bar icon */}
          <i className="fa fa-bars text-3xl text-orange-400"></i>
        </div>
      </div>

      {/* bottom orange border */}
      <div className="border border-b border-orange-400"></div>
    </div>
  );
}

export default MobileNavbar;
