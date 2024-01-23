import MenuItem from "./MenuItem";
import SearchIcon from "./SearchIcon";

// the right side of the menu
// the side that contains the links
function Menu() {
  return (
    <div className="flex items-center gap-10 capitalize text-xl">
      <MenuItem pageLink={"./japjiSahib"} name={"Japuji sahib"} />
      <MenuItem pageLink={""} name={"raehraas sahib"} />
      <MenuItem pageLink={""} name={"ardaas"} />
      <MenuItem pageLink={""} name={"sohilaa"} />
      <SearchIcon />
    </div>
  );
}

export default Menu;
