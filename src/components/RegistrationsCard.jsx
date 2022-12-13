import { createMemo, Show } from "solid-js";
import ParentFullName from "./ParentFullName";
import { dateReadable } from "../utilities/date-readable";
import { timeReadable } from "../utilities/time-readable";
import { adjustDate } from "../utilities/adjustDate";
import { addEmoji } from "../utilities/addEmoji";

function RegistrationsCard(props) {
  const registration = createMemo(() => props.activities.map(activity => activity.Registrations).flat().sort((a, b) => new Date(b.DateCreated) - new Date(a.DateCreated))[props.index]);
  return (
    <details class="width-sm">
      <summary class="button summary-btn">Dernière inscription</summary>
      <ul role="list" class="inscription-section__clients">
        <li>{registration().Person.FullName}</li>
        <li>Naissance : {dateReadable(registration().Person.DateOfBirth)}</li>
        <li>Parent : <ParentFullName accountId={registration().AccountOwner.AccountId} /></li>
        <li>Courriel : <a href={`mailto:${registration().Person.Email}`}>{registration().Person.Email}</a></li>
        <Show when={registration().Person.Telephone}>
          <li>Fix : <a href={`tel:${registration().Person.Telephone}`}>{registration().Person.Telephone}</a></li>
        </Show>
        <Show when={registration().Person.TelephoneMobile}>
          <li>Cell : <a href={`tel:${registration().Person.TelephoneMobile}`}>{registration().Person.TelephoneMobile}</a></li>
        </Show>
        <Show when={registration().Person.TelephoneWork}>
          <li>Travail : <a href={`tel:${registration().Person.TelephoneWork}`}>{registration().Person.TelephoneWork}</a></li>
        </Show>
        <li>Date d'inscription : {dateReadable(adjustDate(registration().DateCreated))}</li>
        <li>Heure d'inscription : {timeReadable(adjustDate(registration().DateCreated)).replace(/:/, "h")}</li>
        <li>{addEmoji(registration().Category.Name)}</li>
        <li>{`${registration().SubCategory.Name} ${registration().Activity.Name}`}</li>
      </ul>
    </details>
  );
}

export default RegistrationsCard;