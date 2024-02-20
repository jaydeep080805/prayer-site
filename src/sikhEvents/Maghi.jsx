import PageLayout from "../components/PageLayout";
import ContentWithSubheading from "../components/ContentWithSubheading";

const maghiData = [
  {
    subheading: "Introduction",
    text: "Maghi, observed immediately after the festival of Lohri, is one of the most significant Sikh festivals commemorating the sacrifice of the Forty Immortals (Chali Mukte) who fought alongside Guru Gobind Singh Ji against the Mughal forces. Held on the first day of the month of Magh in the Sikh calendar, it marks a day of reflection, reverence, and remembrance.",
  },
  {
    subheading: "Historical Background",
    text: "The significance of Maghi dates back to the Battle of Muktsar in 1705, where the Forty Immortals, who had previously deserted Guru Gobind Singh Ji, returned to fight by his side and attained martyrdom. This day honors their bravery and their ultimate sacrifice for their faith and principles.",
  },
  {
    subheading: "Significance of the Festival",
    text: "Maghi is a time for Sikhs to pay homage to the martyrs by visiting Gurdwaras and participating in community services. The festival serves as a reminder of the valor, loyalty, and the spiritual reawakening of the devotees who laid down their lives for a righteous cause.",
  },
  {
    subheading: "Celebration Practices",
    text: "The main commemoration takes place at Muktsar, Punjab, with the Maghi Mela, where Sikhs gather in large numbers to take a holy dip in the sacred waters of Muktsar Sahib. The day begins with the reading of the Guru Granth Sahib, followed by kirtans and langars served at Gurdwaras. Families remember the martyrs through prayers and by sharing stories of their courage and devotion.",
  },
  {
    subheading: "Reflections and Teachings",
    text: "Maghi offers a moment to reflect on one’s faith, the importance of loyalty, and the spirit of sacrifice. It reinforces the teachings of Guru Gobind Singh Ji about standing firm in the face of adversity and upholding the values of Sikhism with honor and dignity.",
  },
];

function Maghi() {
  return (
    <PageLayout heading={"maghi - The Martyrdom of the Forty Immortals"}>
      {maghiData.map((section) => (
        <ContentWithSubheading key={section.subheading} {...section} />
      ))}
    </PageLayout>
  );
}

export default Maghi;
