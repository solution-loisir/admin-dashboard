import { For, useContext } from "solid-js";
import { Title } from "@solidjs/meta";
import { RegistrationsContext } from "../pages/RegistrationsLayout";
import ClipboardCopy from "./ClipboardCopy";
import { getEmailList } from "../utilities/getEmailList";

function EmailList() {
  const state = useContext(RegistrationsContext);
  const emails = () => getEmailList(state());
  const numberOfEmails = () => emails().length;
  return (
    <>
      <Title>Bulle | 🧮 Inscriptions - courriels</Title>
      <div class="flow" data-flow-space="size-300">
        <div class="flex">
          <ClipboardCopy label="Copier les courriels" for="#emails" />
          <span><b>({numberOfEmails()})</b></span>
        </div>
        <p id="emails">
          <For each={emails()}>
            {(email) => (
              <>
                {`${email}\n`}<br />
              </>
            )}
          </For>
        </p>
      </div>
    </>
  );
}

export default EmailList;