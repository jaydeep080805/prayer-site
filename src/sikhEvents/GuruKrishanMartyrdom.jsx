import PageLayout from "../components/PageLayout";
import ContentWithSubheading from "../components/ContentWithSubheading";

const guruKrishanMartyrdomData = [
  {
    subheading: "Introduction",
    text: "The Martyrdom Day of Guru Har Krishan Ji commemorates the life and legacy of the eighth Sikh Guru, known for his wisdom, compassion, and healing touch. Guru Har Krishan Ji ascended to the Guruship at the tender age of five and served until his untimely death in 1664 at the age of eight. His martyrdom is observed with reverence and serves as a reminder of his selfless service and dedication to the welfare of humanity.",
  },
  {
    subheading: "Historical Background",
    text: "Guru Har Krishan Ji was born on July 7, 1656, and became Guru after the passing of his father, Guru Har Rai Ji. Despite his young age, Guru Har Krishan Ji was renowned for his profound spiritual insight and his ability to explain complex religious texts. His short Guruship was marked by a significant event where he cared for the sick during a smallpox epidemic in Delhi, demonstrating immense compassion and self-sacrifice.",
  },
  {
    subheading: "Significance of the Martyrdom",
    text: "Guru Har Krishan Ji's martyrdom is significant for his embodiment of the Sikh principles of Seva (selfless service) and compassion, especially towards those suffering from illness and disease. His life teaches Sikhs the values of empathy, humility, and the importance of fulfilling one's duty to society, regardless of one's age or stature.",
  },
  {
    subheading: "Observances and Traditions",
    text: "The Martyrdom Day of Guru Har Krishan Ji is observed with solemn prayer meetings and recitations of Gurbani in Gurdwaras worldwide. Devotees remember his noble deeds and teachings, focusing on his role as a healer and a spiritual guide. Langar is also served, emphasizing equality and the spirit of community service that Guru Har Krishan Ji upheld during his life.",
  },
  {
    subheading: "Legacy of Guru Har Krishan Ji",
    text: "Guru Har Krishan Ji's legacy is a testament to the power of divine wisdom and the impact of selfless action. His life encourages Sikhs to practice compassion in their daily lives and to uphold the dignity of all beings. On this day, Sikhs reflect on the youthful Guru's contributions and seek to embody his virtues in their own lives.",
  },
];

function GuruKrishanMartyrdom() {
  return (
    <PageLayout heading={"Martyrdom Day of Guru Har Krishan Ji"}>
      {guruKrishanMartyrdomData.map((section) => (
        <ContentWithSubheading key={section.subheading} {...section} />
      ))}
    </PageLayout>
  );
}

export default GuruKrishanMartyrdom;
