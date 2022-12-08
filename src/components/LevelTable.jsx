import { For, createMemo } from "solid-js";

function LevelTable(props) {
  const numbersOfRegistrations = createMemo(() => {
    let registrationsLeft = [];
    Object.keys(props.model).forEach((key) => {
      const registrations = props.model[key].reduce((number, activity) => {
        number += activity.SpotsRemaining;
        return number;
      }, 0);
      registrationsLeft.push(registrations);
    });
    return registrationsLeft;
  });
  return (
    <table>
      <caption>Places disponibles par niveau</caption>
      <tbody>
        <For each={Object.keys(props.model)}>
          {(level, index) => (
            <tr>
              <th>{level}</th>
              <td>{numbersOfRegistrations()[index()]}</td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
}

export default LevelTable;