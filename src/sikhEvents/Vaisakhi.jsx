import PageLayout from "../components/PageLayout";
import Image from "../components/Image";
import pic from "../assets/events/vaisakhi.jpg";
import ContentWithSubheading from "../components/ContentWithSubheading";

const vaisakhiData = [
  {
    subheading: "Introduction",
    text: "Vaisakhi, also known as Baisakhi, is one of the most important dates in the Sikh calendar, commemorating the founding of the Khalsa Panth by Guru Gobind Singh Ji in 1699. It marks the Sikh New Year and celebrates the spring harvest. Vaisakhi gathers a profound religious significance alongside its cultural festivities, reflecting the rich heritage of the Sikh community.",
  },
  {
    subheading: "Historical Background",
    text: "The festival of Vaisakhi dates back to April 13, 1699, when Guru Gobind Singh Ji established the Khalsa Panth at Anandpur Sahib. This day is remembered for the Guru's call to Sikhs to sacrifice for their faith, leading to the baptism of the Panj Pyare (the Five Beloved Ones), who would become the first members of the Khalsa. The Khalsa was created to uphold high moral standards and defend religious freedom.",
  },
  {
    subheading: "Significance of the Festival",
    text: "Vaisakhi holds dual significance for Sikhs: it is both a religious and cultural festival. Religiously, it celebrates the creation of the Khalsa, a community of committed Sikhs who are ready to sacrifice their lives for their faith. Culturally, it marks the start of the harvest season, symbolizing prosperity, and renewal. It's a day of thanksgiving and joy, where Sikhs reflect on their identity and commitments.",
  },
  {
    subheading: "Celebration Practices",
    text: "Vaisakhi is celebrated with great fervor across the globe. The day typically begins with prayers at the Gurdwara, followed by processions (Nagar Kirtan) led by the Panj Pyare. The festivities include singing, dancing (Bhangra and Giddha), wearing of festive attire, and sharing of meals through Langar. Communities also hold fairs and gatherings where stories of the Khalsa’s formation are recounted.",
  },
  {
    subheading: "Global Observations",
    text: "While Vaisakhi has its roots in Punjab, India, the diaspora has taken the celebration worldwide, from Canada to the United Kingdom, where large Sikh communities gather to mark the occasion. Each country adds its own flavor to the celebration, but the essence of Vaisakhi remains the same: unity, gratitude, and devotion.",
  },
  {
    subheading: "Reflections on the Khalsa",
    text: "The formation of the Khalsa by Guru Gobind Singh Ji was a pivotal moment in Sikh history, emphasizing the virtues of courage, equality, and service. Vaisakhi serves as a reminder to Sikhs to live up to these ideals, fostering a sense of pride and belonging to a community that stands for justice and righteousness.",
  },
];

function Vaisakhi() {
  return (
    <PageLayout
      heading={"vaisakhi - The Sikh New Year and Formation of the Khalsa"}
    >
      <Image imageSrc={pic} isEvent={true} />

      {vaisakhiData.map((section) => (
        <ContentWithSubheading key={section.subheading} {...section} />
      ))}
    </PageLayout>
  );
}

export default Vaisakhi;
