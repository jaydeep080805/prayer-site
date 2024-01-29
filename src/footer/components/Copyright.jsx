function Copyright() {
  // get the current year
  const year = new Date().getFullYear();

  return (
    // text on the left of the icons
    <p className="mx-8 block text-white text-center capitalize lg:mx-0">
      {/* add the year */}
      &copy; {year} All rights reserved
      {}
      {/* border separator for bigger screens */}
      <span className="hidden lg:inline border-r border-white mx-2"></span>
      {/* line break for mobile */}
      <span className="block lg:hidden"></span>
      developed by
      <span className="text-orange-400"> Jaydeep</span>
    </p>
  );
}

export default Copyright;
