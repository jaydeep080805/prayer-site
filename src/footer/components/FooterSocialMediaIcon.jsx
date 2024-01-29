import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FooterSocialMediaIcons({ iconClass }) {
  // will always be a brand but needs the specific brand passed through
  return <Link className={`fa-brands ${iconClass}`}></Link>;
}

FooterSocialMediaIcons.propTypes = {
  iconClass: PropTypes.string.isRequired,
};

export default FooterSocialMediaIcons;
