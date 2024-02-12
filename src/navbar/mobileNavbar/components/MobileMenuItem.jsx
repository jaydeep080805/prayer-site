import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

// items should be an array of objects with the name and the pagelink
export function SubMenu({ showMenu, setShowMenu, items, clickFunc }) {
  return (
    <ul
      className={`flex flex-col space-y-1 mt-2 capitalize ${
        showMenu ? "block" : "hidden"
      }`}
    >
      {/* only if items is true (has been passed through) */}
      {items &&
        items.map((item, index) => {
          return (
            // index 0 should be the name
            // index 1 should be the link
            <Link
              // page link
              to={item[1]}
              key={index}
              // when a link is clicked
              onClick={() => {
                // close the menu
                clickFunc();
                // set the submenu to close
                setShowMenu(!showMenu);
              }}
              className="text-lg"
            >
              {/* menu name */}
              {item[0]}
            </Link>
          );
        })}
    </ul>
  );
}

// function to create a menu item component for mobile
function MobileMenuItem({
  name,
  pageLink,
  clickFunc,
  itemList,
  isHomeLink = false,
}) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    // use a div to set a default theme across all elements
    <div className="text-orange-400 text-xl font-bold">
      {/* set the link and the i tag in a flex container so they're in the same line and spaced nicely (I think) */}
      <div className="flex justify-evenly items-center">
        <Link onClick={clickFunc} to={pageLink} className="capitalize text-2xl">
          {name}
        </Link>

        {!isHomeLink && (
          // {/* chevron icon to show dropdown menu */}
          <i
            // control the status of the submenu (dropdown menu)
            onClick={() => setShowSubMenu(!showSubMenu)}
            // use a right chevron and transition it 90 when the menu is open
            className={`fa-solid fa-chevron-right px-5 py-1 transition duration-200 ${
              showSubMenu && "rotate-90"
            }`}
          ></i>
        )}
      </div>

      {/* will show a submenu but only when the chevron has been clicked in the above <i> tag */}
      <SubMenu
        showMenu={showSubMenu}
        setShowMenu={setShowSubMenu}
        items={itemList}
        clickFunc={clickFunc}
      />
    </div>
  );
}

MobileMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
  itemList: PropTypes.array,
  isHomeLink: PropTypes.bool,
};

SubMenu.propTypes = {
  items: PropTypes.array,
  setShowMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default MobileMenuItem;
