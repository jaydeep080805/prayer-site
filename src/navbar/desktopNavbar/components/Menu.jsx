import MenuItem from "./MenuItem";
import SearchIcon from "../../components/SearchIcon";

// the right side of the menu
// the side that contains the links
function Menu() {
  return (
    <div className="flex items-center gap-10 capitalize text-xl">
      <MenuItem pageLink={"./japji-sahib"} name={"Japji sahib"} />
      <MenuItem pageLink={"./raehraas-sahib"} name={"raehraas sahib"} />
      <MenuItem pageLink={"./ardaas-sahib"} name={"ardaas"} />
      <MenuItem pageLink={"./sohilaa-sahib"} name={"sohilaa"} />
      <SearchIcon />
    </div>
  );
}

export default Menu;
