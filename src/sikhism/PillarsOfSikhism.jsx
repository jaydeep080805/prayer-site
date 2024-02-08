import Section from "../components/Section";
import PageLayout from "../components/PageLayout";

function PillarsOfSikhism() {
  return (
    <PageLayout heading="pillars of sikhism">
      <Section
        spanText={"Naam Japna (Remembering God) - "}
        text={
          "Naam Japna involves meditating on the name of God to maintain a constant awareness of the divine presence. It is a practice that encourages Sikhs to remember God in everything they do, fostering a life filled with gratitude, humility, and devotion. This pillar emphasizes the importance of keeping God in one's mind at all times and living a life that reflects His virtues."
        }
      />

      <Section
        spanText={"Kirat Karni (Honest Living) - "}
        text={
          "Kirat Karni is the principle of earning one's livelihood through honest means and hard work, without exploitation or fraud. Sikhs are encouraged to lead an honest, ethical life, providing for their family and themselves through just and moral work. This pillar underlines the dignity of labor and the importance of contributing to society through one's efforts."
        }
      />

      <Section
        spanText={"Vand Chakna (Sharing with Others) - "}
        text={
          "Vand Chakna teaches the importance of sharing one's wealth, possessions, and time with those in need. It embodies the spirit of selflessness and generosity, urging Sikhs to support the less fortunate and to contribute to the welfare of the community. This principle fosters a sense of unity and brotherhood, emphasizing that prosperity is truly meaningful only when it benefits all."
        }
      />

      <Section
        spanText={"Sewa (Selfless Service) - "}
        text={
          "Sewa, or selfless service, is the act of serving others without any expectation of reward or personal gain. It can be performed in various ways, such as volunteering in the community, helping those in need, or contributing to the Langar in a Gurdwara. Sewa is a fundamental aspect of Sikh practice, promoting humility, compassion, and the breaking down of ego."
        }
      />

      <Section
        spanText={"Simran (Remembrance of God) - "}
        text={
          "Simran involves meditating on God's virtues, names, and teachings. It is a practice aimed at cultivating love and devotion towards God, and at achieving a state of spiritual awareness and peace. Through Simran, Sikhs seek to develop a close, personal relationship with the divine, enhancing their faith and understanding of the universe."
        }
      />
    </PageLayout>
  );
}

export default PillarsOfSikhism;
