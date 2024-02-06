import Button from "../../components/Button";

function TranslationSelectionButtons() {
  return (
    <>
      <Button pageLink={"/japji-sahib"} name={"japji sahib"} />
      <Button pageLink={"/raehraas-sahib"} name={"raehraas sahib"} />
      <Button pageLink={"/ardaas-sahib"} name={"ardaas sahib"} />
      <Button pageLink={"/sohilaa-sahib"} name={"sohilaa"} />

      <Button pageLink={"/jaap-sahib"} name={"jaap sahib"} />
    </>
  );
}

export default TranslationSelectionButtons;
