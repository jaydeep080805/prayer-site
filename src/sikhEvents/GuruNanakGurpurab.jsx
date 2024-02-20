import ContentWithSubheading from "../components/ContentWithSubheading";
import PageLayout from "../components/PageLayout";
import Image from "../components/Image";
import pic from "../assets/events/guru-nanak-gurpurab.jpg";

const guruNanakGurpurabData = [
  {
    subheading: "Introduction",
    text: "Guru Nanak Gurpurab, also known as Guru Nanak Prakash Utsav, celebrates the birth of the first Sikh guru, Guru Nanak. One of the most celebrated and important Sikh gurus and the founder of Sikhism, Guru Nanak is highly revered by the Sikh community. This is one of the most sacred festivals in Sikhism, or Sikhi.",
  },
  {
    subheading: "Historical Background",
    text: "Guru Nanak was born in 1469 in Nankana Sahib, present-day Pakistan. From a young age, he showed a deep spiritual inclination and a quest for divine truth. His teachings emphasized the worship of one God, equality among all humans, and the importance of living a truthful and compassionate life. Guru Nanak's message transcended religious and social boundaries, attracting followers from diverse backgrounds.",
  },
  {
    subheading: "Significance of the Festival",
    text: "Guru Nanak Gurpurab is not only a celebration of the birth of Sikhism’s founder but also a day to reflect on his teachings and the universal messages of peace, love, and oneness with the Divine. It reinforces the core Sikh values of compassion, humility, and community service, inspiring Sikhs to live according to these principles.",
  },
  {
    subheading: "Celebration Practices",
    text: "The festivities begin with Prabhat Pheris, pre-dawn processions starting at the Gurdwara and proceeding around the local community. An Akhand Path, a continuous reading of the Guru Granth Sahib, takes place over 48 hours. Devotees gather for special assemblies in Gurdwaras to listen to kirtans and discourses on Guru Nanak’s life. The celebrations conclude with Langar, a community meal served to all attendees, emphasizing the Sikh principle of equality.",
  },
  {
    subheading: "Global Observations",
    text: "Guru Nanak Gurpurab is observed worldwide wherever there are Sikh communities. From the historic Gurdwaras of Punjab to the urban centers of Canada, the UK, and the United States, Sikhs come together to celebrate this auspicious day. Each region adds its own cultural touch to the celebrations, but the essence of Guru Nanak's teachings remains central to the observances.",
  },
  {
    subheading: "Personal Reflections and Teachings",
    text: "Guru Nanak’s message of 'Ek Onkar' (there is only one God) and his emphasis on the equality of all humanity regardless of caste, creed, or gender, continue to inspire millions. His teachings encourage us to look beyond our differences and work towards a world marked by compassion, service, and understanding.",
  },
];

function GuruNanakGurpurab() {
  return (
    <PageLayout
      heading={
        "Guru Nanak Gurpurab - Celebrating the Birth of Sikhism's Founder"
      }
    >
      <Image imageSrc={pic} isEvent={true} />

      {guruNanakGurpurabData.map((section) => (
        <ContentWithSubheading key={section.subheading} {...section} />
      ))}
    </PageLayout>
  );
}

export default GuruNanakGurpurab;
