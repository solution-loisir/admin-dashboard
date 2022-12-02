const dateReadable = (date) => new Date(date).toLocaleString('fr-CA', {timeZone: "UTC", year: 'numeric' , month: 'long', day: 'numeric'});

export {
  dateReadable
};