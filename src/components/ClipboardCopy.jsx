import { isSelectorValid } from "../utilities/is-selector-valid";

function ClipboardCopy(props) {
  return (
    <button onClick={() => {
      if(!isSelectorValid(props.for)) return;
      const node = document.querySelector(props.for);
      navigator.clipboard.writeText(node.textContent);
      window.dispatchEvent(new CustomEvent("copied"));
    }}
    type="button"
    >{props.label}</button>
  );
}

export default ClipboardCopy;