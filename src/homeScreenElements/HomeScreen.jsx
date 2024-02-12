import HomeScreenButtons from "./HomeScreenButtons";
import ButtonStructure from "../components/ButtonStructure";
import Card from "../components/Card";
import Heading from "../components/Heading";

function HomeScreen() {
  // passes through the buttons into the button structure
  return (
    <div className="flex flex-col items-center text-center justify-evenly gap-5 mt-3">
      <Heading text="welcome to sikh essence" />

      <ButtonStructure buttons={<HomeScreenButtons />} />

      <br />

      <div className="mt-2 flex flex-col items-center">
        <h2 className="font-heading text-4xl mb-4 mx-10 text-center font-semibold">
          Not Sure Where To Start?
        </h2>
        <div className="border border-b border-orange-400 w-40 self-center mb-8 lg:w-80"></div>

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
    </div>
  );
}

export default HomeScreen;
