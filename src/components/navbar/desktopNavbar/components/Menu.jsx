import MenuItem from "./MenuItem";
import SearchIcon from "./SearchIcon";

// the right side of the menu
// the side that contains the links
function Menu() {
  return (
    <div className="flex items-center gap-10 capitalize text-xl">
      <MenuItem name={"Japuji sahib"} />
      <MenuItem name={"raehraas sahib"} />
      <MenuItem name={"ardaas"} />
      <MenuItem name={"sohilaa"} />
      <SearchIcon />
    </div>
  );
}

export default Menu;
