import FooterMenuItem from "./FooterMenuItem";

function FooterMenu() {
  return (
    // make a column with adequate spacing and center text
    <div className="flex flex-col md:flex-row gap-6 text-center capitalize">
      <FooterMenuItem name={"home"} />
      <FooterMenuItem name={"about"} />
      <FooterMenuItem name={"contact"} />
      <FooterMenuItem name={"privacy"} />
    </div>
  );
}

export default FooterMenu;
