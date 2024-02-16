import Section from "../components/Section";
import PageLayout from "../components/PageLayout";
import Image from "../components/Image";
import kara from "../assets/five-k's/kara.jpg";
import kanga from "../assets/five-k's/kanga.jpg";

function FiveK() {
  return (
    <PageLayout heading="five k's">
      <Section
        spanText={"Kesh (Uncut Hair) - "}
        text={
          "Kesh refers to the practice of allowing one's hair to grow naturally without cutting it. This symbolizes acceptance of God's will, respect for the perfection of God's creation, and a departure from vanity and ego. The hair is usually covered with a turban (Dastar) for men, and a headscarf for women, signifying dignity, integrity, and respect."
        }
        // imageSrc={kara}
      />

      <Section
        spanText={"Kara (Steel Bracelet) - "}
        text={
          "The Kara is a steel bracelet worn on the wrist. It serves as a reminder to always remember God and to act in accordance with the Guru's teachings. The circular shape represents the unity and eternity of God, and wearing it on the wrist signifies restraint from wrong actions and dedication to duty."
        }
      />

      <Section
        spanText={"Kanga (Wooden Comb) - "}
        text={
          "A Kanga is a small wooden comb used to keep the hair neat and tidy, symbolizing cleanliness, order, and discipline. It represents the importance of maintaining a physical and spiritual cleanliness, and the comb's presence in the hair serves as a constant reminder to keep one's life free of tangles of falsehood and immorality."
        }
      />

      <Section
        spanText={"Kacchera (Cotton Undergarment) - "}
        text={
          "The Kacchera is a specific style of cotton undergarments that symbolize chastity, modesty, and self-control. Designed for practicality and comfort, it reminds the wearer of the need for self-restraint and the commitment to moral and ethical living."
        }
      />

      <Section
        spanText={"Kirpan (Ceremonial Sword) - "}
        text={
          "The Kirpan is a ceremonial sword that symbolizes a Sikh's duty to stand against injustice and to protect the weak and oppressed. It represents courage, self-defense, and the struggle against tyranny. The Kirpan is a reminder of the warrior aspect of Sikhism, emphasizing the responsibility to uphold righteousness and the moral obligation to defend the rights of all beings."
        }
      />

      {/* <div className="flex gap-2">
        <Image imageSrc={kara} />
        <Image imageSrc={kanga} />
        <Image imageSrc={kara} />
        <Image imageSrc={kara} />
        <Image imageSrc={kara} />
      </div> */}
    </PageLayout>
  );
}

export default FiveK;
