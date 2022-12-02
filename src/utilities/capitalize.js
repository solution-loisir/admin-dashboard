function capitalize(string) {
  if (typeof string !== "string") throw new Error("Capitalize filter argument must be a string.");
  return string[0].toUpperCase() + string.slice(1);
}

export {
  capitalize
}