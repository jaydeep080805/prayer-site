import EventTable from "./EventTable";
import Heading from "../components/Heading";
import { BackButtonNavigationPage } from "../components/BackButtons";

function SikhCalendar() {
  return (
    <div className="flex flex-col items-center">
      <Heading text={"calendar"} />

      <BackButtonNavigationPage pageLink={"/"} />

      <EventTable />
    </div>
  );
}

export default SikhCalendar;
