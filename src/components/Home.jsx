import Navbar from "./navbar/Navbar";
import HomeScreen from "./homeScreenElements/HomeScreen";

function Home() {
  return (
    <div className="h-full bg-gray-100 md:h-screen">
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default Home;
