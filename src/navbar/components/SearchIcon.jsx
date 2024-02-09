import { Tooltip } from "react-tooltip";

function SearchIcon() {
  return (
    <>
      <i
        id="searchIcon"
        className="fa-solid fa-magnifying-glass text-orange-400 cursor-pointer"
      ></i>
      <Tooltip anchorSelect="#searchIcon">Currently Disabled</Tooltip>
    </>
  );
}

export default SearchIcon;
