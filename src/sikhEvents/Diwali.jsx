import PageLayout from "../components/PageLayout";
import ContentWithSubheading from "../components/ContentWithSubheading";

const diwaliData = [
  {
    subheading: "Introduction",
    text: "Diwali, known to Sikhs as Bandi Chhor Divas, holds a unique and profound significance within the Sikh faith. It commemorates the historic release of Guru Hargobind Sahib Ji, the sixth Sikh Guru, from imprisonment in the Gwalior Fort, along with 52 princes, in 1619. This day is celebrated with joy and reverence, symbolizing the triumph of light over darkness and freedom over oppression.",
  },
  {
    subheading: "Historical Background",
    text: "The Mughal Emperor Jahangir had imprisoned Guru Hargobind Sahib Ji, but the Guru's release was secured through diplomacy and moral standing. Refusing to leave without the 52 Hindu princes detained with him, Guru Ji ensured their freedom by allowing each one to hold onto his cloak, which had 52 tassels, as they left the prison. This act of compassion and leadership is remembered and celebrated as Bandi Chhor Divas.",
  },
  {
    subheading: "Significance of the Festival",
    text: "Bandi Chhor Divas is a celebration of Guru Hargobind Sahib Ji’s return to Amritsar on the day of Diwali, where the Golden Temple was illuminated in his honor. It represents the core Sikh values of justice, liberty, and righteousness. For Sikhs, this day reaffirms the commitment to uphold moral integrity and fight against tyranny.",
  },
  {
    subheading: "Celebration Practices",
    text: "On Bandi Chhor Divas, Gurdwaras are beautifully illuminated, and Sikhs around the world partake in Kirtan, Akhand Path, and Langar. Devotees also light candles and fireworks, symbolizing the light of truth and the fireworks as a celebration of freedom. The Golden Temple in Amritsar witnesses spectacular celebrations, attracting devotees from across the globe.",
  },
  {
    subheading: "Reflections on Freedom and Justice",
    text: "Bandi Chhor Divas offers a moment to reflect on the themes of freedom, justice, and the fight against oppression. It encourages Sikhs to remember the sacrifices made by their Gurus for the sake of humanity and to continue their legacy of fighting for the rights and dignity of all people.",
  },
];

function Diwali() {
  return (
    <PageLayout
      heading={"Diwali and Bandi Chhor Divas - A Celebration of Freedom"}
    >
      {diwaliData.map((section) => (
        <ContentWithSubheading key={section.subheading} {...section} />
      ))}
    </PageLayout>
  );
}

export default Diwali;
