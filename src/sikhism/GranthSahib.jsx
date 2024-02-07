import ContentWithSubheading from "../components/ContentWithHeading";
import Heading from "../components/Heading";
import Section from "../components/Section";

function GranthSahib() {
  return (
    <div className="px-5 pb-5 bg-gray-200 dark:bg-gray-900 lg:mx-40 lg:rounded-lg lg:mt-10 xl:mx-60 dark:text-white">
      <div className="px-5 flex flex-col gap-5">
        <Heading text={"the guru granth sahib"} />

        <Section
          text={
            "The Guru Granth Sahib is the central religious scripture of Sikhism, revered not just as a sacred text but as the eternal Guru and the final authority in Sikh life and spirituality. Compiled and completed in 1604 by the fifth Sikh Guru, Guru Arjan Dev Ji, it embodies the teachings, wisdom, and divine poetry of the Sikh Gurus, along with saints and scholars from various religious backgrounds, reflecting Sikhism's inclusive ethos."
          }
        />

        <div className="mt-5 space-y-10">
          <ContentWithSubheading
            subheading={"Composition and Contributors"}
            text={
              "The Guru Granth Sahib is a voluminous text composed in the Gurmukhi script and contains 1430 Angs (pages). It includes the compositions of the Sikh Gurus, from Guru Nanak Dev Ji to Guru Tegh Bahadur, and enlightened souls like Bhagat Kabir, Sheikh Farid, Bhagat Ravidas, and many others, making it a unique scripture that transcends religious boundaries. This diversity underscores the Sikh belief in the universality of God and the unity of all humanity."
            }
          />

          <ContentWithSubheading
            subheading={"teachings and significance"}
            text={
              "The Guru Granth Sahib's teachings are centered around the worship of the one, formless God, the importance of Guru's grace, the equality of all human beings, and the rejection of caste and religious distinctions. Its hymns or Shabads emphasize the values of love, compassion, truth, devotion, and the remembrance of God (Naam Japna). For Sikhs, the Guru Granth Sahib is a guide to living a life that is spiritually fulfilling and morally upright."
            }
          />

          <ContentWithSubheading
            subheading={"Reverence and Protocol"}
            text={
              "In Sikh Gurdwaras (places of worship), the Guru Granth Sahib is treated with the utmost respect and honor. It is placed on a throne (Takht or Palki) under a canopy, and Sikhs bow before it as a sign of their submission to its teachings. The daily worship service involves the singing of its hymns, and the scripture is ceremonially opened in the morning and closed in the evening, followed by the Ardas (prayer)."
            }
          />

          <ContentWithSubheading
            subheading={"Eternal Guru"}
            text={
              "Guru Gobind Singh, the tenth and last human Sikh Guru, declared the Guru Granth Sahib as the final and eternal Guru of the Sikhs before his passing in 1708. This declaration meant that Sikhs were to regard the Guru Granth Sahib as their spiritual leader, turning to it for guidance, solace, and inspiration. This marked a significant shift in religious authority from a person to a text, emphasizing the Sikh commitment to the Word as the embodiment of the divine."
            }
          />

          <ContentWithSubheading
            subheading={"A Living Scripture"}
            text={
              "The Guru Granth Sahib is not just a book to be read, but a living presence to be engaged with. Sikhs consider it a living Guru, and its teachings are applied to all aspects of life, guiding the community through its wisdom. Its universal messages of devotion to God, social justice, and human unity continue to inspire and guide not only Sikhs but people of all faiths around the world."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default GranthSahib;
