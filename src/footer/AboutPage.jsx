import ContentWithSubheading from "../components/ContentWithSubheading";
import PageLayout from "../components/PageLayout";

function AboutPage() {
  return (
    <PageLayout heading="about sikh essence">
      <ContentWithSubheading
        subheading="Welcome to Sikh Essence"
        text="Sikh Essence is an online resource dedicated to sharing the profound teachings, history, and practices of Sikhism with a global audience. This project combines a deep respect for Sikh traditions with modern web technology to create an accessible and engaging educational platform."
      />

      <ContentWithSubheading
        subheading="Our Inspiration"
        text="Sikh Essence draws inspiration from various respected sources within the Sikh community, most notably nitnemsahib.com. Their commitment to providing accurate translations and engaging content has been instrumental in shaping the direction of Sikh Essence. We extend our sincerest gratitude to nitnemsahib.com and other resources that have guided this project. Sikh Essence aspires to complement these resources by offering additional insights and perspectives on Sikh teachings."
      />

      <ContentWithSubheading
        subheading="Objective and Vision"
        text="The primary objective of Sikh Essence is to offer a platform where individuals, regardless of their familiarity with Sikhism, can learn about its rich heritage and teachings. This project is designed to be an evolving resource, continually updated with new content and features to enhance user experience and engagement."
      />

      <ContentWithSubheading
        subheading="Acknowledgments"
        text="Special thanks to nitnemsahib.com for their invaluable work and to all the scholars, authors, and community members whose contributions to Sikh studies have made this website possible. Your dedication to spreading knowledge and understanding is truly inspiring."
      />
    </PageLayout>
  );
}

export default AboutPage;
