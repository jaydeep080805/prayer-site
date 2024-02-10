import PropTypes from "prop-types";
import MobileMenuItem from "./MobileMenuItem";

// the menu that holds all of the menuItems
// will go inside of the SlideMenu
function MobileMenu({ clickFunc }) {
  return (
    <div className="mt-20 text-center flex flex-col space-y-5">
      <MobileMenuItem clickFunc={clickFunc} pageLink={"./"} name={"home"} />
      <MobileMenuItem
        clickFunc={clickFunc}
        pageLink={"./translations"}
        name={"prayers"}
      />
      <MobileMenuItem
        clickFunc={clickFunc}
        pageLink={"./sikhism"}
        name={"sikhism"}
      />
      <MobileMenuItem
        clickFunc={clickFunc}
        pageLink={"./sikh-gurus"}
        name={"gurus"}
      />
      <MobileMenuItem
        clickFunc={clickFunc}
        pageLink={"./events"}
        name={"events"}
      />
      <MobileMenuItem
        clickFunc={clickFunc}
        pageLink={"./calendar"}
        name={"calendar"}
      />
    </div>
  );
}

MobileMenu.propTypes = {
  clickFunc: PropTypes.func.isRequired,
};

export default MobileMenu;
