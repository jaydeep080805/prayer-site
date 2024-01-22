import TranslationButtons from "./TranslationButtons";

function Buttons() {
  return (
    <>
      <TranslationButtons
        name={"japji sahib (gurmuki)"}
        pageLink={"#"}
        subText={"japji sahib in pure Punjabi Gurmuki"}
      />
      <TranslationButtons
        name={"japji sahib (english)"}
        pageLink={"#"}
        subText={"japji sahib"}
      />
      <TranslationButtons
        name={"japji sahib (english with meaning)"}
        pageLink={"#"}
        subText={"japji sahib"}
      />

      <TranslationButtons name={"reahaas sahib (in gurmuki)"} pageLink={"#"} />
      <TranslationButtons name={"reahaas sahib (in english)"} pageLink={"#"} />
      <TranslationButtons
        name={"reahaas sahib (in english with meaning)"}
        pageLink={"#"}
      />
    </>
  );
}

export default Buttons;
