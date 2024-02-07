import Section from "../components/Section";
import PageLayout from "./PageLayout";

function AboutSikhism() {
  return (
    <PageLayout heading="about sikhism">
      <Section
        text={
          "Sikhism is a monotheistic religion founded in the 15th century in the Punjab region of South Asia by Guru Nanak Dev Ji and subsequently led by a succession of nine other Gurus. It is the fifth-largest religion in the world, with a following of over 25 million people globally. Sikhism is based on the teachings of its ten Gurus, enshrined in the Guru Granth Sahib, which is the eternal Guru or the central religious scripture of Sikhism."
        }
      />

      <Section
        text={
          "The core beliefs of Sikhism include the worship of one God, who is the same for all of humanity, regardless of religion, race, or gender. The Sikh faith emphasizes equality among all people, the importance of community service (Sewa), and sharing with others (Vand Chakna). It teaches its followers to lead a life of discipline, honesty, and hard work, and to always remember God (Naam Japna). Sikhism strongly rejects all forms of ritualism, superstitions, and social inequalities such as the caste system."
        }
      />

      <Section
        text={
          "One of the most recognizable practices of Sikhism is the Langar, a community kitchen found in Gurdwaras (Sikh places of worship) where meals are served free of charge to all visitors, regardless of their background, as a practice of equality and the spirit of sharing. Another significant aspect of Sikh identity is the keeping of five articles of faith, commonly known as the Five Ks (Kesh, Kara, Kanga, Kacchera, and Kirpan), which are meant to outwardly demonstrate a Sikh's faith and commitment to the teachings of the Gurus."
        }
      />

      <Section
        text={
          "Sikhism advocates for a life of spirituality intertwined with worldly responsibilities, encouraging its followers to lead a householder's life, engage in selfless service, and strive for social justice. The ultimate goal in Sikhism is to achieve a close, loving relationship with God and to live in a state of eternal bliss and peace, referred to as Sachkhand."
        }
      />

      <Section
        text={
          "The principles of Sikhism are deeply rooted in promoting human rights and equality, with a strong emphasis on moral integrity, inner purity, and devotion to God and humanity. It's a faith that transcends borders and cultures, aiming to bring people closer to each other and to the divine."
        }
      />
    </PageLayout>
  );
}

export default AboutSikhism;
