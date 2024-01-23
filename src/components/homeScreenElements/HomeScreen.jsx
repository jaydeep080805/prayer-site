import Button from "./Buttons";

function HomeScreen() {
  return (
    <div className="flex justify-center">
      <div className="w-[80rem]">
        <div className="mt-5 capitalize font-main flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:justify-center md:text-center">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
