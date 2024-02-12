import Button from "../components/Button";

// this is the file that holds all the buttons for the home page
function HomeScreenButtons() {
  return (
    // create a react fragment to hold all the buttons
    // this will be passed through to the ButtonStructure
    <>
      <Button name={"sikhism"} pageLink={"/sikhism"} />
      <Button name={"Prayers"} pageLink={"/translations"} />
      <Button name={"sikh gurus"} pageLink={"/sikh-gurus"} />
      <Button name={"sikh calendar"} pageLink={"/calendar"} />
      <Button name={"sikh events"} pageLink={"/events"} />
    </>
  );
}

export default HomeScreenButtons;
