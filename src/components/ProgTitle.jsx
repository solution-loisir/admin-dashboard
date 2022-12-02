import { useContext } from "solid-js";
import { SelectedData } from "../App";

function ProgTitle() {
  const state = useContext(SelectedData);
  return (
    <h2>{state().Name}</h2>
  );
}

export default ProgTitle;