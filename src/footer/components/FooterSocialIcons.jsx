import FooterSocialMediaIcons from "./FooterSocialMediaIcon";

function FooterSocialIcons() {
  return (
    // make the text bigger and the icons white
    // add spacing between them
    <div className="flex gap-10 text-3xl text-white">
      <FooterSocialMediaIcons
        iconClass="fa-linkedin"
        websiteLink={"https://www.linkedin.com/in/jaydeep-rayat-9390a3222/"}
      />

      <FooterSocialMediaIcons iconClass="fa-instagram" websiteLink={""} />

      <FooterSocialMediaIcons
        iconClass="fa-github"
        websiteLink={"https://github.com/jaydeep080805"}
      />

      <FooterSocialMediaIcons iconClass="fa-twitter" websiteLink={""} />
    </div>
  );
}

export default FooterSocialIcons;
