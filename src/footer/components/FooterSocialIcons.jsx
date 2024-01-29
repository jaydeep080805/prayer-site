import FooterSocialMediaIcons from "./FooterSocialMediaIcon";

function FooterSocialIcons() {
  return (
    // make the text bigger and the icons white
    // add spacing between them
    <div className="flex gap-10 text-3xl text-white">
      <FooterSocialMediaIcons iconClass="fa-linkedin" />
      <FooterSocialMediaIcons iconClass="fa-instagram" />
      <FooterSocialMediaIcons iconClass="fa-github" />
      <FooterSocialMediaIcons iconClass="fa-twitter" />
    </div>
  );
}

export default FooterSocialIcons;
