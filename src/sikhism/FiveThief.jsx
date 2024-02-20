import Section from "../components/Section";
import PageLayout from "../components/PageLayout";

const fiveThiefData = [
  {
    spanText: "Kaam (Lust) - ",
    text: "Kaam refers to excessive desire, particularly of a sensual nature. It distracts the mind from spiritual focus and weakens self-control, entangling the individual in worldly cravings that obstruct the path toward God and inner peace.",
  },
  {
    spanText: "Krodh (Anger) - ",
    text: "Krodh represents uncontrolled rage or wrath. It leads to clouded judgment and impulsive, hurtful actions. Anger undermines patience and tolerance, disrupting inner harmony and relationships with others.",
  },
  {
    spanText: "Lobh (Greed) - ",
    text: "Lobh is the insatiable desire for material possessions and worldly riches. This greed creates a cycle of endless want and discontentment, robbing one of contentment and generosity, while fueling attachment to fleeting possessions.",
  },
  {
    spanText: "Moh (Attachment) - ",
    text: "Moh encompasses emotional attachment to people, possessions, and worldly comforts. While love and relationships are natural, they become harmful when they breed dependence and an unhealthy fear of loss that inhibits spiritual growth.",
  },
  {
    spanText: "Ahankar (Ego) - ",
    text: "Ahankar is excessive pride or self-centeredness. Ego creates a sense of superiority and separation, leading to arrogance and insensitivity toward others. Egotism blinds an individual to their own shortcomings, hindering their connection to God and their capacity for compassion.",
  },
];

function FiveThieves() {
  return (
    <PageLayout heading="The Five Thieves">
      {fiveThiefData.map((thief) => (
        <Section
          key={thief.spanText}
          spanText={thief.spanText}
          text={thief.text}
        />
      ))}
    </PageLayout>
  );
}

export default FiveThieves;
