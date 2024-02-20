import HomeScreenButtons from "./HomeScreenButtons";
import ButtonStructure from "../components/ButtonStructure";
import Card from "../components/Card";
import Heading from "../components/Heading";

// data for the cards shown at the bottom
const cardData = [
  {
    pageLink: "/fivek",
    title: "five k's",
    text: "Learn the 5 items that devoted sikhs should be wearing at all times",
  },

  {
    pageLink: "/calendar",
    title: "calendar",
    text: "check the list of sikh festivals, events and holidays",
  },

  {
    pageLink: "/japji-sahib",
    title: "japji sahib",
    text: "have a read of the first prayer sikhs should read when waking up",
  },
];

function HomeScreen() {
  // passes through the buttons into the button structure
  return (
    <div className="flex flex-col items-center text-center justify-evenly gap-5 mt-3">
      <Heading text="welcome to sikh essence" />

      {/* render the buttons */}
      <ButtonStructure buttons={<HomeScreenButtons />} />

      <br />

      {/* text */}
      <div className="mt-2 flex flex-col items-center">
        <h2 className="font-heading text-4xl mb-4 mx-10 text-center font-semibold">
          Not Sure Where To Start?
        </h2>
        <div className="border border-b border-orange-400 w-40 self-center mb-8 lg:w-80"></div>

        {/* loop through the cards */}
        <div className="flex flex-col w-80 gap-10 lg:flex-row lg:w-full lg:justify-center">
          {cardData.map((cardInfo, index) => {
            return (
              <Card
                key={index}
                pageLink={cardInfo.pageLink}
                title={cardInfo.title}
                text={cardInfo.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
