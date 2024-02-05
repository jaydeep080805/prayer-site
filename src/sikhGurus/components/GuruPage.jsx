import PropTypes from "prop-types";
import GuruImage from "./GuruImage";
import Table from "./Table";
import guruInformation from "../guruInformation/guruInformation";
import InformationText from "./InformationText";

function GuruPage({ image, guruName }) {
  // destructure the information
  const {
    name,
    guruship,
    birth,
    placeOfBirth,
    death,
    contributions,
    successor,
    earlyLife,
    travels,
    teachings,
    langar,
    succession,
    quotes,
  } = guruInformation[guruName];

  return (
    <div className="flex flex-col justify-center items-center pt-5 mx-2 rounded-xl lg:mx-40 xl:mx-60 dark:text-white dark:bg-gray-900">
      <div className="shadow-xl rounded-lg">
        {/* guru image */}
        <GuruImage imageSrc={image} />

        {/* table component using destructered information */}
        <Table
          name={name}
          guruship={guruship}
          birth={birth}
          placeOfBirth={placeOfBirth}
          death={death}
          contributions={contributions}
          successor={successor}
        />

        {/* all the information on the screen */}
        <InformationText heading={"early life"} text={earlyLife} />
        <InformationText heading={"Enlightenment and Travels"} text={travels} />
        <InformationText
          heading={"Teachings and Philosophy"}
          text={teachings}
        />
        <InformationText heading={"Langar"} text={langar} />
        <InformationText heading={"Succession and Legacy"} text={succession} />
        <InformationText
          heading={"Quotes"}
          text={quotes}
          isQuote={true}
          name={name}
        />
      </div>
    </div>
  );
}

GuruPage.propTypes = {
  image: PropTypes.string.isRequired,
  guruName: PropTypes.string.isRequired,
};

export default GuruPage;
