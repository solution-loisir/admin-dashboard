function getEmailList(source) {
  return Object.keys(source).reduce((array, current) => {
    source[current].forEach(activity => {
      activity.Registrations.forEach(registration => {
        if(registration.Person.Email) array.push(registration.Person.Email.toLowerCase());
      });
    });
    return [...new Set(array.sort())];
  }, []);
}

export {
  getEmailList
}