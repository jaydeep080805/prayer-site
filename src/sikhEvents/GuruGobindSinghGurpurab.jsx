import PageLayout from "../components/PageLayout";
import Image from "../components/Image";
import pic from "../assets/events/guru-gobind-singh-gurpurab.jpeg";
import ContentWithSubheading from "../components/ContentWithSubheading";

function GuruGobindSinghGurpurab() {
  return (
    <PageLayout
      heading={"Guru Gobind Singh Gurpurab - Celebrating the Eternal Guru"}
    >
      <Image imageSrc={pic} isEvent={true} />

      <ContentWithSubheading
        subheading={"Historical Background"}
        text={
          "Guru Gobind Singh Ji ascended to Guruship at the tender age of nine, following the martyrdom of his father, Guru Tegh Bahadur Ji. He was instrumental in defending religious freedom and established the Khalsa Panth in 1699, transforming the Sikh community into a collective of spiritual warriors and saint-soldiers."
        }
      />

      <ContentWithSubheading
        subheading={"Significance of the Festival"}
        text={
          "The festival honors Guru Gobind Singh Ji’s profound impact on Sikhism, celebrating his legacy of bravery, equality, and faith. His contributions to the Sikh scripture, including the Dasam Granth, and his role in the establishment of the Khalsa are central themes of reflection during the Gurpurab."
        }
      />

      <ContentWithSubheading
        subheading={"Celebration Practices"}
        text={
          "The Gurpurab begins with early morning processions, known as Prabhat Pheris, followed by an Akhand Path—a continuous reading of the Guru Granth Sahib over 48 hours. Community gatherings for Kirtan, poetry recitations from Guru Gobind Singh Ji’s writings, and Langar embody the day's spirit. The celebration is a vivid display of Sikh culture, heritage, and martial spirit, including Gatka (a traditional martial art) demonstrations."
        }
      />

      <ContentWithSubheading
        subheading={"Guru Gobind Singh Ji’s Teachings"}
        text={
          "Guru Gobind Singh Ji’s teachings emphasized the sovereignty of the divine, the brotherhood of mankind, and the moral and spiritual obligation to fight against tyranny and oppression. His call to arms was balanced with a profound message of love, compassion, and devotion to God, encouraging Sikhs to live as Khalsa, or pure ones, upholding the highest spiritual and moral values."
        }
      />

      <ContentWithSubheading
        subheading={"Reflections and Inspirations"}
        text={
          "Guru Gobind Singh Ji's life and sacrifices inspire Sikhs to stand firm in their faith, uphold righteousness, and serve humanity. His message of unity, strength, and compassion continues to resonate, encouraging individuals to transcend beyond the physical realm and connect deeply with the divine."
        }
      />
    </PageLayout>
  );
}

export default GuruGobindSinghGurpurab;
