import FooterMenuItem from "./FooterMenuItem";

function FooterMenu() {
  return (
    // make a column with adequate spacing and center text
    <div className="flex flex-col md:flex-row gap-6 text-center capitalize">
      <FooterMenuItem name={"home"} pageLink={"./"} />
      <FooterMenuItem name={"about"} pageLink={"/about"} />
      <FooterMenuItem name={"contact"} pageLink={"/contact"} />
      <FooterMenuItem name={"privacy"} pageLink={"/privacy-policy"} />
    </div>
  );
  
}
export default FooterMenu;
