import { useContext } from "solid-js";
import SpotsTable from "../components/SpotsTable";
import FinancesTable from "../components/FinancesTable";
import { SelectedData } from "../App";

function Home() {
  const state = useContext(SelectedData);
  return (
    <>
      <SpotsTable 
        total={state().SpotsStats.TotalSpots} 
        left={state().SpotsStats.TotalSpotsRemaining} 
        taken={state().SpotsStats.TotalSpotsReserved} 
      />
      <FinancesTable state={state()} />
    </>
  );
}

export default Home;