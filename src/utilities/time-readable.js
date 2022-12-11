export const timeReadable = date => new Date(date).toLocaleString("fr-CA", {
  timeZone: "America/New_York",
  hour12: false,
  hour: "numeric",
  minute: "2-digit"
}).replace(/ h /, ":").replace(/^0/, "");