import HomeScreenButtons from "./HomeScreenButtons";
import ButtonStructure from "../components/ButtonStructure";
import Card from "../components/Card";

function HomeScreen() {
  // passes through the buttons into the button structure
  return (
    <div className="flex flex-col items-center justify-evenly">
      <ButtonStructure buttons={<HomeScreenButtons />} />

      <br />
      <br />
      <br />
      <br />

      <h2 className="font-heading text-4xl mb-4 mx-10 text-center font-semibold">
        Not Sure Where To Start?
      </h2>
      <div className="border border-b border-orange-400 w-40 mb-14 lg:w-80"></div>

      <div className="flex flex-col w-80 gap-10 lg:flex-row lg:w-full lg:justify-center">
        <Card
          pageLink="/fivek"
          title="five k's"
          text="Learn the 5 items that devoted sikhs should be wearing at all times"
        />

        <Card
          pageLink="/calendar"
          title="calendar"
          text="check the list of sikh festivals, events and holidays"
        />

        <Card
          pageLink="/japji-sahib"
          title="japji sahib"
          text="have a read of the first prayer sikhs should read when waking up"
        />
      </div>
    </div>
  );
}

export default HomeScreen;
