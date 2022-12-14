import { For, useContext } from "solid-js";
import { FullData } from "../App";

function ProgName(props) {
  const data = useContext(FullData);
  return (
    <select onchange={props.handler}>
      <For each={data}>
        {(prog) => <option value={prog.Name}>{prog.Name}</option>}
      </For>
    </select>
  );
}

export default ProgName;