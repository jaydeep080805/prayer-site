import ContentWithSubheading from "../components/ContentWithSubheading";
import PageLayout from "../components/PageLayout";

function Privacy() {
  return (
    <PageLayout heading={"privacy policy"}>
      <ContentWithSubheading
        subheading={"Introduction"}
        text={
          "Welcome to Sikh Essence. We are committed to respecting your privacy and protecting any information you may provide while visiting our website. This Privacy Policy outlines our practices regarding data collection, use, and security to ensure you feel safe and informed as you engage with our content."
        }
      />

      <ContentWithSubheading
        subheading={"Information Collection and Use"}
        text={
          "As an educational resource, Sikh Essence currently does not collect personal information from its visitors. Users are free to explore the site without the need to register or provide personal details. If this policy changes in the future, updates will be clearly communicated through this page."
        }
      />

      <ContentWithSubheading
        subheading={"Content and Copyright"}
        text={
          "The content on Sikh Essence, including translations and design elements, has been inspired by and derived from various sources, most notably nitnemsahib.com. This work is intended for educational purposes and to share the teachings and practices of Sikhism with a wider audience."
        }
        listItems={[
          "Translations and Text: The translations provided on Sikh Essence are used with the intent of spreading knowledge and understanding of Sikh teachings. They are available for anyone to use for personal study and reflection.",
          "Design Inspiration: The website design is inspired by nitnemsahib.com, reflecting a layout and presentation that honors Sikh traditions in a digital format. The design is implemented with the purpose of enhancing user experience and accessibility.",
        ]}
      />

      <ContentWithSubheading
        subheading={"intellectual Property Rights"}
        text={
          "We acknowledge and respect the intellectual property rights of all sources and contributors whose work has influenced Sikh Essence. If you believe that any content on our site infringes upon your copyright, please contact us immediately so we can address your concerns."
        }
      />

      <ContentWithSubheading
        subheading={"Use of Content"}
        text={
          "The content on Sikh Essence is provided for personal, educational use. Visitors and users are welcome to share, reproduce, or cite the content for non-commercial purposes, provided that appropriate credit is given to Sikh Essence and any sourced materials."
        }
      />

      <ContentWithSubheading
        subheading={"Changes to This Policy"}
        text={
          "Sikh Essence reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page, along with the date of the latest update. We encourage users to review this policy periodically to stay informed of how we are protecting your information."
        }
      />

      <ContentWithSubheading
        subheading={"Contact Us"}
        text={
          "If you have any questions about this Privacy Policy or our practices, please contact us at "
        }
        linkText={"Jaydeep@sikhessence.co.uk"}
      />

      <div className="capitalize text-gray-400 font-heading flex justify-center">
        last updated february 2024
      </div>
    </PageLayout>
  );
}

export default Privacy;
