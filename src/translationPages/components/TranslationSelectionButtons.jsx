import Button from "../../components/Button";

function TranslationSelectionButtons() {
  return (
    <>
      <Button pageLink={"/japji-sahib"} name={"japji sahib"} />
      <Button pageLink={"/raehraas-sahib"} name={"raehraas sahib"} />
      <Button pageLink={"/ardaas-sahib"} name={"ardaas sahib"} />
      <Button pageLink={"./sohilaa-sahib"} name={"sohilaa"} />

      <Button pageLink={"#"} name={"japji sahib"} />
      <Button pageLink={"#"} name={"raehraas sahib"} />
      <Button pageLink={"#"} name={"sohilla"} />

      <Button pageLink={"#"} name={"japji sahib"} />
      <Button pageLink={"#"} name={"raehraas sahib"} />
      <Button pageLink={"#"} name={"sohilla"} />
    </>
  );
}

export default TranslationSelectionButtons;
