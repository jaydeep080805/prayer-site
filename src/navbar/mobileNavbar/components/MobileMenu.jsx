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
        itemList={[
          ["japji sahib", "/japji-sahib"],
          ["raehraas sahib", "/raehraas-sahib"],
          ["ardaas", "/ardaas-sahib"],
          ["sohilaa sahib", "/sohilaa-sahib"],
          ["jaap sahib", "/jaap-sahib"],
        ]}
      />
      <MobileMenuItem
        clickFunc={clickFunc}
        pageLink={"./sikhism"}
        name={"sikhism"}
        itemList={[
          ["about sikhism", "/about-sikhism"],
          ["pillars of sikhism", "/pillars"],
          ["five k's", "/fivek"],
          ["five thief's", "/five-thiefs"],
          ["turban", "/turban"],
          ["guru granth sahib", "/granth-sahib"],
          ["questions", "/faq"],
        ]}
      />
      <MobileMenuItem
        clickFunc={clickFunc}
        pageLink={"./sikh-gurus"}
        name={"gurus"}
        itemList={[
          ["nanak", "/guru-nanak"],
          ["angad", "/guru-angad"],
          ["amar", "/guru-amar"],
          ["ram das", "/guru-ramdas"],
          ["arjan", "/guru-arjan"],
          ["hargobind", "/guru-hargobind"],
          ["harrai", "/guru-harrai"],
          ["harkrishan", "/guru-harkrishan"],
          ["tegh", "/guru-tegh"],
          ["gobind", "/guru-gobind"],
        ]}
      />
      <MobileMenuItem
        clickFunc={clickFunc}
        pageLink={"./events"}
        name={"events"}
        itemList={[
          ["nanak-gurpurab", "/guru-nanak-gurpurab"],
          ["gobind-gurpurab", "/gobind-singh-gurpurab"],
          ["lohri", "/lohri"],
          ["maghi", "/maghi"],
          ["hola-mohalla", "/hola-mohalla"],
          ["day of guru arjan", "/day-guru-arjan"],
          ["day of guru tegh", "/day-guru-tegh"],
          ["diwali", "/diwali"],
          ["parkash utsav", "/parkash-utsav"],
          ["gurdaddi divas", "/gurdaddi-divas"],
          ["guru krishan martyrdom", "/guru-krishan-martyrdom"],
        ]}
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
