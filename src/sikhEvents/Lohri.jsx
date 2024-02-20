import PageLayout from "../components/PageLayout";
import ContentWithSubheading from "../components/ContentWithSubheading";

const lohriData = [
  {
    subheading: "Introduction",
    text: "Lohri marks the culmination of winter by welcoming the sun to the northern hemisphere. Celebrated predominantly by Punjabis across the globe on the 13th of January, Lohri is a time of joyous festivities, where communities gather to celebrate the end of winter's peak. While it is celebrated by Sikhs, Hindus, and others in Punjab, it holds a special place in the agrarian calendar, marking the beginning of the harvest season for winter crops.",
  },
  {
    subheading: "Historical and Cultural Significance",
    text: "The origins of Lohri are many and varied, with links to the Punjab region's agricultural way of life. It is traditionally associated with the harvest of the rabi crops. Celebrations include singing folk songs, dancing, and the iconic bonfire, which is symbolic of the festival. The fire is a sign of homage to the Sun God for gracing the earth with warmth, facilitating the harvest.",
  },
  {
    subheading: "Celebration Practices",
    text: "The festivity revolves around the bonfire, with people gathering around it to throw puffed rice, popcorn, and other munchies into the flames, singing popular Lohri songs. Dance forms like Bhangra and Giddha are performed around the fire, making the night vibrant and lively. Exchanging greetings and sweets, especially gajak and rewri, are also integral parts of the celebration.",
  },
  {
    subheading: "Lohri Specialties",
    text: "A feast is a significant part of Lohri celebrations, with traditional Punjabi dishes taking center stage. Sarson da Saag with Makki di Roti, complemented by a dollop of butter or ghee, is a must-have. The festival is particularly special for newly married couples and families with new babies, marking their first Lohri as a significant milestone.",
  },
  {
    subheading: "Global Celebrations",
    text: "With the Punjabi diaspora spread across the world, Lohri has become a global festival. Celebrations in countries like Canada, the UK, and the USA see large gatherings, where the essence of Lohri is kept alive through community bonfires, Punjabi folk music, and dance, bridging cultural gaps and bringing people together in festivity.",
  },
];

function Lohri() {
  return (
    <PageLayout heading={"lohri - A Punjabi Winter Solstice Celebration"}>
      {lohriData.map((section) => (
        <ContentWithSubheading key={section.subheading} {...section} />
      ))}
    </PageLayout>
  );
}

export default Lohri;
