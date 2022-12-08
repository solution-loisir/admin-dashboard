import { useContext } from "solid-js";
import SpotsTable from "../components/SpotsTable";
import FinancesTable from "../components/FinancesTable";
import LevelTable from "../components/LevelTable";
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
      <LevelTable model={state().ActivitiesModel} />
      <FinancesTable state={state()} />
    </>
  );
}

export default Home;