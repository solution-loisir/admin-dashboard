import { For, Show, useContext } from "solid-js";
import { RegistrationsContext } from "../pages/RegistrationsLayout";
import { dateReadable } from "../utilities/date-readable";
import ClipboardCopy from "./ClipboardCopy";
import ParentFullName from "./ParentFullName";

function RegistrationsList() {
  const model = useContext(RegistrationsContext);
  return (
    <Show when={model()}>
      <section class="[ inscription-section ] [ flow ]">
        <For each={Object.keys(model())}>
          {(category) => (
            <>
              <h3>{category}</h3>
              <section class="[ inscription-section__level ] [ flow ]">
                <For each={model()[category]}>
                  {(activity) => (
                    <div>
                      <h4>{activity.ScheduleSummary}</h4>
                      <ClipboardCopy label="Copier les courriels" for={`#${activity.Registrations[0] ? activity.Registrations[0].RegistrationId : ""}`} />
                      <ul role="list">
                        <For each={activity.Registrations}>
                          {(registration) => (
                            <li>
                              <details>
                                <summary>{registration.Person.FullName}</summary>
                                <ul role="list" class="inscription-section__clients">
                                  <li>Parent : <ParentFullName accountId={registration.AccountOwner.AccountId} /></li>
                                  <li>Courriel : <a href={`mailto:${registration.Person.Email}`}>{registration.Person.Email}</a></li>
                                  <li>Naissance : {dateReadable(registration.Person.DateOfBirth)}</li>
                                  <Show when={registration.Person.Telephone}>
                                    <li>Fix : <a href={`tel:${registration.Person.Telephone}`}>{registration.Person.Telephone}</a></li>
                                  </Show>
                                  <Show when={registration.Person.TelephoneMobile}>
                                    <li>Cell : <a href={`tel:${registration.Person.TelephoneMobile}`}>{registration.Person.TelephoneMobile}</a></li>
                                  </Show>
                                  <Show when={registration.Person.TelephoneWork}>
                                    <li>Travail : <a href={`tel:${registration.Person.TelephoneWork}`}>{registration.Person.TelephoneWork}</a></li>
                                  </Show>
                                </ul>
                              </details>
                            </li>
                          )}
                        </For>
                      </ul>
                      <p class="hide" id={`${activity.Registrations[0] ? activity.Registrations[0].RegistrationId : ""}`}>
                        { [...new Set(activity.Registrations.map((registration) => registration.Person.Email))].join("\n") }
                      </p>
                    </div>
                  )}
                </For>
              </section>
            </>
          )}
        </For>
      </section>
    </Show>
  );
}

export default RegistrationsList;