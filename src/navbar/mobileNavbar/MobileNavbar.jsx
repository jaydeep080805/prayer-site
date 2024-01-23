import { useState } from "react";

function MobileNavbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => {
    return setMenuIsOpen(!menuIsOpen);
  };

  return (
    // main navbar container
    <div className="flex flex-col gap-2 transition-all duration-200 ease-in-out w-screen py-2 px-2 bg-black text-white md:hidden">
      <i
        onClick={handleMenuClick}
        className={`text-2xl ${
          menuIsOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars "
        }`}
      ></i>

      <div className={`capitalize ${menuIsOpen ? "flex flex-col" : "hidden"}`}>
        <p>Japuji sahib</p>
        <p>raehraas sahib</p>
        <p>ardaas</p>
        <p>sohilaa</p>
      </div>
    </div>
  );
}

export default MobileNavbar;
