import Button from "../components/Button";

function SikhEventButtons() {
  return (
    <>
      <Button name={"Guru Nanak Gurpurab"} pageLink={"/guru-nanak-gurpurab"} />
      <Button name={"Vaisakhi"} pageLink={"/vaisakhi"} />
      <Button
        name={"Guru Gobind Singh Gurpurab"}
        pageLink={"/guru-gobind-singh-gurpurab"}
      />

      <Button name={"Lohri"} pageLink={"/lohri"} />
      <Button name={"Maghi"} pageLink={"/maghi"} />
      <Button name={"Hola Mohalla"} pageLink={"/hola-mohalla"} />

      <Button
        name={"Martyrdom Day of Guru Arjan Dev"}
        pageLink={"/day-guru-arjan"}
      />
      <Button
        name={"Martyrdom Day of Guru Tegh Bahadur"}
        pageLink={"/day-guru-tegh"}
      />
      <Button name={"Bandi Chhor Divas (Diwali)"} pageLink={"/diwali"} />

      <Button
        name={"Parkash Utsav of Guru Granth Sahib"}
        pageLink={"/parkash-utsav"}
      />
      <Button
        name={"Gurgaddi Divas Guru Har Rai Sahib Ji"}
        pageLink={"/gurdaddi-divas"}
      />
      <Button
        name={"Guru Har Krishan Sahib Ji's Martyrdom Day"}
        pageLink={"/guru-krishan-martyrdom"}
      />
    </>
  );
}

export default SikhEventButtons;
