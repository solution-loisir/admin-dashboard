// Taken from https://stackoverflow.com/questions/34849001/check-if-css-selector-is-valid.

const isSelectorValid = ((dummyElement) => (selector) => {
  try { 
    dummyElement.querySelector(selector);
  } catch { 
    return false; 
  }
  return true;
})(document.createDocumentFragment());

export {
  isSelectorValid
}