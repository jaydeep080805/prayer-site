import PropTypes from "prop-types";

function FooterSocialMediaIcons({ iconClass, websiteLink }) {
  // will always be a brand but needs the specific brand passed through
  return (
    <a
      href={websiteLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fa-brands ${iconClass}`}
    ></a>
  );
}

FooterSocialMediaIcons.propTypes = {
  iconClass: PropTypes.string.isRequired,
  websiteLink: PropTypes.string.isRequired,
};

export default FooterSocialMediaIcons;
