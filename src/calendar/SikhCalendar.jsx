import EventTable from "./EventTable";
import Heading from "../components/Heading";

function SikhCalendar() {
  return (
    <div className="flex flex-col items-center">
      <Heading text={"calendar"} />
      <EventTable />
    </div>
  );
}

export default SikhCalendar;
