import PropTypes from "prop-types";
import Heading from "./Heading";
import { BackButtonNavigationPage } from "./BackButtons";

// use the react "children" property to allow components to be passed through as if it were a div
function PageLayout({ heading, children }) {
  return (
    // set the structure of the page
    <div className="px-5 pb-5 pt-8 bg-gray-200 dark:bg-gray-900 lg:mx-40 lg:pt-0 lg:rounded-lg lg:mt-10 xl:mx-60 dark:text-white">
      <BackButtonNavigationPage />

      {/* set the structure of the content */}
      <div className="px-5 flex flex-col gap-5">
        {/* render the heading */}
        <Heading text={heading} />
        {/* render the components */}
        <div className="space-y-10 lg:space-y-10 xl:space-y-10">{children}</div>
      </div>
    </div>
  );
}

PageLayout.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageLayout;
