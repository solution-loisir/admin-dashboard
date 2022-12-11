export const addEmoji = (category) => {
  switch(category) {
    case "Niveau initiation • 2 à 6 mois":
      return "Niveau initiation 🐢 2 à 6 mois";
    case "Niveau initiation • 2 à 7 mois":
      return "Niveau initiation 🐢 2 à 7 mois";
    case "Niveau 1 • 6 à 12 mois":
      return "Niveau 1 🐟 6 à 12 mois";
    case "Niveau 2 • 1 à 2 ans":
      return "Niveau 2 🐳 1 à 2 ans";
    case "Niveau 3 • 2 à 3 ans":
      return "Niveau 3 🐸 2 à 3 ans";
    case "Niveau 4 • 3 à 4 ans":
      return "Niveau 4 🦈 3 à 4 ans";
    case "Niveau 5 • 4 à 5 ans":
      return "Niveau 5 🐬 4 à 5 ans";
    default:
      return category;
  }
}