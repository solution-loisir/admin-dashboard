import { useContext, For, createEffect, on, createMemo } from "solid-js";
import { SelectedData } from "../App";
import { getDays } from "../utilities/getDays";

function DaySelector(props) {
  const state = useContext(SelectedData);
  const days = createMemo(() => getDays(state()));
  createEffect(on(state, () => {
    document.querySelector('[data-id="day-selector"]').options[0].selected = true;
  }, { defer: true }));
  return (
    <select onChange={props.handler} data-id="day-selector">
      <option value="" selected>-- Choisir la journée --</option>
      <For each={days()}>
        {(day) => (
          <option value={day}>{day}</option>
        )}
      </For>
    </select>
  );
}

export default DaySelector;