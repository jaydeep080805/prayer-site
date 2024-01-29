import { useState } from "react";
import Image from "../components/Image";
import Khanda from "../../assets/Khanda_Orange.jpg";
import MobileBars from "./components/MobileBars";
import Border from "../components/Border";
import SearchIcon from "../components/SearchIcon";
import SlideMenu from "./components/SlideMenu";
import BackgroundOverlay from "./components/BackgroundOverlay";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    // main container
    <div className="dark:bg-gray-800 w-screen md:hidden">
      {/* slide menu */}
      <SlideMenu isOpened={isOpen} clickFunc={handleClick} />

      {/* background blur */}
      <BackgroundOverlay isOpened={isOpen} clickFunc={handleClick} />

      {/* content container */}
      <div className="relative flex justify-between items-center py-2">
        {/* image container */}
        <Image image={Khanda} altText={"Sikh Khanda"} />

        {/* bars icon container */}
        <div className="z-40 w-24 flex items-center justify-evenly">
          {/* search icon */}
          <SearchIcon />
          {/* bar icon */}
          <MobileBars onClickFunc={handleClick} isOpened={isOpen} />
        </div>
      </div>

      {/* bottom orange border */}
      <Border />
    </div>
  );
}

export default MobileNavbar;
