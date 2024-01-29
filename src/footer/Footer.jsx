import FooterMenu from "./components/FooterMenu";
import FooterSocialIcons from "./components/FooterSocialIcons";
import SplitBorder from "./components/SplitBorder";
import Copyright from "./components/Copyright";

function Footer() {
  return (
    // main footer container
    <div className="flex flex-col font-heading gap-8 justify-center items-center bg-sky-950 text-orange-400 border-t border-orange-400 py-10">
      {/* the text */}
      <FooterMenu />

      {/* the white line seperator */}
      <SplitBorder />

      <div className="flex flex-col items-center gap-10 justify-between lg:flex-row lg:w-[48rem] xl:w-[60rem]">
        {/* the social icons */}
        <FooterSocialIcons />

        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
