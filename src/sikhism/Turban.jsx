import Section from "../components/Section";
import PageLayout from "../components/PageLayout";
import ContentwithSubheading from "../components/ContentWithSubheading";

function Turban() {
  return (
    <PageLayout heading="The Turban (Dastar) in Sikhism">
      <Section text="The turban, known as Dastar in Punjabi, holds profound significance in Sikh culture and religion. It is not merely a piece of cloth but a symbol of faith, honor, and identity for Sikhs. The turban represents a commitment to the values taught by the Sikh Gurus, including equality, sovereignty, and dedication to God." />
      <ContentwithSubheading
        subheading={"Historical Significance"}
        text={
          "The practice of wearing a turban was mandated by Guru Gobind Singh Ji, the tenth Sikh Guru, in 1699 when he formed the Khalsa, a community of initiated Sikhs. Guru Gobind Singh Ji instructed his followers to wear the turban as a mark of dignity and as a way to maintain the unique identity of Sikhs. The turban was also intended to eliminate social hierarchies, as in the past, the right to wear a turban was reserved for the elite classes in many cultures."
        }
      />

      <ContentwithSubheading
        subheading={"Symbolism and Meaning"}
        text={
          "The turban symbolizes discipline, integrity, humility, and the willingness to protect the rights and honor of all people. It serves as a reminder to live according to the teachings of the Sikh Gurus and to uphold the principles of Sikhism, including the commitment to justice and service to humanity. Moreover, it signifies the Sikh's sovereignty and independence, echoing the community's history of resistance against oppression."
        }
      />

      <ContentwithSubheading
        subheading={"Varieties and Styles"}
        text={
          "Sikh turbans come in various styles, lengths, and colors, reflecting personal choice, regional influences, and occasions. The tying style can vary from one individual to another, with variations such as the Dumalla, Nok, and Patiala Shahi, among others. The color of the turban might hold personal significance or be chosen for aesthetic reasons, without any specific religious prescription."
        }
      />

      <ContentwithSubheading
        subheading={"The Turban in Daily Life"}
        text={
          "For Sikhs, wearing a turban is a daily practice that begins at a young age. It is an integral part of the Sikh identity, visibly distinguishing Sikhs in a crowd and symbolizing their commitment to their faith and values. The act of tying the turban is considered a meditative and respectful ritual, reflecting the wearer's spiritual and temporal dedication."
        }
      />

      <ContentwithSubheading
        subheading={"Beyond Fashion: A Commitment to Faith"}
        text={
          "While the turban is sometimes perceived merely as a cultural or fashion statement, for Sikhs, it is a profound expression of faith. The turban is a badge of responsibility and a crown of honor, signifying the wearer's dedication to living a life of courage, humility, and service to others. It is a constant reminder of the Sikh's duty to stand for righteousness and to defend the oppressed, embodying the spirit of the Khalsa."
        }
      />
    </PageLayout>
  );
}

export default Turban;
