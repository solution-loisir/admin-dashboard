module.exports = (activities) => {
  const model = activities.reduce((object, activity) => {
    if(!object[activity.CategoryName]) object[activity.CategoryName] = [];
    object[activity.CategoryName].push(activity);
    return object;
  }, {});

  let initiationKey = "";
  const restOfKeys = Object.keys(model).sort();

  restOfKeys.forEach((key, index, origin) => {
    if(key.includes("initiation")) {
      initiationKey = origin.splice(index, 1);
    }
  });

  const reorderedModel = [initiationKey, ...restOfKeys].reduce((acc, current) => {
    acc[current] = model[current];
    return acc;
  }, {});

  const addingEmojis = JSON.stringify(reorderedModel)
    .replace(/Niveau initiation • 2 à 6 mois/g, "Niveau initiation 🐢 2 à 6 mois")
    .replace(/Niveau initiation • 2 à 7 mois/g, "Niveau initiation 🐢 2 à 7 mois")
    .replace(/Niveau 1 • 6 à 12 mois/g, "Niveau 1 🐟 6 à 12 mois")
    .replace(/Niveau 2 • 1 à 2 ans/g, "Niveau 2 🐳 1 à 2 ans")
    .replace(/Niveau 3 • 2 à 3 ans/g, "Niveau 3 🐸 2 à 3 ans")
    .replace(/Niveau 4 • 3 à 4 ans/g, "Niveau 4 🦈 3 à 4 ans")
    .replace(/Niveau 5 • 4 à 5 ans/g, "Niveau 5 🐬 4 à 5 ans");

  const reorderedModelWithEmojis = JSON.parse(addingEmojis);

  return reorderedModelWithEmojis;
};