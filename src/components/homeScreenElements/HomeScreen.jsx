import Buttons from "./Buttons";

function HomeScreen() {
  return (
    <div className="mt-5 capitalize font-main flex flex-col gap-5 md:grid md:grid-cols-3 md:text-center">
      <Buttons />
    </div>
  );
}

export default HomeScreen;
