import PageLayout from "../components/PageLayout";
import ContentWithSubheading from "../components/ContentWithSubheading";

const gurdaddiDivasData = [
  {
    subheading: "Introduction",
    text: "Gurdaddi Divas of Guru Har Rai Sahib Ji commemorates the day when Guru Har Rai Sahib Ji was anointed as the seventh Sikh Guru, succeeding his grandfather, Guru Hargobind Sahib Ji. Known for his deep compassion and dedication to preserving nature, Guru Har Rai Sahib Ji's Gurdaddi Divas is a momentous occasion, reflecting on the values of kindness, healing, and environmental stewardship within Sikhism.",
  },
  {
    subheading: "Historical Background",
    text: "Guru Har Rai Sahib Ji was born on January 16, 1630, and became Guru on March 8, 1644. Throughout his Guruship, he maintained the Sikh military tradition established by his grandfather while emphasizing the importance of peace and compassion. His tenure as Guru was marked by efforts to aid the sick and needy, including the establishment of herbal gardens and dispensaries.",
  },
  {
    subheading: "Significance of the Festival",
    text: "The Gurdaddi Divas of Guru Har Rai Sahib Ji is not only a celebration of his ascension to Guruship but also a day to honor his contributions to Sikhism’s humanitarian and ecological teachings. It serves as a reminder of the Guru’s gentle nature and his belief in the sanctity of all life forms.",
  },
  {
    subheading: "Celebration Practices",
    text: "This day is observed with prayer meetings, kirtan, and readings from the Guru Granth Sahib Ji in Gurdwaras across the world. Devotees reflect on the life and teachings of Guru Har Rai Sahib Ji, particularly his messages of compassion and living in harmony with nature.",
  },
  {
    subheading: "Guru Har Rai Sahib Ji’s Teachings",
    text: "Guru Har Rai Sahib Ji's teachings emphasize compassion for humanity and the animal kingdom, the importance of maintaining balance with nature, and the role of a Sikh to be a guardian of the earth. His legacy inspires Sikhs to practice kindness, serve the community, and protect the environment.",
  },
];

function GurdaddiDivas() {
  return (
    <PageLayout heading={"Gurdaddi Divas of Guru Har Rai Sahib Ji"}>
      {gurdaddiDivasData.map((section) => (
        <ContentWithSubheading key={section.subheading} {...section} />
      ))}
    </PageLayout>
  );
}

export default GurdaddiDivas;
