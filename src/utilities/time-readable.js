export const timeReadable = date => new Date(date).toLocaleString("fr-CA", {
  timeZone: "UTC",
  hour12: false,
  hour: "numeric",
  minute: "2-digit"
}).replace(/ h /, ":").replace(/^0/, "");