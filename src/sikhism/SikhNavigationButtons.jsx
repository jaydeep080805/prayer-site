import Button from "../components/Button";

function SikhNavigationButtons() {
  return (
    <>
      <Button pageLink={"./about-sikhism"} name={"about sikhism"} />
      <Button pageLink={"./pillars"} name={"pillars of sikhism"} />
      <Button pageLink={"./fivek"} name={"five k's"} />

      <Button pageLink={"./turban"} name={"significance of turban"} />
      <Button pageLink={"./granth-sahib"} name={"guru granth sahib"} />
      <Button pageLink={"./faq"} name={"questions about sikhism"} />
    </>
  );
}

export default SikhNavigationButtons;
