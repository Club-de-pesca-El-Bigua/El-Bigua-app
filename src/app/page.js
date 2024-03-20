import ShipSearchBar from "@/components/Home/ShipSearchBar/shipSearchBar";
import Filter from "@/components/Home/Filter/Filter";
import CardContainer from "@/components/Home/CardContainer/CardContainer";

const HomePage = () => {
  return (
    <main>
      <ShipSearchBar />
      <div className="mx-8">
        <hr className="my-4 border-gray-300 " />
      </div>
      <Filter />
      <CardContainer />
    </main>
  );
};

export default HomePage;
