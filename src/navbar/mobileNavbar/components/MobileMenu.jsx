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
        pageLink={"./japji-sahib"}
        name={"japji sahib"}
      />
      <MobileMenuItem
        clickFunc={clickFunc}
        pageLink={"./raehraas-sahib"}
        name={"raehraas sahib"}
      />
      <MobileMenuItem clickFunc={clickFunc} pageLink={""} name={"ardaas"} />
      <MobileMenuItem clickFunc={clickFunc} pageLink={""} name={"sohilaa"} />
    </div>
  );
}

MobileMenu.propTypes = {
  clickFunc: PropTypes.func.isRequired,
};

export default MobileMenu;
