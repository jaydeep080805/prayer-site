import Button from "../components/Button";

// this is the file that holds all the buttons for the home page
function HomeScreenButtons() {
  return (
    // create a react fragment to hold all the buttons
    // this will be passed through to the ButtonStructure
    <>
      <Button name={"Prayers"} pageLink={"/translations"} />
      <Button name={"sikhism"} pageLink={"#"} />
      <Button name={"sikh gurus"} pageLink={"#"} />
      <Button name={"sikh calendar"} pageLink={"#"} />
      <Button name={"sikh calendar"} pageLink={"#"} />
      <Button name={"sikh calendar"} pageLink={"#"} />
      <Button name={"sikh calendar"} pageLink={"#"} />
    </>
  );
}

export default HomeScreenButtons;
