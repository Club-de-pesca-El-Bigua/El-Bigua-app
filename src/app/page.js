import ShipSearchBar from "@/components/Landing/ShipSearchBar/shipSearchBar";
import Filter from "@/components/Landing/Filter/Filter";
import CardContainer from "@/components/Landing/CardContainer/CardContainer";

const HomePage = () => {
  return (
    <main>
      <ShipSearchBar />
      <div className="mx-8">
        <hr className="my-4 border-gray-300 " />
      </div>
      {/* <Filter /> */}
      <CardContainer />
    </main>
  );
};

export default HomePage;
