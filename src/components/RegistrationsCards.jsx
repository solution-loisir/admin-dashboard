import { createMemo } from "solid-js";
import { dateReadable } from "../utilities/date-readable";
import { timeReadable } from "../utilities/time-readable";

function RegistrationsCards(props) {
  const registrations = createMemo(() => props.activities.map(activity => activity.Registrations).flat().sort((a, b) => new Date(b.DateCreated) - new Date(a.DateCreated)));
  return (
    <>
      <div>{registrations()[0].Person.FullName}</div>
      <div>{registrations()[0].DateCreated}</div>
      <div>{dateReadable(registrations()[0].DateCreated)}</div>
      <div>{timeReadable(registrations()[0].DateCreated)}</div>
      <p>{registrations()[0].Category.Name}</p>
      <p>{registrations()[0].SubCategory.Name}</p>
      <p>{registrations()[0].Activity.Name}</p>
      <p>{`Now: ${new Date()}`}</p>
    </>
  );
}

export default RegistrationsCards;