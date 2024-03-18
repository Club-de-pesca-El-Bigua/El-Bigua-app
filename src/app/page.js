import { Manrope } from "next/font/google";
import NavBar from "../components/Home/NavBar/NavBar";
import ShipSearchBar from "@/components/Home/ShipSearchBar/shipSearchBar";
import Filter from "@/components/Home/Filter/Filter";
import CardContainer from "@/components/Home/CardContainer/CardContainer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const HomePage = () => {
  return (
    <main className={`${manrope.variable} font-mono`}>
      <NavBar />
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
