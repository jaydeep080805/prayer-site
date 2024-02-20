import PageLayout from "../components/PageLayout";
import ContentWithSubheading from "../components/ContentWithSubheading";

const holaMohallaData = [
  {
    subheading: "Introduction",
    text: "Hola Mohalla, also known as Hola, is a Sikh festival that takes place on the first month of Chet in the Nanakshahi calendar, which corresponds to March in the Gregorian calendar. Instituted by Guru Gobind Singh Ji, the festival is celebrated with great fervor at Anandpur Sahib, Punjab, and signifies the martial spirit of the Sikhs through displays of traditional warfare, kirtan, and poetry.",
  },
  {
    subheading: "Historical Background",
    text: "The festival was established by Guru Gobind Singh Ji as a day for Sikhs to practice their military exercises and display their physical strength. It was initiated in the year 1701, against the backdrop of increasing tension with the Mughal empire and the need to prepare the Sikh community for defense. Hola Mohalla reflects the Guru's vision of a community ready to uphold righteousness and justice, even through martial means.",
  },
  {
    subheading: "Celebration Practices",
    text: "Hola Mohalla is renowned for its magnificent processions, mock battles (Gatka), exhibitions of weaponry, archery, and horse riding. The festival is not just a display of martial skills but also a celebration of Sikh culture, with devotional music, poetry, and the widespread sharing of communal meals (Langar). It's a time when the Sikh community reaffirms its bonds of brotherhood, courage, and spiritual devotion.",
  },
  {
    subheading: "Significance of the Festival",
    text: "Hola Mohalla goes beyond mere celebration; it is a reaffirmation of the Sikh ethos of valor, discipline, and spirituality. The festival pays homage to the warriors of Sikh history while encouraging the community to remember and uphold the values taught by Guru Gobind Singh Ji. It is a vivid embodiment of the Sikh principle that spiritual devotion and martial prowess should go hand in hand.",
  },
  {
    subheading: "Global Observations",
    text: "While the grandest celebration takes place in Anandpur Sahib, Hola Mohalla is observed by Sikh communities around the world. In cities across India and in countries with significant Sikh populations, the festival is marked by parades, martial arts demonstrations, singing, and the sharing of meals, showcasing the global unity and vibrant culture of the Sikh diaspora.",
  },
];

function HolaMohalla() {
  return (
    <PageLayout
      heading={"Hola Mohalla - The Festival of Courage and Brotherhood"}
    >
      {holaMohallaData.map((section) => (
        <ContentWithSubheading key={section.subheading} {...section} />
      ))}
    </PageLayout>
  );
}

export default HolaMohalla;
