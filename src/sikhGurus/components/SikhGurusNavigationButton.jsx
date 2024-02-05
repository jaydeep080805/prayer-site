import Button from "../../components/Button";

function SikhGurusNavigationButton() {
  return (
    <>
      <Button pageLink={"/guru-nanak"} name={"Sri Guru Nanak Dev Ji"} />
      <Button pageLink={"/guru-angad"} name={"Sri Guru Angad Dev Ji"} />
      <Button pageLink={"/guru-amar"} name={"Sri Guru Amar Das ji"} />

      <Button pageLink={"/guru-ramdas"} name={"Sri Guru Ram Das Ji"} />
      <Button pageLink={"/guru-arjan"} name={"Sri Guru Arjan Dev Ji"} />
      <Button pageLink={"/guru-hargobind"} name={"Sri Guru Hargobind Ji"} />

      <Button pageLink={"/guru-harrai"} name={"Sri Guru Har Rai Ji"} />
      <Button
        pageLink={"/guru-harkrishan"}
        name={"Sri Guru Harkrishan Sahib Ji"}
      />
      <Button pageLink={"/guru-tegh"} name={"Sri Guru Teg Bahadur Ji"} />

      <Button pageLink={"/guru-gobind"} name={"Sri Guru Gobind Singh Ji"} />
    </>
  );
}

export default SikhGurusNavigationButton;
