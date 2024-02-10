import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SubMenu({ showMenu }) {
  return (
    <ul
      className={`transition-all duration-800 ${
        showMenu ? "block translate-x-0" : "hidden translate-x-60"
      }`}
    >
      <Link>test</Link>
      <li>test</li>
      <li>test</li>
      {/* {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })} */}
    </ul>
  );
}

// function to create a menu item component for mobile
function MobileMenuItem({ name, pageLink, clickFunc }) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    // use a div to set a default theme across all elements
    <div className="text-orange-400 text-xl">
      {/* set the link and the i tag in a flex container so they're in the same line and spaced nicely (I think) */}
      <div className="flex justify-evenly items-center">
        <Link onClick={clickFunc} to={pageLink} className="capitalize text-2xl">
          {name}
        </Link>

        {/* chevron icon to show dropdown menu */}
        <i
          // control the status of the submenu (dropdown menu)
          onClick={() => setShowSubMenu(!showSubMenu)}
          // use a right chevron and transition it 90 when the menu is open
          className={`fa-solid fa-chevron-right transition duration-200 ${
            showSubMenu && "rotate-90"
          }`}
        ></i>
      </div>

      {/* will show a submenu but only when the chevron has been clicked in the above <i> tag */}
      <SubMenu showMenu={showSubMenu} />
    </div>
  );
}

MobileMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

SubMenu.propTypes = {
  items: PropTypes.array.isRequired,
  showMenu: PropTypes.bool.isRequired,
};

export default MobileMenuItem;
