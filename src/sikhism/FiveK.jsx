// components
import Section from "../components/Section";
import PageLayout from "../components/PageLayout";
import HorizontalImagesForScroller, {
  HorizontalImageScroller,
} from "../components/HorizontalImageScroller";

// images
import kara from "../assets/five-k's/kara.jpg";
import kanga from "../assets/five-k's/kanga.jpg";
import kesh from "../assets/five-k's/kesh.jpeg";
import kacchera from "../assets/five-k's/kacchera.jpeg";
import kirpan from "../assets/five-k's/kirpan.webp";

// the text data for the page
const fiveKData = [
  {
    spanText: "Kesh (Uncut Hair) - ",
    text: "Kesh refers to the practice of allowing one's hair to grow naturally without cutting it. This symbolizes acceptance of God's will, respect for the perfection of God's creation, and a departure from vanity and ego. The hair is usually covered with a turban (Dastar) for men, and a headscarf for women, signifying dignity, integrity, and respect.",
  },
  {
    spanText: "Kara (Steel Bracelet) - ",
    text: "The Kara is a steel bracelet worn on the wrist. It serves as a reminder to always remember God and to act in accordance with the Guru's teachings. The circular shape represents the unity and eternity of God, and wearing it on the wrist signifies restraint from wrong actions and dedication to duty.",
  },
  {
    spanText: "Kanga (Wooden Comb) - ",
    text: "A Kanga is a small wooden comb used to keep the hair neat and tidy, symbolizing cleanliness, order, and discipline. It represents the importance of maintaining a physical and spiritual cleanliness, and the comb's presence in the hair serves as a constant reminder to keep one's life free of tangles of falsehood and immorality.",
  },
  {
    spanText: "Kacchera (Cotton Undergarment) - ",
    text: "The Kacchera is a specific style of cotton undergarments that symbolize chastity, modesty, and self-control. Designed for practicality and comfort, it reminds the wearer of the need for self-restraint and the commitment to moral and ethical living.",
  },
  {
    spanText: "Kirpan (Ceremonial Sword) - ",
    text: "The Kirpan is a ceremonial sword that symbolizes a Sikh's duty to stand against injustice and to protect the weak and oppressed. It represents courage, self-defense, and the struggle against tyranny. The Kirpan is a reminder of the warrior aspect of Sikhism, emphasizing the responsibility to uphold righteousness and the moral obligation to defend the rights of all beings.",
  },
];

// the image data
const horizontalImageData = [
  {
    kesh: {
      name: "kesh",
      image: kesh,
      alt: "sikh man with uncut hair symbolising kesh",
      link: "https://en.wikipedia.org/wiki/Kesh_(Sikhism)",
      text: "A symbol of holiness and stress. Uncut Hair is willing to accept God's gift as God intended it",
    },
  },
  {
    kara: {
      name: "kara",
      image: kara,
      alt: "silver kara",
      link: "https://en.wikipedia.org/wiki/Kara_(Sikhism)",
      text: "A reminder that a sikh should not do anything which the Guru would not approve",
    },
  },
  {
    kanga: {
      name: "kanga",
      image: kanga,
      alt: "wooden kanga",
      link: "https://en.wikipedia.org/wiki/Kangha",
      text: "Symbolising a clean mind and body since it keeps the uncut hair neat and tidy",
    },
  },
  {
    kacchera: {
      name: "kacchera",
      image: kacchera,
      alt: "kacchera (cotton underwear)",
      link: "https://en.wikipedia.org/wiki/Kacchera",
      text: "Symbolising purity. Traditionally worn by Sikh warriors symbolising a willingness to be ready for battle",
    },
  },
  {
    kirpan: {
      name: "kirpan",
      image: kirpan,
      alt: "sikh kirpan",
      link: "https://en.wikipedia.org/wiki/Kirpan",
      text: "Serves as a reminder to help someone who is vulnerable and for Sikh's to defend their faith",
    },
  },
];

function FiveK() {
  return (
    // page text
    <PageLayout heading="five k's">
      {fiveKData.map((fiveKItem, index) => {
        return (
          <Section
            key={index}
            spanText={fiveKItem.spanText}
            text={fiveKItem.text}
          />
        );
      })}

      {/* images */}
      <HorizontalImageScroller>
        {horizontalImageData.map((item, index) => {
          const fiveKs = ["kesh", "kara", "kanga", "kacchera", "kirpan"];
          const currentItem = fiveKs[index];

          return (
            <HorizontalImagesForScroller
              key={index}
              name={item[currentItem].name}
              imageSrc={item[currentItem].image}
              alt={item[currentItem].alt}
              text={item[currentItem].text}
              link={item[currentItem].link}
            />
          );
        })}
      </HorizontalImageScroller>
    </PageLayout>
  );
}

export default FiveK;
