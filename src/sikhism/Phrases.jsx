import PageLayout from "../components/PageLayout";
import Section from "../components/Section";

const PhraseData = [
  {
    spanText: "Waheguru -",
    text: "'Wonderful Lord' or 'Wonderful Teacher.' It's a way for Sikhs to express awe and reverence towards the divine.",
  },
  {
    spanText: "Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh -",
    text: "'The Khalsa belongs to God, Victory belongs to God.' It's a way of acknowledging God's sovereignty and the victory of the divine will.",
  },
  {
    spanText: "Jo Bole So Nihal -",
    text: "'Whoever utters (the phrase), shall be happy, blissful.' It's an invocation that promises joy and bliss to those who proclaim it.",
  },
  {
    spanText: "Sat Sri Akal -",
    text: "'Eternal is the Holy/ Great Timeless Lord.' It's used to acknowledge the timeless, immortal nature of God.",
  },
  {
    spanText: "Kirat Karo -",
    text: "'Earn an honest living.' Emphasizes hard work and self-reliance.",
  },
  {
    spanText: "Naam Japo -",
    text: "'Meditate on God's name.' Stresses the importance of remembering the divine.",
  },
  {
    spanText: "Vand Chakko -",
    text: "'Share and consume together.' Encourages generosity and community spirit.",
  },
  {
    spanText: "Sewa -",
    text: "'Selfless service.' A foundational Sikh value of helping others without expecting anything in return.",
  },
  {
    spanText: "Nanak Naam Chardi Kala, Tere Bhane Sarbat Da Bhala -",
    text: "'With the name of Nanak, may your spirit remain forever in high spirits. With your will, may there be goodwill for everyone.' Expresses optimism and the desire for well-being for all.",
  },
];

function Phrases() {
  return (
    <PageLayout heading={"sikh phrases"}>
      {PhraseData.map((phrase, index) => {
        return (
          <Section key={index} spanText={phrase.spanText} text={phrase.text} />
        );
      })}
    </PageLayout>
  );
}

export default Phrases;
