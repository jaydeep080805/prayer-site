import PageLayout from "../components/PageLayout";

import ContentWithSubheading from "../components/ContentWithSubheading";

function ParkashUtsav() {
  return (
    <PageLayout
      heading={"Parkash Utsav of Guru Granth Sahib Ji - The Eternal Guru"}
    >
      <ContentWithSubheading
        subheading={"Introduction"}
        text={
          "Parkash Utsav of Guru Granth Sahib Ji commemorates the historic occasion when Guru Granth Sahib Ji was installed as the eternal Guru of the Sikhs by Guru Gobind Singh Ji in 1708. This day marks a pivotal moment in Sikh history, emphasizing the Sikhs' devotion to the Guru Granth Sahib Ji, which contains the teachings of the Sikh Gurus and other saintly figures."
        }
      />

      <ContentWithSubheading
        subheading={"Historical Background"}
        text={
          "The Guru Granth Sahib Ji was first compiled by the fifth Sikh Guru, Guru Arjan Dev Ji, in 1604, and later finalized by Guru Gobind Singh Ji, who added the hymns of his father, Guru Tegh Bahadur Ji. Before his passing, Guru Gobind Singh Ji declared that the Guru Granth Sahib Ji would be the final and eternal Guru of the Sikhs, guiding them in his physical absence."
        }
      />

      <ContentWithSubheading
        subheading={"Significance of the Festival"}
        text={
          "The Parkash Utsav symbolizes the eternal presence and spiritual authority of the Guru Granth Sahib Ji in the lives of Sikhs. It reinforces the belief in the Guru as a living embodiment of divine wisdom, accessible to all for guidance, inspiration, and solace. The day is a reaffirmation of the Sikh commitment to the teachings enshrined in the Guru Granth Sahib Ji."
        }
      />

      <ContentWithSubheading
        subheading={"Celebration Practices"}
        text={
          "The Parkash Utsav is celebrated with great reverence across the globe. Activities include Akhand Path (continuous reading of the Guru Granth Sahib Ji), kirtan (devotional singing), and langar (community meals). Gurdwaras are decorated, and processions are held, with devotees singing hymns and sharing the teachings of the Guru Granth Sahib Ji."
        }
      />

      <ContentWithSubheading
        subheading={"Reflections on the Guru’s Teachings"}
        text={
          "This day offers an opportunity for Sikhs to reflect on the teachings of the Guru Granth Sahib Ji, engage in selfless service, and deepen their understanding of Sikh principles. It is a time for communal harmony, spiritual growth, and renewing one’s commitment to the path shown by the Gurus."
        }
      />
    </PageLayout>
  );
}

export default ParkashUtsav;
