import { createSignal, Show, createEffect, onCleanup } from "solid-js";

function ClipboardCopyFeedback() {
  const [isShowing, setIsShowing] = createSignal(false);
  const showFeedback = () => {
    setIsShowing(true);
    setTimeout(() => setIsShowing(false), 2500);
  }
  createEffect(() => window.addEventListener("copied", showFeedback));
  onCleanup(() => window.removeEventListener("copied", showFeedback));
  return (
    <Show when={isShowing()}>
      <p class="clipboard-copy-feedback">Adresses copiées</p>
    </Show>
  );
}

export default ClipboardCopyFeedback;